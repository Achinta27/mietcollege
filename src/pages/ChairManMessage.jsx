import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import FooterComponent from "../component/FooterComponent";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ChairmanMessage = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Chairman Message"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 lg:gap-6 xl:gap-16">
          <div className="">
            <img
              src="/images/chairman.jpeg"
              alt=""
              className="w-full rounded-md"
            />
          </div>
          <div className="flex flex-col sm:gap-2 lg:gap-2 xlg:gap-4">
            <div className=" lg:text-3xl xlg:text-4xl sm:text-2xl font-semibold border-l-[5px] border-black pl-4 text-[#DC143C]">
              Message from the Chairman&apos;s desk
            </div>
            <div className="flex md:text-xs lg:text-sm xlg:text-base xl:text-lg">
              <span>
                <BiSolidQuoteAltLeft className="xl:text-4xl sm:text-2xl xlg:text-3xl lg:text-2xl font-semibold text-[#DC143C]" />
              </span>
              Since the days of boyhood, I have been nurturing the
              long-cherished dream of establishing an engineering academic
              institution to cater the need of drawing out what is ingrained in
              the child or leading him out of darkness into light, which in
              turn, can be attributed to as a process through which the
              knowledge, understanding and the potentialities of children have
              to be brought out. Education is a dynamic process developing a
              child from all aspects according to changing situation and time.
              Vision looking inward begets duty, looking outward begets
              aspiration and looking upward begets faith. When the vision of
              duty, aspiration and faith has become a reality, it is a proud
              moment for me and my team to see thousands of students pursuing
              higher education and equip themselves to become industry ready
              professionals for their successful careers.
            </div>
            <div className="flex flex-col md:text-xs xl:text-lg xlg:text-base lg:text-sm xl:gap-1 xlg:mt-3  xl:mt-6 ">
              <span className="font-semibold">Mr.Rana Deb</span>
              <span>Chairman, MIET College, Rajhat, Bandel, Hooghly</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ChairmanMessage;
