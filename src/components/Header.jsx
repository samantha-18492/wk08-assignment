import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex gap-15">
        <h1>31 Days Later</h1>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/posts">Blog</Link>
          <Link href="/add-post">Add a post</Link>
        </nav>
      </header>
    </>
  );
}
