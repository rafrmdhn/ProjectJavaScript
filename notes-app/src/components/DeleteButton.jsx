import React from "react";
import PropTypes from 'prop-types'; 
import { FaTrash } from "react-icons/fa";

function DeleteButton({ id, onDelete }) {
    return <button className='bg-red-500 mt-3 border border-black text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300' onClick={() => onDelete(id)}><FaTrash /></button>
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;