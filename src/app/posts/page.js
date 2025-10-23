import { db } from "@/app/utils/utilities.js";
import Link from "next/link";

export default async function Page({ searchParams }) {
  const res = await db.query(`SELECT * FROM blog_posts ORDER BY id ASC`);
  const posts = res.rows;

  const pageSearchParams = await searchParams;
  if (pageSearchParams.sortBy == "desc") {
    posts.reverse();
  }

  return (
    <div>
      <Link href="/posts?sortBy=desc">Newest to oldest</Link>
      <Link href="/posts?sortBy=asc">Oldest to newest</Link>
      <p>Some text that introduces the list of posts</p>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
        </Link>
      ))}
    </div>
  );
}
