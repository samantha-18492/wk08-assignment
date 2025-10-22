// shows a form so a user can submit their own blog post (fields: name, author, content). this data should be sent to the posts table and the user should be redirected to the posts page (where they should see their new post available to read)
import { db } from "@/app/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Page() {
  async function handleSubmit(formData) {
    "use server";

    const { title, author, content, recommended_films, prompt } =
      Object.fromEntries(formData);
    const newPost = db.query(
      `INSERT INTO blog_posts (title, author, content, recommended_films, prompt) VALUES ($1, $2, $3, $4, $5)`,
      [title, author, content, recommended_films, prompt]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div>
      <h2>Add a new post</h2>
      <form action={handleSubmit} className="flex flex-col gap-2">
        <label>Post title</label>
        <input name="title" placeholder="Day [x]: Fear of [x]" required />
        <label>Author&apos;s name</label>
        <input name="author" placeholder="Your name" required />
        <label>Main content</label>
        <textarea
          name="content"
          placeholder="Start writing your post..."
          required
        />
        <label>Associated films</label>
        <textarea
          name="recommended_films"
          placeholder="[Movie title] (Year) - [why you've chosen it]"
          required
        />
        <label>Add a prompt to encourage readers to post a comment</label>
        <input
          name="prompt"
          placeholder="e.g. What are your thoughts on [insert fear]"
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
