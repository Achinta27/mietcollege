import React from "react";
import FooterComponent from "../../component/FooterComponent";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";

const ConferenceHall = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Conference Room"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <img
                src={"/images/conference-room-1.jpg"}
                alt="conference-room"
                className="w-[45vmax] rounded-xl shadow"
              />
              <img
                src={"/images/conference-room-2.jpg"}
                alt="conference-room"
                className="w-[45vmax] rounded-xl shadow"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="sm:text-xs lg:text-sm xl:text-lg">
                As an adjunct to the learning infrastructure at MIET, an
                air-conditioned conference room located on ground floor at the
                Institute provide a venue for small groups of students to
                interact with each other, prepare for mock interviews and group
                discussions &#40;GDs&#41; organized by the MIET Placement Cell
                and attend presentations made by guest speakers from industry
                and business. Our air-conditioned conference room is fully
                equipped with the latest audio video technologies which can
                connect to the Internet on demand. Conference rooms are also
                used to conduct seminars as well as to screen learning videos
                under faculty supervision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ConferenceHall;
