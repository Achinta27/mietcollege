import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";
import WorldClassFacilityImgComponent from "../component/WorldClassFacilityImgComponent";

const MissionAndVission = () => {
  const vissionmissions = [
    {
      topheading: "Our Vission",
      imgsrc: "/images/ourvission.svg",
      heading: "",
      text: "At Modern Institute of Engineering & Technology (MIET), our vision is to become a premier institution renowned for excellence in engineering education, research, and innovation. We aim to cultivate an intellectually vibrant and socially inclusive learning environment that equips students with the knowledge and skills necessary to excel in a globally competitive landscape. By fostering ethical leadership and promoting critical thinking, we aspire to produce graduates who are prepared to address the multifaceted challenges of the 21st century. Our vision includes continuous innovation in pedagogy and a commitment to societal advancement through cutting-edge research and the holistic development of our students.",
      name: "",
      role: "",
    },
    {
      topheading: "Our Mission",
      imgsrc: "/images/ourmission.svg",
      heading: "",
      text: "Our mission at MIET is to provide world-class engineering education that blends theoretical knowledge with practical skills. We are dedicated to fostering a culture of innovation, professionalism, and social responsibility. Through an inclusive and supportive learning environment, we strive to empower students to reach their highest potential, preparing them for successful careers in engineering and technology. We are committed to promoting research that addresses real-world challenges, while also encouraging entrepreneurship and lifelong learning. Our goal is to continually evolve with the industry, ensuring our graduates are well-prepared to meet the dynamic demands of a rapidly changing world.",
      name: "",
      role: "",
    },
    {
      topheading: "Objective",
      imgsrc: "/images/objective.svg",
      heading: "",
      text: "The primary objective of MIET is to deliver high-quality, industry-relevant education that prepares students for diverse career paths, whether in professional employment, higher education, or entrepreneurship. We aim to establish state-of-the-art research facilities in emerging fields, promoting innovation and technological advancement. By 2027, we aspire to have 80% of our faculty holding Ph.D. qualifications and to achieve at least five publications in reputed international journals each year. Additionally, we focus on providing hands-on training and practical experience, promoting holistic development through extracurricular activities, and fostering collaborations with industry to ensure students are equipped with both technical skills and soft skills necessary for their success.",
      name: "",
      role: "",
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Mission & Vission"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8 flex flex-col gap-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 md:gap-2 xlg:gap-6 lg:gap-3 xl:gap-8">
          {vissionmissions.map((mietdetail, index) => (
            <div
              key={index}
              className="p-2 pt-6 flex flex-col items-center gap-[2.5vmax] border border-gray-300 rounded-lg bg-[linear-gradient(180deg,_#FFF_0%,_#FFF7F8_100%)] shadow-[0_0_10px_1px_rgba(0,_0,_0,_0.15)] sm:px-2 xl:px-4"
            >
              <img src={mietdetail.imgsrc} alt="" className="max-w-[24vmax]" />
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-2">
                  <span className="md:text-xl sm:text-xl lg:text-2xl text-black font-bold text-center">
                    {mietdetail.topheading}
                  </span>
                  <span className="flex items-center self-center ">
                    <span className="h-[2px] w-[4rem] bg-red-700"></span>
                    <span className="h-[6px] w-[2.5rem] bg-red-700"></span>
                    <span className="h-[2px] w-[4rem] bg-red-700"></span>
                  </span>
                </div>
                <div className="flex flex-col gap-3 mx-4">
                  <span className="xl:text-base md:text-base lg:text-sm text-sm">
                    {mietdetail.text}
                  </span>
                  <span className="xl:text-xl md:text-xl text-base font-semibold text-[#bb3232]">
                    {mietdetail.name}
                  </span>
                  <span className="xl:text-lg md:text-lg text-sm text-gray-500">
                    {mietdetail.role}
                  </span>
                </div>
              </div>
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
