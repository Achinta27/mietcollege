import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const footerLinks1st = [
    {
      textTittle: "Quick Links",
      links: [
        {
          text: "MIET Home",
          path: "/",
        },
        {
          text: "B-Tech Courses",
          path: "/admission/offer-course/btech",
        },
        {
          text: "Diploma",
          path: "/admission/offer-course/diploma",
        },
        {
          text: "Fees Structure",
          path: "/admission/fees-structure",
        },
        {
          text: "Contact Us",
          path: "/contact-us",
        },
      ],
    },
    {
      textTittle: "The MIET College",
      links: [
        {
          text: "About Us",
          path: "/about-miet/about-us",
        },
        {
          text: "Governing Body",
          path: "/about-miet/governing-body",
        },
        {
          text: "Principal's Message",
          path: "/about-miet/principal-message",
        },
        {
          text: "Vision & Mission",
          path: "/about-miet/mission-vission",
        },
        {
          text: "Chairman's Message",
          path: "/about-miet/chairman-message",
        },
      ],
    },
    {
      textTittle: "The MIET Campus",
      links: [
        {
          text: "Hostel ",
          path: "/mietcampus/facilities/hostel-facilities",
        },
        {
          text: "Conference Room",
          path: "/mietcampus/facilities/conference-room",
        },
        {
          text: "Library",
          path: "/mietcampus/facilities/library",
        },
        {
          text: "Transport",
          path: "/mietcampus/facilities/transport",
        },
        {
          text: "Photo Gallery",
          path: "/gallery/photo-gallery",
        },
        {
          text: "Anti Ragging Committee",
          path: "/comittee/anti-ragging",
        },
      ],
    },
    {
      textTittle: "Placements",
      links: [
        {
          text: "Training & Placement",
          path: "/training-internship/overview",
        },
        {
          text: "Our Recruiters",
          path: "/training-internship/our-recruiters",
        },
        {
          text: "Library",
          path: "/mietcampus/facilities/library",
        },
        {
          text: "Enquiry",
          path: "/about-miet/online-enquiry",
        },
      ],
    },
  ];
  return (
    <footer className="bg-[url('/images/footer-bg.png')] mix-blend-hard-light bg-cover bg-no-repeat bg-[lightgray]/50">
      <div className="bg-[#4E0010] sm:p-4 md:p-8 xl:p-16 flex flex-col gap-[1.8vmax]">
        <div className="flex flex-col gap-[1.73vmax]">
          <div className="flex gap-[2.8vmax] justify-between">
            <div className="flex flex-col gap-[1.73vmax]">
              <img
                src="/images/footerlogo.png"
                alt="logo"
                width={374}
                className="w-[26vmax]"
              />
              <Link
                to="/pdf/Academic Calender 2024.pdf"
                target="_blank"
                className="font-bold text-[2.2vmax] text-[#4E0010] bg-[#FC0] text-center rounded inline-flex items-center justify-center py-[1.04vmax] font-sans"
              >
                Admission 2024-25
              </Link>
              <Link
                to="/pdf/RPGIprospectors.pdf"
                target="_blank"
                className="font-bold text-[2.2vmax] border border-[#FFCC00] text-[#FFCC00] text-center rounded inline-flex items-center justify-center py-[1.04vmax] font-sans"
              >
                Prospectus 2024-25
              </Link>
              <Link
                to="/pdf/RPGIprospectors.pdf"
                target="_blank"
                className="font-bold text-[2.2vmax] border border-white text-white text-center rounded inline-flex items-center justify-center py-[1.04vmax] font-sans"
              >
                Payment Online
              </Link>
            </div>
            {footerLinks1st.map((item, index) => (
              <div className="flex flex-col gap-[1.11vmax]" key={index}>
                <h3 className="text-white font-bold text-[1.38vmax]">
                  {item.textTittle}
                </h3>
                <ul className="flex flex-col gap-[1.38vmax]">
                  {item.links.map((link, index) => (
                    <li>
                      <Link
                        to={link.path}
                        className="text-white font-semibold text-[1.11vmax]"
                      >
                        &#9658; {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full h-0.5 bg-white/50"></div>
        </div>
        <div className="w-full h-0.5 bg-white/50"></div>
        <div className="flex items-center justify-between text-white">
          <h1 className="font-bold text-[1.38vmax]">
            Modern Institute of Engineering &amp; Technology | All Rights
            Reserved
          </h1>
          <h1 className="text-[1.38vmax]">
            Design &amp; Developed By:{" "}
            <Link to="" target="_blank" className="font-bold">
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
