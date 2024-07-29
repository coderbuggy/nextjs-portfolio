"use client";
import { useParams } from "next/navigation";

// Örnek veri (gerçek veriyi API veya veritabanından çekeceksiniz)
const blogData = {
  "1": {
    title: "Blog 1 Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates voluptatum cum voluptatibus libero ipsa officiis minima cupiditate sunt sapiente, non qui fugit atque nobis odio. Porro nam sequi iste?",
    date: "2024-07-29",
  },
  "2": {
    title: "Blog 2 Title",
    content: "Content for blog post 2",
    date: "2024-07-28",
  },
  "3": {
    title: "Blog 3 Title",
    content: "Content for blog post 3",
    date: "2024-07-27",
  },
};

function BlogPost() {
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const blog = blogData[params.id];
  if (!blog) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-center text-gray-500 mb-4">{blog.date}</p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
