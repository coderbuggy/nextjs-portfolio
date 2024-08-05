"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import Spinner from "@/components/Spinner";
import DOMPurify from "dompurify";

function BlogPost() {
  const params = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) return <Spinner />;

  if (!blog) return <p>Blog Not Found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-center text-gray-500 mb-4">
        {new Date(blog.date.seconds * 1000).toDateString()}
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
      ></div>
    </div>
  );
}

export default BlogPost;
