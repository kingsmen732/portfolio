import React from 'react';
import Typical from 'react-typical';
import { name ,skills,title, } from '../profileconfig.js';



const ProfileSidebar = (props) => {
  const isDarkMode=props.isDarkMode;
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-center h-full text-gray-800 p-4">
      <h2 className="text-2xl lg:text-3xl font-light"> I'm</h2>
      <h1>
        {/* added typing effect for the name */}
      <Typical 
       steps={name }
        loop={1}
        wrapper="h1"
        className="text-2xl lg:text-3xl font-bold"
       />
      </h1>
      
=======
    <div className="flex flex-col justify-center h-full  p-4">
      <h2 className={`text-2xl lg:text-3xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>I'm</h2>
      <h1 className={`text-4xl  font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{name}</h1>
>>>>>>> upstream/main
      <p className="text-xl lg:text-2xl font-light mb-4">{title}</p>
      <Typical
        steps={ skills }
        loop={ Infinity }
        wrapper="p"
        className="text-xl lg:text-2xl"
      />
     
    </div>
  );
};

export default ProfileSidebar;
