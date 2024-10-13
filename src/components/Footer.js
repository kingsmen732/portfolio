// import React from 'react';

// const getCurrentYear = new Date().getFullYear();

// const Footer = () => {
//   return (
//     <div>
//       <p className="text-base lg:text-lg">
//         &copy; {getCurrentYear} kingsmen734
//       </p>
//     </div>
//   );
// };

// export default Footer;
// import React from 'react';

// const getCurrentYear = new Date().getFullYear();

// const Footer = () => {
//   return (
//     <div>
//       <p className="text-base lg:text-lg">
//         &copy; {getCurrentYear} kingsmen734
//       </p>
//     </div>
//   );
// };

// export default Footer;
// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       {/* Top section for links */}
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
//         <div>
//           <h4 className="font-semibold text-lg">Coding Stats</h4>
//           <ul>
           
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg">Events</h4>
//           <ul>
           
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg">Accolades</h4>
//           <ul>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg">My Resume</h4>
//           <ul>
          
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-semibold text-lg">Repos</h4>
//           <ul>
           
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div className="container mx-auto flex justify-center mt-8 space-x-6">
//         <a href="mailto:sarthaks@example.com" className="text-white text-2xl">
//           <FaEnvelope />
//         </a>
//         <a href="https://github.com/sarthak" className="text-white text-2xl">
//           <FaGithub />
//         </a>
//         <a href="https://www.linkedin.com/in/sarthak/" className="text-white text-2xl">
//           <FaLinkedin />
//         </a>
//       </div>

//       {/* Copyright Section */}
//       <div className="container mx-auto text-center mt-6">
//         <p>© 2024, Sarthak S Kumar</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




//2

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons

const Footer = () => {
  return (
    <footer className="bg-gray text-white pt-40 pb-0 pl-2 pr-2 ml-1">
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
        <a href="mailto:Mithilesh@example.com" className="text-white text-2xl hover:text-gray-400">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Mithilesh" className="text-white text-2xl hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/Mithilesh/" className="text-white text-2xl hover:text-gray-400">
          <FaLinkedin />
        </a>
      </div>
<div className='footer gap-10 pl-2 pr-2'>


      {/* Bottom section */}
      <div className="container mx-auto flex justify-between items-center mt-8 gap-40 pl-0.5 pr-0.5">
        {/* Left side with name */}
        <div>
          <p className="text-lg font-bold pl-0.5 pr-0.5">© 2024, Mithilesh</p>
        </div>
        {/* Right side with feedback link */}
        <div>
          <a href="#feedback " className="text-lg hover:text-gray-400 cursor-pointer"><p className='got font-bold'>Got any feedback?</p></a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;


