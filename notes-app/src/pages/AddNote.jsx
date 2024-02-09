import React from "react";
import { addNote } from "../utils/local-data";
import SideBar from "../components/SideBar";
import NoteInput from "../components/NoteInput";
import { useNavigate } from 'react-router-dom';

function AddNote() {
    const navigate = useNavigate()

    function onAddNoteHandler(note) {
      addNote(note)
      navigate('/');
    }
   
    return (
      <div>
        <SideBar />
        <div className="p-4 ml-0 sm:ml-64">
            <NoteInput addNote={onAddNoteHandler} />
        </div>
      </div>
    )
}
   
export default AddNote;