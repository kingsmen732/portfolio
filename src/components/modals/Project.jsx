import React, { useState } from 'react'
import githubLogo from "../../assets/github.svg";
import siteLogo from "../../assets/internet.svg";
import cross from "../../assets/cross.svg";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, FreeMode ,Navigation} from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/free-mode"
const Project = ({proj,index}) => {
  const [preview, setPreview] = useState(false);
  return (
    <div key={index} className="border relative p-4 rounded mb-3 ">
              <div className="flex flex-row justify-evenly gap-4 place-content-center">
                <img
                  src={proj.logo}
                  alt={`${proj.name} Logo`}
                  className="w-16 h-16 mb-3"
                />
                <div className="text-2xl my-auto font-semibold">
                  {proj.name}
                </div>
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
              <p className="mb-2 flex justify-between items-center">
                <span>{proj.tech.join(", ")}</span>{" "}
                <span>
                  <button
                    onClick={() => setPreview(true)}
                    className="bg-black text-white  px-4 py-2 rounded-md hover:bg-slate-700 transition-all duration-200"
                  >
                    Preview
                  </button>
                </span>
              </p>
              <div className="flex justify-between"></div>
              <div className={` bg-white w-full h-full p-8 ${preview?"block" :"hidden"} flex flex-col gap-4 absolute top-0 left-0`}>
                <img
                  src={cross}
                  alt="Close"
                  className="absolute hover:cursor-pointer top-5 flex right-5 w-5 h-5"
                  onClick={() => setPreview(false)}
                />
                <h2 className='font-semibold'>{proj.name} Preview</h2>
                <Swiper
      slidesPerView={1}
      spaceBetween={25}
     
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full "
    >
        {proj.previewImages.map((img, idx) => (
            <SwiperSlide className="h-auto w-full" key={idx}>
            <img src={img} className='w-fit' alt="preview"/>
            </SwiperSlide>
        ))}
    </Swiper>
                
          </div>
            </div>
  )
}

export default Project