import React from "react";

function DeleteNote({ onDelete, id }) {
  return (
    <button onClick={() => onDelete(id)}>Delete</button>
  );
}

export default DeleteNote;