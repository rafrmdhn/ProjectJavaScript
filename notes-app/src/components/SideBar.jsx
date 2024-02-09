import React, { useState, useEffect } from "react";
import { FaHome, FaArchive } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.getElementById('default-sidebar');
            if (isOpen && sidebar && !sidebar.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return(
        <div className="block">
            <button onClick={toggleSidebar} className="fixed top-0 left-0 z-40 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? '' : '-translate-x-full sm:translate-x-0'}`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <Link to={`#`} className="flex items-center ps-2.5 mb-5">
                    <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Notes App</span>
                </Link>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to={`/`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaHome />
                        <span className="ms-3">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/archived`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaArchive />
                        <span className="ms-3">Archive</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </aside>
        </div>
    );
};

export default SideBar;