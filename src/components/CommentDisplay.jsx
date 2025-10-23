import { db } from "@/app/utils/utilities.js";
import DeleteButton from "./DeleteButton";
import { revalidatePath } from "next/cache";

export default async function CommentDisplay({ postId }) {
  const res = await db.query(`SELECT * FROM blog_comments WHERE post_id = $1`, [
    postId,
  ]);
  const comments = res.rows;

  async function handleDelete(commentId) {
    "use server";
    await db.query(`DELETE FROM blog_comments WHERE id = $1`, [commentId]);

    revalidatePath(`/posts/${postId}`);
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.comment}</p>
          <DeleteButton commentId={comment.id} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
