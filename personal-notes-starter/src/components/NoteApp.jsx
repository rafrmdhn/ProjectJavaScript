import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from '../utils/index';

import SearchBar from './SearchBar';
import AddNote from './AddNote';
import NoteList from './NoteList';
import ArchivedNotes from './ArchivedNotes';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const DeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const ArchiveNote = (id) => {
    const updatedNotes = notes.map((note) => {
    if (note.id === id) {
      return { ...note, archived: !note.archived };
    }
    return note;
  });
  setNotes(updatedNotes);
  }

  const searchNotes = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const nonArchivedNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div>
      <nav className='fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#ffffff] transition duration-700 ease-out'>
        <div className='flex justify-between p-3'>
          <div class="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-black">
				    My Note
			    </div>
          <SearchBar onSearch={searchNotes} />
        </div>
      </nav>
          <AddNote onAdd={addNote} />
          <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>Note Active</div>
          {nonArchivedNotes.length > 0 ? (
            <NoteList notes={nonArchivedNotes} onDelete={DeleteNote} onArchive={ArchiveNote} />
          ) : (
            <p>No Note</p>
          )}
          <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>Archive Note</div>
          {archivedNotes.length > 0 ? (
          <ArchivedNotes archivedNotes={archivedNotes} onDelete={DeleteNote} onArchive={ArchiveNote} />
          ) : (
            <p>No Archived Note</p>
          )}
    </div>
  );
};

export default App;