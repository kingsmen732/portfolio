import React from 'react';

const getCurrentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <p className="text-base lg:text-lg">
        &copy; {getCurrentYear} kingsmen734
      </p>
    </div>
  );
};

export default Footer;
