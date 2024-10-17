import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

  

const Footer = ( ) => {
  return (
    <footer className={`text-2xl lg:text-3xl font-light  'text-white bg-black' : 'text-black bg-white'}`}>
      {/* Top section for links */}
      <div className="container mx-1 grid grid-cols-2 md:grid-cols-5 gap-20">
        <div>
          <h4 className="font-semibold text-lg hover:text-gray-400 cursor-pointer">Coding Stats</h4>
        </div>
        <div>
          <h4 className="font-semibold text-lg hover:text-gray-400 cursor-pointer">Events</h4>
        </div>
        <div>
          <h4 className="font-semibold text-lg hover:text-gray-400 cursor-pointer">Accolades</h4>
        </div>
        <div>
          <h4 className="font-semibold text-lg hover:text-gray-400 cursor-pointer">My Resume</h4>
        </div>
        <div>
          <h4 className="font-semibold text-lg hover:text-gray-400 cursor-pointer">Repos</h4>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-1 flex justify-center mt-8 space-x-6">
        <a href="mailto:Mithilesh@example.com" className={`text-2xl hover:text-gray-400 'text-white' : 'text-black'}`}>
          <FaEnvelope />
        </a>
        <a href="https://github.com/Mithilesh" className={`text-2xl hover:text-gray-400  'text-white' : 'text-black'}`}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/Mithilesh/" className={`text-2xl hover:text-gray-400  'text-white' : 'text-black'}`}>
          <FaLinkedin />
        </a>
      </div>
      <div className={`footer gap-10 pl-2 pr-2  'bg-black text-white' : 'bg-white text-black'}`}>

        {/* Bottom section */}
        <div className="container mx-auto flex justify-between items-center mt-8 gap-40 pl-0.5 pr-0.5">
          {/* Left side with name */}
          <div>
            <p className="text-lg font-bold pl-0.5 pr-0.5">© 2024, Mithilesh</p>
          </div>
          {/* Right side with feedback link */}
          <div>
            <a href="#feedback" className="text-lg hover:text-gray-400 cursor-pointer">
              <p className='got font-bold'>Got any feedback?</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;