import React from "react";
import FooterComponent from "../component/FooterComponent";
import SubBanner from "../component/SubBanner";
import MainPageTemplate from "../template/MainPageTemplate";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Contact Us"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <span>
            <img
              src="/images/admisionenquiryimg.jpg"
              alt=""
              className="w-[80%] hidden md:inline-block"
            />
          </span>
          <span className="flex flex-col gap-4">
            <span className="flex text-4xl font-semibold text-[#DC143C]">
              Quick Enquiry For Admission
            </span>
            <form className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Name*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Mobile Number*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Select Interested Course*
                </label>
                <select
                  name="package"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                >
                  <option value=""></option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Location*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-base font-semibold bg-white px-1 absolute top-1 left-3">
                  Message*
                </label>
                <input
                  type="text"
                  className="border-2 rounded-md h-[5rem] w-full p-2 mt-4"
                />
              </div>
              <button
                type="submit"
                className="bg-[#DC143C] h-[5rem] w-full text-xl text-white font-semibold"
              >
                Submit
              </button>
            </form>
          </span>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <div className="flex flex-col justify-between gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Address:
              </h1>
              <Link
                to="https://maps.app.goo.gl/VPiZBqbNqBnqPA2U6"
                target="_blank"
                referrerPolicy="no-referrer"
                className="xl:text-base font-medium sm:text-sm"
              >
                Barol-Malimpur, Rajhat, Dist. Hooghly, Bandel, West Bengal
                712123
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Phone:
              </h1>
              <Link
                to="tel:918336070583"
                className="xl:text-base font-medium sm:text-sm"
              >
                +91 8336070583
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Email:
              </h1>
              <Link
                to="mailTo:hr@mietcollege.org"
                className="xl:text-base font-medium sm:text-sm"
              >
                hr@mietcollege.org
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Facebook
              </h1>
              <Link
                to="https://www.facebook.com/profile.php?id=100089144376421"
                target="_blank"
                referrerPolicy="no-referrer"
                className="xl:text-base font-medium sm:text-sm"
              >
                facebook.com/profile.php?id=100089144376421
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Youtube
              </h1>
              <Link
                to="https://youtube.com/@moderninstituteofengineeri6318?si=yYYFY_G6CTWtU44t"
                target="_blank"
                referrerPolicy="no-referrer"
                className="xl:text-base font-medium sm:text-sm"
              >
                youtube.com/moderninstituteofengineering
              </Link>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7348.095690191451!2d88.354573!3d22.948465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89250a79aa925%3A0xc6e131b8eb71dfdd!2sModern%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1727694231549!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 rounded-lg size-fit md:size-auto"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ContactUs;
