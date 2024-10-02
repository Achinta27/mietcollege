import React from "react";
import FooterComponent from "../component/FooterComponent";
import SubBanner from "../component/SubBanner";
import MainPageTemplate from "../template/MainPageTemplate";
import { FacebookEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const submitMail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const json = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (response.status === 200) {
        console.log("Form successfully submitted:", result);
        alert("Your form has been submitted successfully!");
      } else {
        console.log("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      e.target.reset();
    }
  };

  const contactDetails = [
    {
      headerBg: "#dc143c",
      headerTextColor: "#FFF",
      headerText: "Main Campus",
      description: [
        {
          label: "Address:",
          details: [
            {
              text: "Address: Rajhat, Bandel, Hooghly, West Bengal - 712123 India",
              src: "https://maps.app.goo.gl/HHK4VbvxA9JckgXy6",
            },
          ],
        },
        {
          label: "Phone:",
          details: [
            {
              text: "+91 8336070583,",
              src: "tel:918336070583",
            },
            {
              text: "+91 8336070584",
              src: "tel:918336070584",
            },
          ],
        },
      ],
    },
    {
      headerBg: "#FFCC00",
      headerTextColor: "#333",
      headerText: "Boys Hostel",
      description: [
        {
          label: "Address:",
          details: [
            {
              text: "Address: MIET Main Campus, Rajhat, Bandel, Hooghly, 712123",
              src: "https://maps.app.goo.gl/HHK4VbvxA9JckgXy6",
            },
          ],
        },
        {
          label: "Phone:",
          details: [
            {
              text: "+91 8276066444",
              src: "tel:918276066444",
            },
          ],
        },
      ],
    },
    {
      headerBg: "#FFCC00",
      headerTextColor: "#333",
      headerText: "Girls Hostel",
      description: [
        {
          label: "Address:",
          details: [
            {
              text: "Address: Bandel Bazar, Hooghly, West Bengal 712123",
              src: "https://maps.app.goo.gl/HHK4VbvxA9JckgXy6",
            },
          ],
        },
        {
          label: "Phone:",
          details: [
            {
              text: "+91 8276066444",
              src: "tel:918276066444",
            },
          ],
        },
      ],
    },
    {
      headerBg: "#dc143c",
      headerTextColor: "#FFF",
      headerText: "Contact Details",
      description: [
        {
          label: "Admission Helpline:",
          details: [
            {
              text: "Address: MIET Main Campus, Rajhat, Bandel, Hooghly, 712123",
              src: "https://maps.app.goo.gl/HHK4VbvxA9JckgXy6",
            },
          ],
        },
        {
          label: "Mail ID :",
          details: [
            {
              text: "hr@mietcollege.org,",
              src: "mailTo:hr@mietcollege.org",
            },
            {
              text: "info@mietcollege.org",
              src: "mailTo:info@mietcollege.org",
            },
          ],
        },
      ],
    },
  ];

  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Contact Us"}
      />
      <div className="xl:p-16 sm:p-4 lg:p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 sm:gap-4 lg:gap-9">
          {contactDetails.map((items, index) => (
            <div
              className="flex flex-col bg-white shadow-[0_0_15px_0_rgba(0,_0,_0,_0.20)] rounded-lg h-full"
              key={index}
            >
              <h1
                className={`font-bold text-center text-2xl lg:text-3xl text-[${
                  items.headerTextColor
                }] bg-[${items.headerBg}] ${
                  items.headerBg === "#dc143c" ? "bg-[#dc143c]" : "bg-[#FFCC00]"
                } ${
                  items.headerTextColor === "#333"
                    ? "text-[#333]"
                    : "text-[#fff]"
                } rounded-t-lg py-4 lg:py-6`}
              >
                {items.headerText}
              </h1>
              <div className="my-4 md:my-4 lg:my-8 mx-8 lg:pb-6 md:mx-6 lg:mx-12 flex flex-col gap-6 rounded-b-lg">
                {items.description.map((detail, index) => (
                  <div key={index}>
                    <h3 className="text-[#dc143c] text-justify text-xl lg:text-2xl">
                      {detail.label}
                    </h3>
                    <div className="flex flex-col">
                      {detail.details.map((link, num) => (
                        <Link
                          to={link.src}
                          key={num}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="text-[#686868] text-lg lg:text-xl lg:text-justify pe-4"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 place-items-stretch justify-between">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7348.095690191451!2d88.354573!3d22.948465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89250a79aa925%3A0xc6e131b8eb71dfdd!2sModern%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1727865678216!5m2!1sen!2sin"
            width="630"
            allowFullScreen=""
            className="w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/100089144376421&tabs=timeline&width=630&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="630"
            height="380"
            className="w-full border-none overflow-hidden"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}
          <FacebookEmbed
            url="https://www.facebook.com/permalink.php?story_fbid=525127823802026&id=100089144376421"
            width={"100%"}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <img
            src="/images/admisionenquiryimg.jpg"
            alt="Admission Inquiry"
            className="md:h-[45.5rem] object-cover rounded-md hidden md:block"
          />
          <div className="px-8 md:px-6 lg:px-12 py-4 md:py-6 lg:py-8 bg-[#DC143C] rounded-md flex-1 flex">
            <div className="flex flex-col justify-between gap-5 flex-1">
              <span className="flex justify-center text-center font-semibold text-white text-4xl">
                Quick Enquiry For Admission
              </span>
              <form
                onSubmit={submitMail}
                className="flex flex-col font-semibold p-2 gap-9 justify-between flex-1"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={import.meta.env.VITE_PUBLIC_WEB3ACCESSKEY}
                />
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    className="p-4 h-[4rem] bg-white rounded-sm text-[#AAA] text-lg outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    id="phone"
                    required
                    className="p-4 h-[4rem] bg-white rounded-sm text-[#AAA] text-lg outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    id="phone"
                    required
                    className="p-4 h-[4rem] bg-white rounded-sm text-[#AAA] text-lg outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Messege (Optional)"
                    className="p-4 h-[4rem] bg-white rounded-sm text-[#AAA] text-lg outline-none resize-none"
                  />
                </div>

                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="w-full h-[4rem] bg-white text-[#333] text-lg font-bold rounded-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default ContactUs;
