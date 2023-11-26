import React from 'react';
import ArchiveNote from './ArchiveNote';
import DeleteNote from './DeleteNote';

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className='container mt-4 mx-auto'>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:grid-cols-4">
          {notes.map((note) => (
            <li key={note.id} className="border border-gray-400 rounded-lg overflow-hidden shadow-md">
              <div className="m-3">
                <h1 className="text-lg mb-2">{note.title}</h1>
                <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{note.body}</p>
                <p className='text-sm'>Created on {note.createdAt}</p>
                <DeleteNote onDelete={onDelete} id={note.id}/>
                <ArchiveNote onArchive={onArchive} id={note.id} archived={note.archived}/>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default NoteList;