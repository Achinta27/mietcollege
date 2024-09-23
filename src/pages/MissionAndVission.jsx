import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";
import WorldClassFacilityImgComponent from "../component/WorldClassFacilityImgComponent";

const MissionAndVission = () => {
  const vissionmissions = [
    {
      icon: "/images/vissionicon.svg",
      text: "Lorem ipsum dolor sit amet consectetur. Interdum quam est libero pharetra eleifend sed. Euismod ipsum bibendum mauris aenean placerat libero. Malesuada convallis sed integer nec vel id nisl odio. Hendrerit a tortor id ipsum tempus pellentesque volutpat massa ut. Natoque urna tellus ultrices mauris risus nunc auctor. Donec mattis arcu odio eget. Velit lacus pretium pharetra enim. At pellentesque at tellus tortor diam placerat nulla integer habitasse. Bibendum lacus eleifend ut felis viverra. Quam in arcu quisque non risus. Lacus gravida ultricies molestie laoreet sed odio augue. Enim et amet imperdiet sit ornare. Iaculis viverra porta volutpat suscipit. Malesuada mi blandit scelerisque pellentesque nunc porttitor aliquet. Donec tortor arcu in hendrerit lorem a facilisi. Orci arcu magnis mattis integer rhoncus platea nunc ut convallis. Dolor sed turpis pellentesque euismod donec dui. Amet proin elementum senectus commodo tortor velit habitant enim. Quisque non hac sed neque condimentum donec vulputate viverra.",
    },
    {
      icon: "/images/missionicon.svg",
      text: "Lorem ipsum dolor sit amet consectetur. Interdum quam est libero pharetra eleifend sed. Euismod ipsum bibendum mauris aenean placerat libero. Malesuada convallis sed integer nec vel id nisl odio. Hendrerit a tortor id ipsum tempus pellentesque volutpat massa ut. Natoque urna tellus ultrices mauris risus nunc auctor. Donec mattis arcu odio eget. Velit lacus pretium pharetra enim. At pellentesque at tellus tortor diam placerat nulla integer habitasse. Bibendum lacus eleifend ut felis viverra. Quam in arcu quisque non risus. Lacus gravida ultricies molestie laoreet sed odio augue. Enim et amet imperdiet sit ornare. Iaculis viverra porta volutpat suscipit. Malesuada mi blandit scelerisque pellentesque nunc porttitor aliquet. Donec tortor arcu in hendrerit lorem a facilisi. Orci arcu magnis mattis integer rhoncus platea nunc ut convallis. Dolor sed turpis pellentesque euismod donec dui. Amet proin elementum senectus commodo tortor velit habitant enim. Quisque non hac sed neque condimentum donec vulputate viverra.",
    },
    {
      icon: "/images/objectiveicon.svg",
      text: "Lorem ipsum dolor sit amet consectetur. Interdum quam est libero pharetra eleifend sed. Euismod ipsum bibendum mauris aenean placerat libero. Malesuada convallis sed integer nec vel id nisl odio. Hendrerit a tortor id ipsum tempus pellentesque volutpat massa ut. Natoque urna tellus ultrices mauris risus nunc auctor. Donec mattis arcu odio eget. Velit lacus pretium pharetra enim. At pellentesque at tellus tortor diam placerat nulla integer habitasse. Bibendum lacus eleifend ut felis viverra. Quam in arcu quisque non risus. Lacus gravida ultricies molestie laoreet sed odio augue. Enim et amet imperdiet sit ornare. Iaculis viverra porta volutpat suscipit. Malesuada mi blandit scelerisque pellentesque nunc porttitor aliquet. Donec tortor arcu in hendrerit lorem a facilisi. Orci arcu magnis mattis integer rhoncus platea nunc ut convallis. Dolor sed turpis pellentesque euismod donec dui. Amet proin elementum senectus commodo tortor velit habitant enim. Quisque non hac sed neque condimentum donec vulputate viverra.",
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Mission & Vission"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8 flex flex-col gap-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 md:gap-2 lg:gap-8">
          {vissionmissions.map((items, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 justify-center items-center p-4 border-2 rounded-lg sm:w-full xl:w-[90%]"
            >
              <div className="">
                <img src={items.icon} alt="" />
              </div>
              <div className="">{items.text}</div>
            </div>
          ))}
        </div>
      </div>
      <WorldClassFacilityImgComponent />
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default MissionAndVission;
