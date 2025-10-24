import { db } from "@/app/utils/utilities.js";
import CommentForm from "@/components/CommentForm";
import CommentDisplay from "@/components/CommentDisplay";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await db.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
  const posts = res.rows[0];
  console.log(posts);

  return (
    <div>
      <div>
        <h2>{posts.title}</h2>
        <p>By {posts.author}</p>
        <p>Posted on: {posts.created_at}</p>
        <Image src={posts.img_url} alt="" height={425} width={640} />
        <p className="whitespace-pre-line">{posts.content}</p>
        <p>🎥 🍿 Films to watch or avoid (you choose!):</p>
        <p className="whitespace-pre-line">{posts.recommended_films}</p>
        <p className="italic">💬 {posts.prompt}</p>
      </div>
      <CommentForm postId={id} />
      <CommentDisplay postId={id} />
    </div>
  );
}
