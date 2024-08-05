"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig"; // Firebase konfigürasyonunuzu import edin
import { Button } from "@/components/ui/button";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export default function WritePage() {
  const [content, setContent] = useState("");
  const [user, loading] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");
  const router = useRouter();
  debugger;
  useEffect(() => {
    if (!loading && (!user || !userSession)) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;

  const handleChange = (value: any) => {
    setContent(value);
  };

  const savePost = (content) => {
    console.log("Content saved:", content);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
      <Button variant="secondary" onClick={() => savePost(content)}>
        Save Post
      </Button>
    </div>
  );
}
