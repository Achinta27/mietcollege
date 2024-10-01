import React from "react";
import FooterComponent from "../component/FooterComponent";
import SubBanner from "../component/SubBanner";
import MainPageTemplate from "../template/MainPageTemplate";
import { Link } from "react-router-dom";

const ContactUs = () => {
  function submitMail(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          console.log(json);

          return json;
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        e.target.reset();
        setTimeout(() => {}, 3000);
      });
  }

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
              className="md:w-[40rem] md:h-[45.5rem] object-cover hidden md:inline-block"
            />
          </span>
          <div className="p-4 bg-[#DC143C] rounded-md flex-1">
            <div className="flex flex-col justify-between gap-5 ">
              <span className="flex justify-center items-center">
                <img src="/images/klip.svg" alt="" className="h-[4rem]" />
              </span>
              <span
                className="flex justify-center sm:text-lg lg:text-2xl xl:text-3xl text-center font-semibold text-white items-center
            "
              >
                Quick Enquiry For Admission
              </span>
              <div className="flex text-white text-xl flex-col md:gap-2 sm:gap-2 lg:gap-4 flex-1">
                <form
                  onSubmit={submitMail}
                  className="flex flex-col font-semibold p-2 gap-4 justify-between flex-1"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={import.meta.env.VITE_PUBLIC_WEB3ACCESSKEY}
                  />
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Mobile Number</label>
                    <input
                      type="phone"
                      name="phone"
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span>Interest Course</span>
                    <select
                      name="enquiry"
                      className="sm:w-full sm:p-3 md:p-2 h-[4rem] bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    >
                      <option value="" disabled selected>
                        Select Interested Course
                      </option>
                      <option value="B.tech">B.Tech</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>

                  <div className=" flex flex-col gap-2">
                    <span>Message (optional)</span>
                    <input
                      type="text"
                      name="massage"
                      className="w-full h-[4rem] p-4 bg-white rounded-sm sm:text-lg md:text-xl text-[#DC143C]"
                    />
                  </div>
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://web3forms.com/success"
                  />
                  <div className="w-full h-[4rem] mt-4 rounded-sm flex justify-center items-center bg-white text-[#DC143C] text-lg font-bold">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <div className="flex flex-col justify-between gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">Address:</h1>
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
              <h1 className="font-bold xl:text-xl sm:text-lg">Phone:</h1>
              <Link
                to="tel:918336070583"
                className="xl:text-base font-medium sm:text-sm"
              >
                +91 8336070583
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">
                Helpline Number:
              </h1>
              <Link
                to="tel:918336070584"
                className="xl:text-base font-medium sm:text-sm"
              >
                +91 8336070584
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">Whatsapp:</h1>
              <Link
                to="https://api.whatsapp.com/send?phone=918276066444"
                target="_blank"
                referrerPolicy="no-referrer"
                className="xl:text-base font-medium sm:text-sm"
              >
                +91 8276066444
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">Email:</h1>
              <Link
                to="mailTo:hr@mietcollege.org"
                className="xl:text-base font-medium sm:text-sm"
              >
                hr@mietcollege.org
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="font-bold xl:text-xl sm:text-lg">Facebook</h1>
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
              <h1 className="font-bold xl:text-xl sm:text-lg">Youtube</h1>
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
              className="border-0 rounded-lg w-96 md:w-[40rem]"
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
