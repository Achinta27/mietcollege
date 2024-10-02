import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const PrincipalMessage = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Principal Message"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 lg:gap-6 xl:gap-16">
          <div className="">
            <img
              src="/images/principalimg.png"
              alt=""
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col sm:gap-2 lg:gap-2 xlg:gap-4">
            <div className=" lg:text-3xl xlg:text-4xl sm:text-2xl font-semibold border-l-[5px] border-black pl-4 text-[#DC143C]">
              Message from the Managing Principal
            </div>
            <div className="flex md:text-xs lg:text-sm xlg:text-base xl:text-lg">
              <span>
                <BiSolidQuoteAltLeft className="xl:text-4xl sm:text-2xl xlg:text-3xl lg:text-2xl font-semibold text-[#DC143C]" />
              </span>
              It is a great pleasure and privilege for me that I, Prof.
              &#40;Dr.&#41; Arijit Choudhury, would like to welcome you with
              heart-felt congratulation to Modern Institute of Engineering &
              Technology, Bandel, West Bengal, a leading institution in the
              arena of engineering and technology. Established in 2009 with a
              vision to nurture budding innovative engineers and leaders of
              tomorrow, our esteemed institute offers a range of B.Tech. and
              Diploma Engineering Courses that are designed to meet the emerging
              needs of the industry and cutting-edge technology. At MIET,
              Bandel, Hooghly, we are committed to providing a holistic learning
              experience that extends beyond the boundary of classroom. Our
              state-of-the-art infrastructural facilities, experienced faculty
              members and industry-relevant curricula ensure that the students
              of our institute are well-equipped to face the challenges of the
              modern world.
            </div>
            <div className="flex flex-col md:text-xs xl:text-lg xlg:text-base lg:text-sm xl:gap-1 xlg:mt-3  xl:mt-6 ">
              <span className="font-semibold">
                Prof.&#40;Dr.&#41; Arijit Choudhury
              </span>
              <span>Principa, MIET College, Rajhat, Hooghly WB.</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default PrincipalMessage;
