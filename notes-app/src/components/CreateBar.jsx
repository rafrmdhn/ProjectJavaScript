import React from "react";
import { Link } from "react-router-dom";

const CreateBar = ({ title }) => {
    return (
        <div className="w-full flex justify-between items-center p-3 mt-8 sm:mt-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Link to={`/new`} id="openModalBtn" className="flex items-center bg-black  border border-black text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p className="text-white">New Note</p>
            </Link>
        </div>
    );
};

export default CreateBar;