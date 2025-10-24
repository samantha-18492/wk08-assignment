import Link from "next/link";
import { creepster } from "@/app/layout";

export default function Header() {
  return (
    <>
      <header
        className={`${creepster.className} w-full h-24 flex justify-between items-center bg-black text-fear-orange px-4`}
      >
        <h1 className="text-4xl">31 Days Later</h1>
        <nav className="flex gap-4 text-xl">
          <Link href="/">Home</Link>
          <Link href="/posts">Blog</Link>
          <Link href="/add-post">Add post</Link>
        </nav>
      </header>
    </>
  );
}
