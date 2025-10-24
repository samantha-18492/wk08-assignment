import { db } from "@/app/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { creepster } from "@/app/layout";

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
    <div className="py-6">
      <h2 className={`${creepster.className} text-3xl pb-4`}>Add a comment</h2>
      <form
        action={handleSubmit}
        className="flex flex-col gap-2 bg-white border-2 border-fear-orange rounded-md p-4 text-left"
      >
        <label>Your name:</label>
        <input
          name="author"
          required
          className="border border-fear-brown rounded"
        />
        <label>Your comment:</label>
        <textarea
          name="comment"
          required
          className="border border-fear-brown rounded"
        />
        <div className="justify-center text-center">
          <button
            type="submit"
            className="bg-fear-green rounded-md px-8 font-bold py-1 shadow-md shadow-fear-brown/50 hover:bg-fear-brown hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
