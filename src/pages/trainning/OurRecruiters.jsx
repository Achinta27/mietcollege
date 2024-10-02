import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FooterComponent from "../../component/FooterComponent";

const OurRecruiters = () => {
  const recruiters = [
    { imgsrc: "/company/bajaj.jpg" },
    { imgsrc: "/company/belrise.jpg" },
    { imgsrc: "/company/franciscan.jpg" },
    { imgsrc: "/company/jayahind.jpg" },
    { imgsrc: "/company/mando.jpg" },
    { imgsrc: "/company/mkc.jpg" },
    { imgsrc: "/company/muvro.jpg" },
    { imgsrc: "/company/omega.jpg" },
    { imgsrc: "/company/royalenfieid.jpg" },
    { imgsrc: "/company/surgical.jpg" },
    { imgsrc: "/company/sutherland.jpg" },
    { imgsrc: "/company/talbros.jpg" },
    { imgsrc: "/company/tns.jpg" },
    { imgsrc: "/company/webhibe.jpg" },
    { imgsrc: "/company/windcare.jpg" },
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
              src={img.imgsrc}
              key={index}
              className="rounded max-w-[18.8vmax] w-full  p-2"
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
