"use client";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/firebaseConfig";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import { addDoc, collection } from "firebase/firestore";
import { Input } from "@/components/ui/input";

// @ts-ignore: Unreachable code error
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

import "@toast-ui/editor/dist/toastui-editor.css";

function WritePage() {
  const ref: any = useRef();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const EditorCo = forwardRef((props, ref) => {
    return <Editor {...props} ref={ref} />;
  });

  EditorCo.displayName = "EditorCo";

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <Spinner />;

  const savePost = async () => {
    debugger;
    if (ref.current) {
      // @ts-ignore: Unreachable code error
      const contentHTML = ref.current.getInstance().getHTML();
      try {
        const blogPost = await addDoc(collection(db, "blogs"), {
          title: title,
          date: new Date(),
          content: contentHTML,
        });
        console.log("Post saved with ID:", blogPost.id);
      } catch (error) {
        console.error("Error saving post:", error);
      } finally {
        setContent("");
        setTitle("");
      }
    }
  };

  return (
    <div className="p-10">
      <div>
        <Input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <EditorCo
          // @ts-ignore: Unreachable code error
          ref={ref}
          // @ts-ignore: Unreachable code error
          initialEditType="wysiwyg"
          height="600px"
          useCommandShortcut={true}
        />
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
