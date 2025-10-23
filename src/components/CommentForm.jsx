import { db } from "@/app/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function CommentForm({ postId }) {
  async function handleSubmit(formData) {
    "use server";

    const { author, comment } = Object.fromEntries(formData);
    const newComment = await db.query(
      `INSERT INTO blog_comments (author, comment, post_id) VALUES ($1, $2, $3)`,
      [author, comment, postId]
    );
    console.log(newComment);

    revalidatePath(`/posts/${postId}`);
    redirect(`/posts/${postId}`);
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
