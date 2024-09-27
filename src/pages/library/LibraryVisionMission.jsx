import React from "react";
import FooterComponent from "../../component/FooterComponent";
import SubBanner from "../../component/SubBanner";
import MainPageTemplate from "../../template/MainPageTemplate";

const LibraryVisionMission = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Library"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-[1.2vmax]">
          <h1 className="lg:text-3xl text-xl text-red-600 font-bold">
            Vision:
          </h1>
          <p className="lg:text-xl text-base">
            To evolve into a Centre of Excellence by providing a
            state-of-the-art digital repository of resources for learning,
            teaching and research.
          </p>
        </div>
        <div className="flex flex-col gap-[1.2vmax]">
          <h1 className="lg:text-3xl text-xl text-red-600 font-bold">
            Mission:
          </h1>
          <p className="lg:text-xl text-base">
            <b>M1:</b> To create awareness among the users about the important
            role of the library in their academic and career growth <br />
            <br />
            <b>M2:</b> To train library users in Information Literacy and
            Digital Skills for their continuous personal and professional
            development <br /> <br />
            <b>M3:</b> To enable the students, researchers and knowledge seekers
            to search for knowledge and creativity through user-focused services
            in a collaborative and innovative learning environment
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-stretch justify-between gap-y-8">
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.12 (1).jpeg"
            alt="library-1"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.12.jpeg"
            alt="library-2"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.13 (1).jpeg"
            alt="library-3"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14 (1).jpeg"
            alt="library-4"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14 (2).jpeg"
            alt="library-5"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14.jpeg"
            alt="library-6"
            className="w-[45vmax] rounded-xl"
          />
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default LibraryVisionMission;
