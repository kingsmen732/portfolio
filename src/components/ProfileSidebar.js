import React from 'react';
import Typical from 'react-typical';

const ProfileSidebar = () => {
  return (
    <div className="flex flex-col justify-center h-full text-gray-800 p-4">
      <h2 className="text-2xl lg:text-3xl font-light">I'm</h2>
      <h1 className="text-4xl lg:text-6xl font-bold">Kiran Kumar Petlu</h1>
      <p className="text-xl lg:text-2xl font-light mb-4">Cyber Security enthusiast</p>
      <Typical
        steps={ [
          'Home @ 127.0.0.0', 2000,
          'Lifelong Learner', 2000,
          'Engineer for life', 2000,
          'Pentensting online fortress', 2000,
          'Bug Bounty hunter', 2000,
          'DSA Enthusiast', 2000
        ] }
        loop={ Infinity }
        wrapper="p"
        className="text-xl lg:text-2xl"
      />
    </div>

  );
};

export default ProfileSidebar;
