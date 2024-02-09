import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

const DetailNotes = () => {
    const { id } = useParams();
    const note = getNote(id);

    if (!note) {
        return <div>Note not found!</div>;
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-10 mx-auto">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">Note Name</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{note.title}</h1>
                <p className="leading-relaxed">{note.body}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"/>
                <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">{showFormattedDate(note.createdAt)}</span>
                </div>
            </div>
        </section>
    );
};

export default DetailNotes;
