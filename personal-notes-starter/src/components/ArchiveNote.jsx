import React from "react";

function ArchiveNote({ onArchive, id, archived }) {
  return (
    <button onClick={() => onArchive(id)}>
      {archived ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveNote;