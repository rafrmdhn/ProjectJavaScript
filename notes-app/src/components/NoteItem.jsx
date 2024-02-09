import React from "react";
import { Link } from 'react-router-dom';
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import PropTypes from 'prop-types';
import ArchiveButton from "./ArchiveButton";

const NoteItem = ({ notes, onDelete, onArchive, archived }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {notes.map((note) => (
                <div key={note.id} className="bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300">
                    <Link to={`/notes/${note.id}`}>
                        <h2 className="text-xl font-semibold mb-4">{note.title}</h2>
                        <p className="text-gray-700">{note.body}</p>
                        <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                            <p className="text-gray-500">{showFormattedDate(note.createdAt)}</p>
                        </div>
                    </Link>
                    <div className="gap-3 flex inline-center">
                        <ArchiveButton id={note.id} onArchive={onArchive} archived={archived} />
                        <DeleteButton id={note.id} onDelete={onDelete}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

NoteItem.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            archived: PropTypes.bool.isRequired 
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired
};

export default NoteItem;