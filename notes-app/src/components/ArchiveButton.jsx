import React from "react";
import PropTypes from 'prop-types'; 
import { FaArchive} from "react-icons/fa";
import { MdUnarchive } from "react-icons/md";

function ArchiveButton({ id, onArchive, archived }){
    return (
        <button className="bg-black mt-3 border border-black text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300" onClick={() => onArchive(id)}>
            {archived ? <MdUnarchive /> : <FaArchive />}
        </button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool
}

export default ArchiveButton;