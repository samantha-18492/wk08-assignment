import { db } from "@/app/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { creepster } from "../layout";

export default function Page() {
  async function handleSubmit(formData) {
    "use server";

    const {
      title,
      author,
      created_at,
      content,
      recommended_films,
      prompt,
      img_url,
    } = Object.fromEntries(formData);
    const newPost = await db.query(
      `INSERT INTO blog_posts (title, author, created_at, content, recommended_films, prompt, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [title, author, created_at, content, recommended_films, prompt, img_url]
    );

    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <div className="pb-24">
      <h2 className={`${creepster.className} text-3xl pb-4`}>
        Write your own fright
      </h2>
      <form
        action={handleSubmit}
        className="flex flex-col gap-2 bg-white border-2 border-fear-orange rounded-md p-4 text-left"
      >
        <label>Post title:</label>
        <input
          name="title"
          placeholder="Day [x]: Fear of [x]"
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Author&apos;s name:</label>
        <input
          name="author"
          placeholder="Your name"
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Post date:</label>
        <input
          name="created_at"
          placeholder="XX/10/2025"
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Main content:</label>
        <textarea
          name="content"
          placeholder="Start writing your post..."
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Associated films:</label>
        <textarea
          name="recommended_films"
          placeholder="[Movie title] (Year) - [why you've chosen it]"
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Add a prompt to encourage readers to post a comment:</label>
        <input
          name="prompt"
          placeholder="What are your thoughts on [insert fear]"
          required
          className="border border-fear-brown rounded px-2"
        />
        <label>Add an image URL to go with your post:</label>
        <input
          name="img_url"
          placeholder="https://images.unsplash.com/photo-1584475784921-d9dbfd9d17ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          required
          className="border border-fear-brown rounded px-2"
        />
        <div className="justify-center text-center pt-2">
          <button
            type="submit"
            className="bg-fear-green text-fear-off-white rounded-md text-3xl px-8 font-bold py-2 shadow-md shadow-fear-brown/50 hover:bg-fear-brown hover:text-white"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
