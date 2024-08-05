import Link from "next/link";

const BlogList = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="p-4 space-y-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex justify-between items-center p-4 border rounded-lg hover:shadow-lg"
        >
          <Link
            href={`/blog/${blog.id}`}
            className="text-xl font-bold text-blue-600"
          >
            {blog.title}
          </Link>
          <span className="text-gray-500">
            {blog.date.toDate().toDateString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
