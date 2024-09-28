import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FooterComponent from "../../component/FooterComponent";

const OurRecruiters = () => {
  const recruiters = [
    "/company/image2.png",
    "/company/image3.png",
    "/company/image4.jpg",
    "/company/image5.png",
    "/company/image6.png",
    "/company/image7.png",
    "/company/image8.png",
    "/company/image9.png",
    "/company/image10.png",
    "/company/image11.jpg",
    "/company/image12.jpg",
    "/company/image13.jpg",
    "/company/image14.jpg",
    "/company/image15.jpg",
    "/company/image16.png",
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Our Recruiters"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-wrap justify-between gap-[4.9vmax] items-center">
          {recruiters.map((img, index) => (
            <img
              src={img}
              key={index}
              className="rounded max-w-[18.8vmax] w-full"
              width={272}
            />
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default OurRecruiters;
