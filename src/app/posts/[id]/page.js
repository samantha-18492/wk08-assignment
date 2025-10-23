import { db } from "@/app/utils/utilities.js";
import CommentForm from "@/components/CommentForm";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await db.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
  const posts = res.rows;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>By {post.author}</p>
          <p>Posted on: date</p>
          {/* Add <Image src={post.img_url} alt="" />*/}
          <p className="whitespace-pre-line">{post.content}</p>
          <p>🎬 Films to watch or avoid (you choose!):</p>
          <p className="whitespace-pre-line">{post.recommended_films}</p>
          <p className="italic">💭 {post.prompt}</p>
        </div>
      ))}
      <CommentForm />
    </div>
  );
}
