import { db } from "@/app/utils/utilities.js";
import DeleteButton from "./DeleteButton";
import { revalidatePath } from "next/cache";

export default async function CommentDisplay({ postId }) {
  const res = await db.query(
    `SELECT * FROM blog_comments WHERE post_id = $1 ORDER BY id DESC`,
    [postId]
  );
  const comments = res.rows;

  async function handleDelete(commentId) {
    "use server";
    await db.query(`DELETE FROM blog_comments WHERE id = $1`, [commentId]);

    revalidatePath(`/posts/${postId}`);
  }

  return (
    <div className="pb-20 text-left">
      <div>
        {comments.length === 0 ? (
          <div className=" bg-white border-2 border-fear-orange shadow-lg rounded-sm p-2 m-2">
            <p>
              👻 This fear is still waiting for its first victim! Be the first
              to break the silence using the comment form above.
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className=" bg-white border-2 border-fear-orange shadow-lg rounded-sm p-2 m-2"
            >
              <p className="text-xl text-gray-700">{comment.author}</p>
              <p className="italic">{comment.comment}</p>
              <DeleteButton
                commentId={comment.id}
                handleDelete={handleDelete}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
