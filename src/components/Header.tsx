"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  console.log(pathname);

  return (
    <header className="flex flex-col p-10 justify-between items-center bg-black text-white shadow-slate-500 shadow-md">
      <h1 className="text-2xl font-bold">bugrayuksel</h1>
      <nav>
        <ul className="flex space-x-4 mt-10">
          <li>
            <Link
              className={`relative pb-2 ${
                isActive("/") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/"
            >
              /home
            </Link>
          </li>
          <li>
            <Link
              className={`relative pb-2 ${
                isActive("/projects") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/projects"
            >
              /projects
            </Link>
          </li>
          <li>
            <Link
              className={`relative pb-2 ${
                isActive("/blog") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/blog"
            >
              /blog
            </Link>
          </li>
          <li>
            <Link
              className={`relative pb-2 ${
                isActive("/contact") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/contact"
            >
              /contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
