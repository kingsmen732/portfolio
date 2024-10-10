import React from 'react';

const NavBar = () => {
  return (
    <nav className="w-full py-4 fixed top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-20 transition-all duration-500 ease-in-out">

        {/* Logo */}
        <div className="text-3xl font-bold transform hover:scale-110 transition-transform duration-500">
          <a href="#home" className="hover:text-blue-500">Portfolio</a>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg justify-center w-full">
          {/* About Link */}
          <a href="#about" className="group relative inline-block">
            <span className="group-hover:text-blue-500 transform group-hover:scale-105 transition-all duration-500 ease-out">About</span>
            {/* Creative Line Animation */}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
          </a>

          {/* Work Link */}
          <a href="#work" className="group relative inline-block">
            <span className="group-hover:text-blue-500 transform group-hover:scale-105 transition-all duration-500 ease-out">Work</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
          </a>

          {/* Projects Link */}
          <a href="#projects" className="group relative inline-block">
            <span className="group-hover:text-blue-500 transform group-hover:scale-105 transition-all duration-500 ease-out">Projects</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
          </a>

          {/* Contact Link */}
          <a href="#contact" className="group relative inline-block">
            <span className="group-hover:text-blue-500 transform group-hover:scale-105 transition-all duration-500 ease-out">Contact</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
