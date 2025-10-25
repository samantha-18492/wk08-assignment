"use client";

export default function DeleteButton({ handleDelete, commentId }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => {
          handleDelete(commentId);
        }}
        className="bg-fear-orange text-fear-off-white rounded-md px-2 py-1 text-lg shadow-md shadow-fear-brown/50 hover:bg-fear-green hover:text-white"
      >
        Delete
      </button>
    </div>
  );
}
