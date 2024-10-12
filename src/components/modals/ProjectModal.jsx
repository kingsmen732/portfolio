import React, { useState } from "react";
import { project } from "../constants/project";
import cross from "../../assets/cross.svg";
import Project from "./Project";

const ProjectModal = (props) => {
  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto">
      <div className="relative backdrop-blur-lg py-8 px-6 md:px-10 text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg rounded-lg w-full">
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={() => props?.setIsModalOpen(false)}
        />
        <div className="text-3xl font-bold text-center border-b border-gray-400 mx-6 pb-4 mb-6 text-teal-300">
          Project Details
        </div>
        <div className="p-5 space-y-4">
          {project.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-200 ease-in-out p-4 border border-gray-600 rounded-lg shadow-sm"
            >
              <Project proj={proj} index={index} />
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center mt-6">
          <button
            onClick={() => props?.setIsModalOpen(false)}
            className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition-all duration-200 ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;