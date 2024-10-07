import React from 'react';

const getCurrentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="text-gray-800">
      <p className="text-base lg:text-lg">
        &copy; {getCurrentYear} kingsmen734
      </p>
    </div>
  );
};

export default Footer;
