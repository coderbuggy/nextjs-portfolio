"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig"; // Firebase konfigürasyonunuzu import edin
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function WritePage() {
  const [content, setContent] = useState("");
  const [user, loading] = useAuthState(auth);
  const [userSession, setUserSession] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tarayıcı ortamında çalıştığından emin olun
      //sessionStorage hatası düzeltmek için :
      const session = sessionStorage.getItem("user");
      setUserSession(session);
    }
  }, []);

  useEffect(() => {
    if (!loading && (!user || !userSession)) {
      router.push("/login");
    }
  }, [user, loading, userSession]);

  if (loading) return <div>Loading...</div>;

  const handleChange = (value: any) => {
    setContent(value);
  };

  const savePost = (content: any) => {
    console.log("Content saved:", content);
    setContent("");
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="p-10">
      <div>
        <ReactQuill formats={formats} value={content} onChange={handleChange} />
      </div>
      <div className="flex items-center justify-end mt-10">
        <Button variant="secondary" onClick={() => savePost(content)}>
          Save Post
        </Button>
      </div>
    </div>
  );
}
