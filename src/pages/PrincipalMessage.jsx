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
            <img src="/images/principalimg.png" alt="" className="w-full" />
          </div>
          <div className="flex flex-col sm:gap-2 lg:gap-2 xlg:gap-4">
            <div className=" lg:text-3xl xlg:text-4xl sm:text-2xl font-semibold border-l-[5px] border-black pl-4 text-[#DC143C]">
              Message from the Managing Ex. Principal
            </div>
            <div className="flex md:text-xs lg:text-sm xlg:text-base xl:text-lg">
              <span>
                <BiSolidQuoteAltLeft className="xl:text-4xl sm:text-2xl xlg:text-3xl lg:text-2xl font-semibold text-[#DC143C]" />
              </span>
              Lorem ipsum dolor sit amet consectetur. Nibh urna lacus
              sollicitudin maecenas suspendisse iaculis vitae. Et ut ultrices
              metus sit tempor nisl urna cras sed. Nisi diam mauris placerat
              risus nulla lectus sit. At facilisis placerat tempus sed. Sit
              pellentesque feugiat pellentesque amet varius laoreet. Nisi
              tincidunt consectetur adipiscing ullamcorper tortor id eget.
              Aenean dolor felis at dictumst urna maecenas odio interdum. Ornare
              eget ornare libero duis elit volutpat ut ornare massa. Pretium
              tortor tortor sed tempus viverra odio. Amet adipiscing fusce nulla
              ac est. Arcu amet dis consequat urna molestie nam tincidunt ut.
              Scelerisque lectus dictumst erat tellus. Vel nunc
            </div>
            <div className="flex flex-col md:text-xs xl:text-lg xlg:text-base lg:text-sm xl:gap-1 xlg:mt-3  xl:mt-6 ">
              <span className="font-semibold">
                Prof.( Dr.) Haripada Bhaumik
              </span>
              <span>
                Ex. Principal JGEC, NIT Silchar, Lather Technology College , W.B
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default PrincipalMessage;
