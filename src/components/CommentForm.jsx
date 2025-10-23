import { db } from "@/app/utils/utilities.js";

export default function CommentForm({ postId }) {
  async function handleSubmit(formData) {
    "use server";

    const { author, content } = Object.fromEntries(formData);
    const newComment = db.query(
      `INSERT INTO blog_comments (author, content) VALUES ($1, $2)`,
      [author, content, postId]
    );
    console.log(newComment);
  }
  return (
    <div>
      <h2>Add a comment</h2>
      <form action={handleSubmit} className="flex flex-col gap-2">
        <label>Your name:</label>
        <input name="author" required />
        <label>Your comment:</label>
        <textarea name="comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
