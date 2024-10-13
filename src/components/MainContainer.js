import React, { useState } from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';

const MainContainer = () => {
  // Lift dark mode state to MainContainer
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'text-black'} px-4 lg:px-20`}>
      <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4">
        {/* Profile Sidebar */}
        <div className="flex-1 rounded-lg p-6">
          <ProfileSidebar isDarkMode={isDarkMode}/>
        </div>

        {/* BentoLayout Component: Pass dark mode state and toggle function */}
        <div className="flex-1 rounded-lg p-6">
          <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      {/* Contact Me Section */}
      <div className="flex flex-col items-center bg-gray-200 rounded-lg p-6 mt-8">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">I'd love to hear from you! You can reach out to me via email or through my social media channels.</p>
        <a href="mailto:your-email@example.com" className="bg-blue-500 text-white rounded px-4 py-2">
          Email Me
        </a>
      </div>

      {/* Footer */}
      <div className="my-5 lg:my-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;

