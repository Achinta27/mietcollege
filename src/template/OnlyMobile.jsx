import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`sm:flex md:hidden justify-between bg-[#bb3232] items-center p-4 h-[4rem] rounded-lg border-yellow-400 border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          to=""
          className="flex flex-col items-center gap-2 text-sm text-white font-semibold"
        >
          <span className="text-xl">
            <img src="/images/whatsapplogo.svg" alt="" className="w-5 h-5" />
          </span>
          <span>Whasts App</span>
        </Link>
        <Link
          to=""
          className="flex flex-col gap-2 items-center h-[4rem] text-sm text-white font-semibold"
        >
          <span className=" absolute -top-7  bg-[#bb3232] w-[4rem] h-[4rem] border-t-[1px] border-yellow-400 rounded-full justify-center items-center flex">
            <span className="flex w-[3rem] h-[3rem] text-xl  bg-[#bb3232] rounded-full justify-center items-center">
              <img src="/images/topnav1.svg" alt="" className="w-8 h-8" />
            </span>
          </span>
          <span className="relative top-8">Pay Fees</span>
        </Link>{" "}
        <Link
          to="tel:"
          target="_Blank"
          className="flex flex-col gap-2 items-center  text-sm text-white font-semibold invisible"
        >
          <span className="text-xl">
            <img src="/images/phonecalllogo.svg" alt="" className="w-5 h-5" />
          </span>
          {/* <span>Enquiry</span> */}
        </Link>
      </div>
    </div>
  );
};

export default OnlyMobile;
