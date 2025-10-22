// shows a list of posts available to read. each item in the list is a link which takes the user to the individual post page. there should be a form element on this page so users can comment on the post topic
import { db } from "@/app/utils/utilities.js";
import Link from "next/link";

export default async function Page() {
  const res = await db.query(`SELECT * FROM posts`);
  const posts = res.rows;

  return (
    <div>
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
