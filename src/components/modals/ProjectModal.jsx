import React from "react";
import { project } from "../constants/project";
import githubLogo from "../../assets/github.svg";
import siteLogo from "../../assets/internet.svg";
import cross from "../../assets/cross.svg";

const ProjectModal = (props) => {
  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full !mt-0 grid place-items-center overflow-auto">

      <div className="relative backdrop-blur-sm py-8 text-black border bg-white border-black w-full cursor-pointer">
        <img src={cross} alt="Close" className="absolute top-5 right-5 w-5 h-5" onClick={()=> (props?.setIsModalOpen(false))}/>
        
        {/* If you want to make the similar modals for others just change the content below and in other file and the above onclick function too :) */}
        <div className="text-2xl font-bold text-center border-b mx-10 pb-4">
          
        </div>
        <div className="p-5 mb-3">

        {project.map((proj, index) => (
            <div key={index} className="border p-4 rounded">
            <div className="flex flex-row justify-evenly gap-4 place-content-center">
              <img
                src={proj.logo}
                alt={`${proj.name} Logo`}
                className="w-16 h-16 mb-3"
              />
              <div className="text-2xl my-auto font-semibold">{proj.name}</div>
              <div className="flex flex-row gap-3">
                <a href={proj.githubLink} className="my-auto hover:cursor">
                  <img
                    src={githubLogo}
                    alt="GitHub Logo"
                    className="w-10 h-10 my-auto"
                    />
                </a>
                <a href={proj.liveLink} className="my-auto hover:cursor">
                  <img src={siteLogo} className="w-10 h-10" alt="logo" />
                </a>
              </div>
            </div>
            <p className="italic mb-2">{proj.briefDesc}</p>
            <h3 className="font-bold mt-3">Description:</h3>
            <ul className="list-disc list-inside mb-2">
              {proj.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
            </ul>
            <h3 className="font-bold">Technologies:</h3>
            <p className="mb-2">{proj.tech.join(", ")}</p>
            <div className="flex justify-between"></div>
          </div>
        ))}
        </div>
        <div className="mx-auto items-center place-content-center w-[50%] ">
            <button onClick={()=> (props?.setIsModalOpen(false))} className="mt-4 p-2 w-full mx-auto bg-black text-white rounded-md">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
