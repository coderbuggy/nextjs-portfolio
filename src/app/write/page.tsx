"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import { addDoc, collection } from "firebase/firestore";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, loading] = useAuthState(auth);
  const [userSession, setUserSession] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = sessionStorage.getItem("user");
      setUserSession(session);
    }
  }, []);

  useEffect(() => {
    if (!loading && (!user || !userSession)) {
      router.push("/login");
    }
  }, [loading, user, userSession, router]);

  if (loading) return <Spinner />;

  // İçeriğin yalnızca oturum açmış kullanıcılar tarafından görülmesini sağlar
  if (!user || !userSession) return null;

  const handleChange = (value: any) => {
    setContent(value);
  };

  const savePost = async (content: any) => {
    try {
      const blogPost = await addDoc(collection(db, "blogs"), {
        title: title,
        date: new Date(),
        content: content,
      });
      console.log("Post saved with ID:", blogPost.id);
    } catch (error) {
      console.error("Error saving post:", error);
    } finally {
      setContent("");
      setTitle("");
    }
  };

  return (
    <div className="p-10">
      <div>
        <Input
          placeholder="Blog Title"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <ReactQuill value={content} onChange={handleChange} />
      </div>
      <div className="flex items-center justify-end mt-10">
        <Button variant="secondary" onClick={() => savePost(content)}>
          Save Post
        </Button>
      </div>
    </div>
  );
}
