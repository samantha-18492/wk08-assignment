import { db } from "@/app/utils/utilities.js";
import CommentForm from "@/components/CommentForm";
import CommentDisplay from "@/components/CommentDisplay";

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
        <p>Posted on: date</p>
        {/* Add <Image src={post.img_url} alt="" />*/}
        <p className="whitespace-pre-line">{posts.content}</p>
        <p>🎬 Films to watch or avoid (you choose!):</p>
        <p className="whitespace-pre-line">{posts.recommended_films}</p>
        <p className="italic">💭 {posts.prompt}</p>
      </div>
      <CommentForm postId={id} />
      {/* pass in the id of post to CommentForm so it can use the id to link our new comments to the correct post */}
      {/* Add CommentDisplay /> pass in the id of post (likewise for commentForm) to fetch correct comments*/}
      <CommentDisplay postId={id} />
    </div>
  );
}
