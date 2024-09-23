import React, { useEffect } from "react";
import HeaderComponent from "../component/HeaderComponent";
import TopHeader from "../component/TopHeader";
import OnlyMobile from "./OnlyMobile";

const MainPageTemplate = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex font-quattrocento w-full h-full flex-col overflow-y-auto  overflow-x-hidden ">
        <div className="flex  fixed w-full sm:flex-col-reverse z-[50] lg:flex-col">
          <span className="">
            <TopHeader />
          </span>
          <span className="">
            <HeaderComponent />
          </span>
        </div>
        <div className=" sm:mt-[7rem] md:mt-[9rem] lg:mt-[10rem]">
          {children}
        </div>
        <div>
          <OnlyMobile />
        </div>
      </div>
    </div>
  );
};

export default MainPageTemplate;
