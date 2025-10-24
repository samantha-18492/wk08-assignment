import { db } from "@/app/utils/utilities.js";
import CommentForm from "@/components/CommentForm";
import CommentDisplay from "@/components/CommentDisplay";
import Image from "next/image";
import Link from "next/link";
import { creepster } from "@/app/layout";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await db.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
  const posts = res.rows[0];
  console.log(posts);

  return (
    <div>
      <div className="flex justify-end pb-4">
        <Link
          href="/posts"
          className="py-2 px-4 rounded-full bg-fear-green text-fear-brown text-2xl shadow-lg shadow-fear-brown/50 hover:bg-fear-brown hover:text-white"
        >
          Back
        </Link>
      </div>
      <div className="text-left">
        <h2 className="font-bold text-3xl">{posts.title}</h2>
        <div className="flex gap-6">
          <p className="text-lg">By {posts.author}</p>
          <p className="text-lg">Posted on: {posts.created_at}</p>
        </div>
        <Image
          src={posts.img_url}
          alt=""
          height={850}
          width={1280}
          className="pb-6"
        />
        <p className="whitespace-pre-line pb-6">{posts.content}</p>
        <h2 className="font-semibold">
          Films to watch or avoid (you choose!):
        </h2>
        <p className="whitespace-pre-line pb-6">{posts.recommended_films}</p>
        <p className="italic">💬 {posts.prompt}</p>
      </div>
      <CommentForm postId={id} />
      <h2 className={`${creepster.className} text-3xl pb-4`}>Comments</h2>
      <CommentDisplay postId={id} />
    </div>
  );
}
