import React from 'react';
import NoteList from './NoteList';

const ArchivedNotes = ({ archivedNotes, onDelete, onArchive }) => {
  return (
    <div>
      {archivedNotes.length > 0 && (
        <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
      )}
    </div>
  );
};

export default ArchivedNotes;