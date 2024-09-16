"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import Spinner from "@/components/Spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addDoc, collection } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function WritePage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <Spinner />;

  const savePost = async () => {
    if (title === "" || content === "") {
      return alert("Please enter a title or content.");
    }
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

  function onChange(e: any) {
    setContent(e.target.value);
  }

  return (
    <div className="p-10">
      <div>
        <Input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-3 bg-white text-black">
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </div>
      <div className="flex items-center justify-end mt-10">
        <Button variant="secondary" onClick={savePost}>
          Save Post
        </Button>
      </div>
    </div>
  );
}

export default WritePage;
