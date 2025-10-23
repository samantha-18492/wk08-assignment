export default function CommentForm() {
  return (
    <div>
      <h2>Add a comment</h2>
      <form className="flex flex-col gap-2">
        <label>Your name:</label>
        <input name="author" required />
        <label>Your comment:</label>
        <textarea name="comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
