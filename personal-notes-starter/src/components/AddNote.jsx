import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [validationError, setValidationError] = useState('');

  const MAX_TITLE_LENGTH = 50;

  const handleAddNote = () => {
    if (title.trim() === '' || body.trim() === '') {
      setValidationError('Title and Description are required!');
      return;
    }
    
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    onAdd(newNote);
    setTitle('');
    setBody('');
    setValidationError('');
  };

  return (
    <div className='p-4 py-8'>
      <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>Create New Note</div>
      <div className='editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl'>
      <input
        type="text"
        id="default-input"
        className='title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={MAX_TITLE_LENGTH}
      />
      <div class="count ml-auto text-gray-400 text-xs font-semibold">Characters left: {MAX_TITLE_LENGTH - title.length}</div>
      <textarea
        id="message"
        rows="4"
        className='description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none'
        placeholder="Drop your note here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <div className='buttons flex justify-end'>
          <button onClick={handleAddNote}>Add Note</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;