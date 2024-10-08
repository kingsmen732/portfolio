import React from 'react'
import { useState } from 'react';
import { Sun, Moon, AlignJustify, X } from 'lucide-react'
import { Link } from 'react-router-dom';
function Navbar({ isDarkMode, toggleDarkMode }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <>
            <div className={`w-full hidden pr-4 py-2 justify-end gap-x-4 lg:flex fixed items-center ${isDarkMode ? 'text-white' : ''}`}>

                <span className='cursor-pointer hover:text-gray-600'>About Me</span>
                <span className='cursor-pointer hover:text-gray-600'>Projects</span>
                <span className='cursor-pointer hover:text-gray-600'>Contact</span>


                <button
                    onClick={toggleDarkMode}
                    className="p-2 bg-gray-800 text-white rounded-md  lg:block hidden"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>

            </div>


            <div className={`lg:hidden w-full flex flex-col items-end justify-end pt-2 text-xl font-semibold gap-2 fixed z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className='flex gap-2 pr-2 py-1 '>{isDarkMode ? <Sun onClick={toggleDarkMode}></Sun> : <Moon onClick={toggleDarkMode} />}
                    {!click && <AlignJustify onClick={handleClick} />}
                    {click && <X onClick={handleClick} />}
                </div>

                {click && <div className={`flex-col gap-2 w-full flex text-center ${isDarkMode ? 'text-white' : ''}`}>
                    <span className='border-b-2 border-gray-200 p-2'>About Me</span>
                    <span className='border-b-2 border-gray-200 p-2'>Projects</span>
                    <span className='border-b-2 border-gray-200 p-2'>Contact</span>
                </div>}


            </div>



        </>


    )
}

export default Navbar