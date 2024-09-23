import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import { VscCircleFilled } from "react-icons/vsc";
import FooterComponent from "../component/FooterComponent";

const Scholarships = () => {
  const scholarships = [
    {
      title: "Scholarships for B. Tech",
      aboutscholarship: "About Scholarship",
      aboutdetails: [
        "Lorem ipsum dolor sit amet consectetur. Nulla sit consectetur faucibus arcu et tincidunt ultricies. Id tellus id tincidunt amet imperdiet convallis tellus proin. Nisl vitae sagittis dui arcu massa turpis. Justo auctor scelerisque aliquam ornare tempus. Amet a augue sit ut vestibulum aenean nunc. Dignissim sit amet justo aenean phasellus. Faucibus tellus nullam consectetur lectus dui. Cursus nunc rhoncus viverra lectus sed lectus. Eget dui tellus tincidunt dui est pellentesque massa tortor nisl. Vel integer neque quisque at quam.",
        "Quam mattis velit porttitor turpis. Sapien euismod euismod arcu scelerisque habitasse elementum congue. Fusce faucibus est amet egestas vitae. Adipiscing lobortis libero morbi congue. Elit consectetur fusce in ridiculus sem dui cursus lectus diam orci quam.",
      ],
      featureheading: "Unique Features of The Our Scholarship Scheme",
      featuredetail: [
        "Lorem ipsum dolor sit amet consectetur. Feature 1",
        "Lorem ipsum dolor sit amet consectetur. Feature 2",
        "Lorem ipsum dolor sit amet consectetur. Feature 3",
        "Lorem ipsum dolor sit amet consectetur. Feature 4",
      ],
      scholarshipimg: "/images/s1.png",
    },
    {
      title: "Scholarships for Diploma",
      aboutscholarship: "About Scholarship",
      aboutdetails: [
        "Lorem ipsum dolor sit amet consectetur. Nulla sit consectetur faucibus arcu et tincidunt ultricies. Id tellus id tincidunt amet imperdiet convallis tellus proin. Nisl vitae sagittis dui arcu massa turpis. Justo auctor scelerisque aliquam ornare tempus. Amet a augue sit ut vestibulum aenean nunc. Dignissim sit amet justo aenean phasellus. Faucibus tellus nullam consectetur lectus dui. Cursus nunc rhoncus viverra lectus sed lectus. Eget dui tellus tincidunt dui est pellentesque massa tortor nisl. Vel integer neque quisque at quam.",
        "Quam mattis velit porttitor turpis. Sapien euismod euismod arcu scelerisque habitasse elementum congue. Fusce faucibus est amet egestas vitae. Adipiscing lobortis libero morbi congue. Elit consectetur fusce in ridiculus sem dui cursus lectus diam orci quam.",
      ],
      featureheading: "Unique Features of The Our Scholarship Scheme",
      featuredetail: [
        "Lorem ipsum dolor sit amet consectetur. Feature 1",
        "Lorem ipsum dolor sit amet consectetur. Feature 2",
        "Lorem ipsum dolor sit amet consectetur. Feature 3",
        "Lorem ipsum dolor sit amet consectetur. Feature 4",
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
                      <div
                        className="flex gap-2 lg:text-sm sm:text-xs xlg:text-lg font-medium"
                        key={index}
                      >
                        <span className="mt-1">
                          <VscCircleFilled />
                        </span>{" "}
                        {feature}
                      </div>
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
