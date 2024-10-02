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
          text: "Diploma Courses",
          path: "/admission/offer-course/diploma",
        },
        {
          text: "Fees Structure",
          path: "/admission/fees-structure",
        },
        {
          text: "Events",
          path: "/mietcampus/events",
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
        {
          text: "Anti Ragging Committee",
          path: "/comittee/anti-ragging",
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
          text: "Video Gallery",
          path: "/gallery/video-gallery",
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
          text: "Library Rules & Regulation",
          path: "/mietcampus/facilities/library-rules",
        },
        {
          text: "Library Vision & Mission",
          path: "/mietcampus/facilities/library-rules",
        },
        {
          text: "Enquiry",
          path: "/about-miet/online-enquiry",
        },
      ],
    },
  ];

  const footerLinks2nd = [
    {
      textTittle: "B.Tech Courses",
      links: [
        {
          text: "Basic Science & Humanities Department",
          path: "/department/bsc/overview",
        },
        {
          text: "Computer Science & Engineering",
          path: "/department/csc/overview",
        },
        {
          text: "Civil Engineering",
          path: "/department/civil/overview",
        },
        {
          text: "Computer Science & Engineering (AI & ML)",
          path: "/department/cscai/overview",
        },
        {
          text: "Computer Science & Engineering (CS)",
          path: "/department/csccs/overview",
        },
        {
          text: "Electrical Engineering",
          path: "/department/ee/overview",
        },
        {
          text: "Electronics & Communication Engineering",
          path: "/department/ece/overview",
        },
        {
          text: "Mechanical Engineering",
          path: "/department/me/overview",
        },
      ],
    },
    {
      textTittle: "Diploma Courses",
      links: [
        {
          text: "Basic Science & Humanities Department",
          path: "/department/bsc/overview",
        },
        {
          text: "Computer Science & Engineering",
          path: "/department/csc/overview",
        },
        {
          text: "Civil Engineering",
          path: "/department/civil/overview",
        },
        {
          text: "Electrical Engineering",
          path: "/department/ee/overview",
        },
        {
          text: "Electronics & Communication Engineering",
          path: "/department/ece/overview",
        },
        {
          text: "Mechanical Engineering",
          path: "/department/me/overview",
        },
      ],
    },
    {
      textTittle: "Contact With Us",
      links: [
        {
          text: "Address: Rajhat, Bandel, Hooghly, WB",
          path: "https://maps.app.goo.gl/Xo1ZyZAejSh5P1qp9",
        },
        {
          text: "Email: hr@mietcollege.org",
          path: "mailTo:hr@mietcollege.org",
        },
        {
          text: "Addmission Helpline: +91 8336070583",
          path: "tel:918336070583",
        },
        {
          text: "Addmission Helpline: +91 8336070584",
          path: "tel:918336070584",
        },
        {
          text: "Student Helpline: +91 8276066444",
          path: "tel:918276066444",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[url('/images/footer-bg.png')] mix-blend-hard-light bg-cover bg-no-repeat bg-[lightgray]/50">
      <div className="bg-[#4E0010] sm:p-4 md:p-8 xl:p-16 flex flex-col gap-[1.8vmax]">
        <div className="flex flex-col gap-[1.73vmax]">
          <div className="flex flex-col lg:flex-row gap-[2.8vmax] justify-between">
            <div className="flex flex-col gap-[1rem]">
              <img
                src="/images/footerlogo.png"
                alt="logo"
                width={374}
                className="md:w-[18vmax] md:h-fit sm:h-[6rem] w-fit"
              />
              <Link
                to="/pdf/Academic Calender 2024.pdf"
                target="_blank"
                className="font-bold text-lg md:text-lg text-[#4E0010] bg-[#FC0] hover:bg-[#4E0010] hover:text-[#FC0] hover:border-[#FC0] border text-center rounded inline-flex items-center justify-center py-[0.8vmax] font-sans"
              >
                Admission 2024-25
              </Link>
              <Link
                to="/pdf/RPGIprospectors.pdf"
                target="_blank"
                className="font-bold text-lg md:text-lg border border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00] hover:text-[#4E0010] text-center rounded inline-flex items-center justify-center py-[0.8vmax] font-sans"
              >
                Prospectus 2024-25
              </Link>
              <Link
                to="/pdf/RPGIprospectors.pdf"
                target="_blank"
                className="font-bold text-lg md:text-lg border border-white hover:bg-white hover:text-[#4E0010] text-white text-center rounded inline-flex items-center justify-center py-[0.8vmax] font-sans"
              >
                Payment Online
              </Link>
            </div>
            {footerLinks1st.map((item, index) => (
              <div
                className="flex flex-col sm:gap-6 md:gap-[1.11vmax]"
                key={index}
              >
                <h3 className="text-white font-bold sm:text-xl md:text-lg">
                  {item.textTittle}
                </h3>
                <ul className="flex flex-col gap-[1.38vmax]">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-white font-semibold sm:text-base md:text-sm lg:text-sm"
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
          <div className="flex flex-col lg:flex-row sm:gap-6 md:gap-[2.8vmax] justify-between">
            {footerLinks2nd.map((item, index) => (
              <div className="flex flex-col gap-[1.11vmax]" key={index}>
                <h3 className="text-white font-bold sm:text-xl md:text-lg">
                  {item.textTittle}
                </h3>
                <ul className="flex flex-col gap-[1.38vmax]">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        target={
                          link.path.startsWith("http") ? "_blank" : "_self"
                        }
                        className="text-white font-semibold sm:text-base md:text-base lg:text-[13px]/[20px] xl:text-sm"
                      >
                        &#9658; {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-4 md:gap-[1.25vmax]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8127581381236!2d88.3519976759105!3d22.948470019088482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89250a79aa925%3A0xc6e131b8eb71dfdd!2sModern%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1727630789319!5m2!1sen!2sin"
                width="330"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full md:w-[23vmax] rounded-lg flex-1"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex gap-6 items-center">
                <Link
                  to="https://youtube.com/@moderninstituteofengineeri6318?si=yYYFY_G6CTWtU44t"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src="/images/youtube.svg"
                    alt="youtube"
                    className="size-8 md:size-[2rem]"
                  />
                </Link>
                <Link to="" className="flex items-center justify-center">
                  <img
                    src="/images/linkedin.svg"
                    alt="linkedin"
                    className="size-8 md:size-[2rem]"
                  />
                </Link>
                <Link to="" className="flex items-center justify-center">
                  <img
                    src="/images/instagram.svg"
                    alt="instagram"
                    className="size-8 md:size-[2rem]"
                  />
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php?id=100089144376421"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src="/images/facebook.svg"
                    alt="instagram"
                    className="size-8 md:size-[2rem]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-white/50"></div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between sm:pb-24 md:pb-0 text-white">
          <h1 className="font-bold text-[1.38vmax] text-center">
            Modern Institute of Engineering &amp; Technology | All Rights
            Reserved
          </h1>
          <h1 className="text-[1.38vmax]">
            Design &amp; Developed By:{" "}
            <Link
              to="https://rebootmarketing.in/"
              target="_blank"
              className="font-bold"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
