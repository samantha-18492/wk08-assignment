import { db } from "@/app/utils/utilities.js";

export default async function CommentDisplay({ postId }) {
  const res = await db.query(`SELECT * FROM blog_comments WHERE id = $1`, [
    postId,
  ]);
  const comments = res.rows;

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.author}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
