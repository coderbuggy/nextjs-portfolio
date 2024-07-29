import BlogList from "@/components/BlogList";

const blogs = [
  { id: "1", title: "Blog 1 Title", date: "01/10/2024" },
  { id: "2", title: "Blog 2 Title", date: "01/10/2024" },
  { id: "3", title: "Blog 3 Title", date: "01/10/2024" },
];

function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto mt-5">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}
export default BlogPage;
