import { db } from "@/app/utils/utilities.js";
import CommentForm from "@/components/CommentForm";
import CommentDisplay from "@/components/CommentDisplay";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await db.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
  const posts = res.rows[0];
  console.log(posts);

  return (
    <div>
      <div className="flex justify-end">
        <Link
          href="/posts"
          className="py-4 px-8 rounded-lg bg-fear-green text-fear-brown text-3xl shadow-lg shadow-fear-brown/50"
        >
          Back
        </Link>
      </div>
      <div>
        <div>
          <h2 className="text-left">{posts.title}</h2>
          <p className="text-left text-lg">By {posts.author}</p>
          <p className="text-left text-lg">Posted on: {posts.created_at}</p>
          <Image src={posts.img_url} alt="" height={425} width={640} />
          <p className="whitespace-pre-line">{posts.content}</p>
          <p>🎥 🍿 Films to watch or avoid (you choose!):</p>
          <p className="whitespace-pre-line">{posts.recommended_films}</p>
          <p className="italic">💬 {posts.prompt}</p>
        </div>
        <CommentForm postId={id} />
        <CommentDisplay postId={id} />
      </div>
    </div>
  );
}
