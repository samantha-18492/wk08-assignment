import { db } from "@/app/utils/utilities.js";
import Link from "next/link";
import { creepster } from "../layout";

export default async function Page({ searchParams }) {
  const res = await db.query(`SELECT * FROM blog_posts ORDER BY id ASC`);
  const posts = res.rows;

  const pageSearchParams = await searchParams;
  if (pageSearchParams.sortBy == "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2 className={`${creepster.className} text-3xl pb-4`}>
        Choose your terror
      </h2>
      <div className="flex justify-center pb-5">
        <p className="py-1">Sort:</p>
        <Link
          href="/posts?sortBy=desc"
          className="py-1 px-2 rounded-md bg-fear-green text-fear-off-white ml-2 mr-2 inline-block shadow-lg shadow-fear-brown/50 hover:bg-gray-600 hover:text-white"
        >
          Newest to oldest
        </Link>
        <Link
          href="/posts?sortBy=asc"
          className="py-1 px-2 rounded-md bg-fear-green text-fear-off-white ml-2 inline-block shadow-lg shadow-fear-brown/50 hover:bg-gray-600 hover:text-white"
        >
          Oldest to newest
        </Link>
      </div>
      <div className="flex flex-col justify-self-center max-w-lg pb-18">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="block border-3 bg-white border-fear-orange text-left rounded-sm m-2 p-2 shadow-md hover:shadow-lg"
          >
            <h2 className="font-bold">{post.title}</h2>
            <p className="text-xl text-gray-700">
              By {post.author} • {post.created_at}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
