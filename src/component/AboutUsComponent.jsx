import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import ReactPlayer from "react-player";
import HeadingTemplate from "../template/HeadingTemplate";

const AboutUsComponent = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };
  return (
    <div className="xl:p-16 sm:p-4 md:p-8 flex flex-col gap-8">
      <HeadingTemplate heading={"ABOUT US"} />
      <div className="flex lg:flex-row sm:flex-col gap-4">
        {/* <div
          className="lg:w-[50%] sm:w-full flex items-center justify-center relative "
          data-aos="fade-right"
        >
          <div
            onClick={() => openModal()}
            className="bg-gray-800 rounded-lg cursor-pointer"
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
        </div> */}

        {/* {showModal && (
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
        )} */}
        <div className="lg:w-[50%] sm:w-full relative">
          <div className="flex flex-wrap gap-[1.66vmax]">
            <img
              src="/images/about1.png"
              alt="about"
              className="min-[585px]:size-[21.25vmax] object-cover rounded"
            />
            <img
              src="/images/Building5.jpg"
              alt="building"
              className="min-[585px]:size-[21.25vmax] object-cover rounded"
            />
            <img
              src="/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05.jpeg"
              alt="building"
              className="min-[585px]:size-[21.25vmax] object-cover rounded"
            />
            <img
              src="/images/principal-about.png"
              alt="principal"
              className="min-[585px]:size-[21.25vmax] object-cover rounded"
            />
          </div>
        </div>
        <div className="lg:w-[50%] sm:w-full flex flex-col justify-between gap-2 xl:text-base xxl:text-xl lg:text-base xlg:text-sm sm:text-sm">
          <span className="text-lg xlg:text-2xl xl:text-3xl sm:text-2xl font-bold text-[#DC143C]">
            About Modern Engineering &amp; Technology College
          </span>
          <h2 className="">
            Welcome to the Modern Institute of Engineering & Technology
            &#40;MIET&#41;, West Bengal&apos;s premier institute for B.Tech &
            Diploma in the field of Engineering. Although we are proudly rooted
            in Bandel &#40;just an hour&apos;s drive from Kolkata&#41;, our
            community and impact are global.
          </h2>
          <h2 className="">
            Established in 2010, the institute is located amidst verdant
            abundance in a natural setting, away from the hustle and bustle of a
            city. From the very beginning, the core tenet of our educational
            philosophy has been the amalgamation of nature and knowledge.
          </h2>
          <h2 className="">
            With unmatched facility and state-of-the-art infrastructure, modern
            laboratories, well facilitated canteen with variety of palatable
            dishes, in campus Boys&apos; Hostel and well protected Girls&apos;
            Hostel and Library keeping pace with modern cutting-edge technology,
            students need to be properly groomed and ultimately made employable
            and subsequently shaped, honed into the groove of the requirement of
            corporate sector, behavioural patterns and expectations. In order to
            fructify this aim and target sustained efforts on behalf of the
            institute have been put in operation in the form of imparting such
            inclusive knowledge through regular hands-on training sessions on
            human skills, corporate environments, interview techniques, mock
            drills and relevant technical software sessions that are woven into
            the regular class fabric.
          </h2>
          <h2 className="">
            We stridently believe that an institute is not just there for a mere
            degree. It is a journey that leads to the complete progression of
            the human mind, enabling it to strive towards sustained excellence
            and address the global challenges of the future. Over the years, our
            students have made their mark in the world by going on to achieve
            incredible success in various fields.
          </h2>
          <div className="grid grid-cols-2 place-items-stretch mt-[1.15vmax] justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/images/square-check.svg"
                alt="square check"
                width={33}
                height={33}
                className="size-[2vmax]"
              />
              <p className="font-semibold font-sans">10 Years of Excellence</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/square-check.svg"
                alt="square check"
                width={33}
                height={33}
                className="size-[2vmax]"
              />
              <p className="font-semibold font-sans">
                Hostel, Loan, Scholarships
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/square-check.svg"
                alt="square check"
                width={33}
                height={33}
                className="size-[2vmax]"
              />
              <p className="font-semibold font-sans">Digital Classroom</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/square-check.svg"
                alt="square check"
                width={33}
                height={33}
                className="size-[2vmax]"
              />
              <p className="font-semibold font-sans">
                EMI System Semester Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
