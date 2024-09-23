import React from "react";
import {
  FaDownload,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const quickLinks = [
    { name: "Home", link: "" },
    { name: "About Us", link: "" },
    { name: "Principle Massage", link: "" },
    { name: "News", link: "" },
    { name: "Activitis", link: "" },
    { name: "E-leraning", link: "" },
    { name: "Soft skill Development", link: "" },
    { name: " E - Tender", link: "" },
    { name: "Govt. Schemes", link: "" },
  ];
  const departments = [
    { name: "Machanical Engineering", link: "" },
    { name: "Electrical Engineering", link: "" },
    { name: "Civil Engineering", link: "" },
    { name: "Computer Science Engineering", link: "" },
    { name: "Electronics & Communication Engineering", link: "" },
  ];
  const mites = [
    { name: "Events", link: "" },
    { name: "Gallery", link: "" },
    { name: "Campus Life", link: "" },
    { name: "Campus Tour", link: "" },
    { name: "Google Map", link: "" },
    { name: "College Notices", link: "" },
    { name: "Placement Report", link: "" },
    { name: "Internships", link: "" },
    { name: "Our Recuiters", link: "" },
  ];
  return (
    <div>
      <div className=" w-full bg-red-900 sm:p-4 md:p-8 xl:p-16 text-white ">
        <div className="flex flex-col border-b  border-white pb-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-4  sm:gap-y-8 lg:gap-4 ">
            <div className="flex flex-col ">
              <div className="w-full  h-fit md:text-lg sm:text-base flex flex-col gap-6">
                <div>
                  <img
                    src="/images/footerlogo.png"
                    alt=""
                    className="w-[14rem] h-auto"
                  />
                </div>
                <div className=" ">
                  <span>
                    Modern Institute of Engineering & Technology (MIET) -
                    www.mietcollege.org - was established in 2010 at Bandel,
                    approximately an hour’s drive from Kolkata. Over the years,
                    a number of renowned companies have recruited our pass out
                    students / former students,
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-2 lg:gap-4">
              <span className="text-2xl font-bold">Quick Links</span>

              <div className="flex   flex-col sm:gap-1 lg:gap-4 sm:text-base md:text-lg">
                {quickLinks.map((quicklink, index) => (
                  <Link
                    to={quicklink.link}
                    className="flex flex-row gap-2 items-center"
                    key={index}
                  >
                    <span>
                      <IoMdArrowForward />
                    </span>
                    <span>{quicklink.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:gap-2 lg:gap-4">
              <span className="text-2xl font-bold">MIET</span>

              <div className="flex   flex-col sm:gap-1 lg:gap-4 sm:text-base md:text-lg">
                {mites.map((miet, index) => (
                  <Link
                    to={miet.link}
                    className="flex flex-row gap-2 items-center"
                    key={index}
                  >
                    <span>
                      <IoMdArrowForward />
                    </span>
                    <span>{miet.name}</span>
                  </Link>
                ))}
              </div>
            </div>{" "}
            <div className="flex flex-col sm:gap-2 lg:gap-4">
              <span className="text-2xl font-bold">Departments</span>

              <div className="flex flex-col sm:gap-1 lg:gap-4 sm:text-base md:text-lg">
                {departments.map((department, index) => (
                  <Link
                    to={department.link}
                    className="flex flex-row gap-2 items-center"
                    key={index}
                  >
                    <span>
                      <IoMdArrowForward />
                    </span>
                    <span>{department.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:pt-8 sm:pt-2 md:pt-4 h-full ">
          <div className="flex lg:flex-row sm:gap-6 lg:gap-0 sm:flex-col justify-evenly items-start text-xl">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2  items-start">
                <span>
                  <FaLocationDot />
                </span>
                <span>Rajhat, Bandel, Hooghly,West Bengal.</span>
              </div>
              <div className="flex gap-2 items-center ">
                <span>
                  <MdOutgoingMail />
                </span>
                <Link to="mailto:info@mietcollege.org">
                  info@mietcollege.org
                </Link>
              </div>
              <div className=" flex gap-2 items-center ">
                <span>
                  <FaPhoneAlt />
                </span>

                <Link to="tel:8336070583">+91 8336070583</Link>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 items-center">
              <span className="">We Are Available</span>
              <div className="flex gap-4 text-xl text-black">
                <Link
                  to=""
                  className="h-10 w-10 flex items-center justify-center rounded-br-lg rounded-tl-lg bg-white"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  to=""
                  className="h-10 w-10 flex items-center justify-center rounded-br-lg rounded-tl-lg bg-white "
                >
                  <FaYoutube />
                </Link>
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center justify-center rounded-br-lg rounded-tl-lg  bg-white "
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center justify-center rounded-br-lg rounded-tl-lg  bg-white"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to={""}
                  className="h-10 w-10 flex items-center justify-center rounded-br-lg rounded-tl-lg bg-white"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>
            <div className="w-[25%] h-[4rem] gap-4 rounded-lg bg-yellow-500 text-white flex justify-center  items-center">
              <span>
                <FaDownload />
              </span>
              <span>Download Our App</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row md:h-fit sm:h-[9rem] sm:flex-col sm:text-xs md:text-lg lg:text-xl sm:justify-start items-center md:justify-between bg-[#bb3232] border-t border-yellow-400  sm:p-2 md:p-6 ">
        <div className="  text-white    flex  text-center ">
          © 2024 MODERN INSTITUTE OF ENGINEERING & TECHNOLOGY | ALL RIGHTS
          RESERVED
        </div>
        <div className="  text-white      flex gap-2  ">
          <span>Developed By:</span>
          <Link to="https://rebootmarketing.in/">
            Reboot Marketing Pvt. Ltd.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
