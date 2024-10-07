import React from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';

const MainContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4">
        <div className="flex-1 rounded-lg p-6">
          <ProfileSidebar />
        </div>
        <div className="flex-1 rounded-lg p-6">
          <BentoLayout />
        </div>
      </div>
      <div className="my-5 lg:my-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
