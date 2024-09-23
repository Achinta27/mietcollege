import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";
import HeadingTemplate from "../template/HeadingTemplate";

const AboutUsComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="xl:p-16 sm:p-4 md:p-8 flex flex-col gap-8">
      <HeadingTemplate heading={"ABOUT US"} />
      <div className="flex lg:flex-row sm:flex-col after: gap-4  ">
        <div
          className="lg:w-[50%] sm:w-full flex items-center justify-center relative "
          data-aos="fade-right"
        >
          <div
            onClick={() => openModal()}
            className="bg-gray-800 w-[90%] h-fit rounded-lg cursor-pointer"
          >
            <img
              src="images/Building8.jpg"
              alt=""
              className="w-full sm:h-[15rem] md:h-auto rounded-lg  opacity-70 "
            />
          </div>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              onClick={() => openModal()}
              src="images/play1.svg"
              alt=""
              className="w-[6rem] h-[6rem] cursor-pointer "
            />
          </span>
        </div>

        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full z-[100] flex justify-center items-center bg-black bg-opacity-80">
            <div className="relative w-[75%] sm:h-[20rem] md:h-[30rem] lg:h-[40rem] flex justify-center items-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=kBI_5zzNdJA&ab_channel=MODERNINSTITUTEOFENGINEERING%26TECHNOLOGY"
                width="100%"
                height="100%"
                controls={true}
                playing={true}
              />
            </div>
            <div className="top-0 absolute right-0 p-16">
              <FaTimes
                className="text-white text-3xl cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-6 lg:w-[50%] sm:w-full">
          <div
            className="flex flex-col gap-2 xl:text-xl lg:text-base  sm:text-sm"
            data-aos="fade-left"
          >
            <h2 className="">
              Welcome to the Modern Institute of Engineering & Technology
              (MIET), West Bengal’s premier institute for B.Tech & Diploma in
              the field of Engineering. Although we are proudly rooted in Bandel
              (just an hour’s drive from Kolkata), our community and impact are
              global.
            </h2>
            <h2 className="">
              Established in 2010, the institute is located amidst verdant
              abundance in a natural setting, away from the hustle and bustle of
              a city. From the very beginning, the core tenet of our educational
              philosophy has been the amalgamation of nature and knowledge.
            </h2>
            <h2 className="">
              We stridently believe that an institute is not just there for a
              mere degree. It is a journey that leads to the complete
              progression of the human mind, enabling it to strive towards
              sustained excellence and address the global challenges of the
              future. Over the years, our students have made their mark in the
              world by going on to achieve incredible success in various fields.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
