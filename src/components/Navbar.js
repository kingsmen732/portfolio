import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-80 shadow-lg dark:bg-gray-900 dark:bg-opacity-80" : ""
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 pt-5">
          <a href="/" className="flex items-center">
            <svg
              className="w-8 h-8 text-green-400 dark:text-green-400" // Light green color for the logo
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
          <div className="hidden sm:flex space-x-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 dark:text-gray-700 px-3 py-2 rounded-md text-md font-medium hover:text-indigo-600 dark:hover:text-indigo-300 transition"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Add a button for toggling the mobile menu */}
            <button
              className="sm:hidden text-gray-800 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full top-16 left-0">
          <div className="flex flex-col space-y-2 p-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 text-gray-800 dark:text-gray-300 rounded-md text-md font-medium hover:text-indigo-600 dark:hover:text-indigo-300 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}