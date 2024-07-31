"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="relative flex flex-col">
      <input
        type="text"
        placeholder="Title"
        className="py-12 text-4xl border-none outline-none bg-transparent text-current placeholder:text-gray-400"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="mb-12 px-5 py-2.5 ml-12 w-max"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button className="w-9 h-9 rounded-full bg-transparent border border-current flex items-center justify-center cursor-pointer">
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-current absolute z-50 w-full left-12">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button
        className="absolute top-0 right-0 px-5 py-2.5 border-none bg-[#1a8917] text-white cursor-pointer rounded-full"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
