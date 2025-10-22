import { db } from "@/app/utils/utilities.js";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await db.query(`SELECT * FROM posts WHERE id = $1`, [id]);
  const posts = res.rows;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
          <p>Posted on: date</p>
          <p>{post.content}</p>
        </div>
      ))}
      {/* Add form component */}
    </div>
  );
}
