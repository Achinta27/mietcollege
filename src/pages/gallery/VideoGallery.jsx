import React from "react";
import { FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import MainPageTemplate from "../../template/MainPageTemplate";
import FooterComponent from "../../component/FooterComponent";

const videoPlayBackModal = ({ closeModal, videoSrc }) => {
  return (
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
  );
};

const VideoGallery = () => {
  const youtubeURL = [
    "https://youtu.be/Bvb6iYXw3Fw?si=f2epSFAJu2omslTa",
    "https://youtu.be/8R8TMgQUSRo?si=YmxBsf7bHzjImXBQ",
    "https://youtu.be/AriKsKD5KLY?si=gKfk972cyZj8y32I",
    "https://youtu.be/trEnQSJG_ek?si=tPrwE_z-xqCgchSY",
    "https://youtu.be/UBcECSV5sEA?si=xMSsv4ct8tpIf4TO",
    "https://youtu.be/BDre8u4WgB0?si=k2FjiGvgMLsU95KU",
    "https://youtu.be/Lck6WTv_Tow?si=vB8GwjM8HVzBzll8",
    "https://youtu.be/9USWar6w2uc?si=xa9bMtA-TjRbPW48",
    "https://youtu.be/y4XLOqRH8GE?si=Um7hMcw6bTa9yzDR",
    "https://youtu.be/W4DQ_mBngTA?si=KZDOqimwNgIgc-rM",
    "https://youtu.be/vUoD8feRU_U?si=a_TLxGEg1lF21AjC",
    "https://youtu.be/Uuv5DqWeMaQ?si=IavLc_toWR__aJjV",
  ];
  return (
    <MainPageTemplate>
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeURL.map((url, index) => (
            <ReactPlayer
              url={url}
              width="20vmax"
              key={index}
              controls={true}
              className="shadow-[0_6px_12px_rgba(0,0,0,0.35)] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(220,20,60,0.8)] md:max-h-[15vmax]"
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default VideoGallery;
