"use client";
import BlogList from "@/components/BlogList";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import Spinner from "@/components/Spinner";

function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        date: doc.data().date,
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) return <Spinner />;

  if (blogs.length === 0) return <p>Blogs Not Found.</p>;

  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-3">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}

export default BlogPage;
