"use client";

export default function DeleteButton({ handleDelete, commentId }) {
  return (
    <button
      onClick={() => {
        handleDelete(commentId);
      }}
    >
      Delete
    </button>
  );
}
