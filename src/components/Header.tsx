"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig"; // Firebase konfigürasyonunuzu import edin

export default function Header() {
  const pathname = usePathname();
  const [user] = useAuthState(auth);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex flex-col p-10 justify-between items-center bg-black text-white">
      <h1
        className={`text-2xl font-bold ${
          user ? "text-blue-600" : "text-white"
        }`}
      >
        bugrayuksel.dev
      </h1>
      <nav>
        <ul className="flex space-x-4 mt-10 list-none">
          <li className="list-none">
            <Link
              className={`relative pb-2 ${
                isActive("/") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/"
            >
              /home
            </Link>
          </li>
          <li className="list-none">
            <Link
              className={`relative pb-2 ${
                isActive("/projects") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/projects"
            >
              /projects
            </Link>
          </li>
          {/* <li className="list-none">
            <Link
              className={`relative pb-2 ${
                isActive("/blog") ? "border-b-2 border-blue-500" : ""
              }`}
              href="/blog"
            >
              /blog
            </Link>
          </li> */}
          <li className="list-none">
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
