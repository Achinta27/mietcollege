import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import { VscCircleFilled } from "react-icons/vsc";
import FooterComponent from "../component/FooterComponent";
import { Link } from "react-router-dom";

const Scholarships = () => {
  const scholarships = [
    {
      title: "Scholarships for B. Tech Student",
      aboutscholarship: "About Scholarship",
      aboutdetails: [
        "At Modern Institute of Engineering & Technology (MIET), several scholarships are available to support students in their academic pursuits. These include government scholarships like the Nabanna Scholarship and Swami Vivekananda Merit-cum-Means Scholarship (SVMCM), which provide financial aid based on merit and economic need for students pursuing higher education. Additionally, the National Scholarship Portal offers access to a range of central government scholarships for various cate",
      ],
      featureheading: "Name of the Scholarships available",
      featuredetail: [
        {
          name: "Swami Vivekananda Merit cum Means Scholarship",
          link: "https://www.svmcm.wbhed.gov.in/",
        },
        {
          name: "Scholarship to SC, ST and OBC Students",
          link: "https://oasis.gov.in/",
        },
        {
          name: "Aikyashree - Minority Scholarship",
          link: "https://wbmdfcscholarship.in/",
        },
        {
          name: "National Scholarship Portal",
          link: "https://scholarships.gov.in/",
        },
      ],
      scholarshipimg: "/images/s1.png",
    },
    {
      title: "Scholarships for Diploma Student",
      aboutscholarship: "About Scholarship",
      aboutdetails: [
        "Diploma students at Modern Institute of Engineering & Technology (MIET) can benefit from various scholarships to support their education. The Swami Vivekananda Merit-cum-Means Scholarship (SVMCM) provides financial assistance to meritorious students with economic need, helping them pursue technical education. The West Bengal Government Merit-cum-Means Scholarship Scheme similarly supports students from economically disadvantaged backgrounds based on academic performance. Through the National Scholarship Portal (NSP), students can access a range of scholarships offered by the Government of India for different categories. Additionally, the West Bengal SC/ST Scholarship is available to students from Scheduled Castes and Scheduled Tribes, offering financial support for their educational needs. These scholarships ensure that deserving diploma students can continue their studies without financial barriers.",
      ],
      featureheading: "Name of the Scholarships available",
      featuredetail: [
        {
          name: "West Bengal Government Merit-cum-Means Scholarship Scheme",
          link: "",
        },
        {
          name: "Swami Vivekananda Scholarship (SVMCM)",
          link: "https://www.svmcm.wbhed.gov.in/",
        },
        {
          name: "West Bengal SC/ST Scholarship",
          link: "https://oasis.gov.in/",
        },
        {
          name: "National Scholarship Portal (NSP)",
          link: "https://scholarships.gov.in/",
        },
      ],
      scholarshipimg: "/images/s1.png",
    },
  ];
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Scholarship"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <div className="flex flex-col gap-6">
          {scholarships.map((item, index) => (
            <div
              key={index}
              className={`flex gap-8 ${
                index % 2 === 0
                  ? " md:flex-row sm:flex-col-reverse"
                  : " md:flex-row-reverse sm:flex-col-reverse"
              } `}
            >
              <div className="xl:w-[60%] md:w-[50%] flex flex-col lg:gap-4 xl:gap-8">
                <div className="xlg:h-[4rem] sm:h-[3rem] lg:h-[3.5rem]  w-full rounded-md bg-[#DC143C] flex justify-center items-center text-lg font-semibold text-white ">
                  {item.title}
                </div>
                <div className="flex flex-col lg:gap-2 xl:gap-6">
                  <div className="xlg:text-4xl lg:text-2xl sm:text-xl font-semibold">
                    {item.aboutscholarship}
                  </div>
                  <div className="flex flex-col lg:text-sm sm:text-xs xlg:text-lg">
                    {item.aboutdetails.map((about, index) => (
                      <div key={index}>{about}</div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col lg:gap-2 xl:gap-6">
                  <div className="xlg:text-4xl lg:text-2xl sm:text-xl font-semibold">
                    {item.featureheading}
                  </div>
                  <div className="flex flex-col lg:gap-2 xl:gap-4">
                    {item.featuredetail.map((feature, index) => (
                      <Link
                        to={feature.link}
                        target="_blank"
                        className="flex gap-2 lg:text-sm sm:text-xs underline underline-offset-2 text-blue-600 xlg:text-lg font-medium"
                        key={index}
                      >
                        <span className="mt-1">
                          <VscCircleFilled />
                        </span>{" "}
                        {feature.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="xl:w-[40%] md:w-[50%]">
                <img src={item.scholarshipimg} alt="" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default Scholarships;
