import React from 'react';
import Typical from 'react-typical';
import { name, skills, title } from '../profileconfig.js';

const ProfileSidebar = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col justify-center h-full p-4">
      {/* Introduction */}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-light ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
      >
        I'm
      </h2>

      {/* Name */}
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
      >
        {name}
      </h1>

      {/* Title */}
      <p
        className={`text-lg sm:text-xl lg:text-2xl font-light mb-4 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {title}
      </p>

      {/* Skills Typing Animation */}
      <Typical
        steps={skills}
        loop={Infinity}
        wrapper="p"
        className={`text-lg sm:text-xl lg:text-2xl ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
      />
    </div>
  );
};

export default ProfileSidebar;
