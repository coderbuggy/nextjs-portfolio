"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WritePage() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
      <button onClick={() => savePost(content)}>Save Post</button>
    </div>
  );
}

function savePost(content) {
  // Firebase veya başka bir backend servisine içeriği kaydetme
  console.log("Content saved:", content);
}
