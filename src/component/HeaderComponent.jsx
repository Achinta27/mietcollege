import React, { useState } from "react";
import {
  MdArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { RiCloseLine, RiMenuAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [menuopen, setMenuopen] = useState(false);

  const togglemenuopen = () => {
    setMenuopen(!menuopen);
  };

  const toggleDropdown = (index) => {
    const updatedDropdownStates = {};
    Object.keys(dropdownStates).forEach((key) => {
      updatedDropdownStates[key] = false;
    });

    updatedDropdownStates[index] = !dropdownStates[index];
    setDropdownStates(updatedDropdownStates);
  };

  const toggleNestedDropdown = (parentIndex, nestedIndex) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [`${parentIndex}-${nestedIndex}`]:
        !prevState[`${parentIndex}-${nestedIndex}`],
    }));
  };

  const handlePdfDownload = (pdfLink) => {
    const tempLink = document.createElement("a");
    tempLink.href = pdfLink;
    tempLink.setAttribute("download", pdfLink.split("/").pop());
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const NavElement = [
    {
      name: "About MIET",
      dropdownItems: [
        { name: "About Us", link: "/about-miet/about-us" },
        { name: "Vision & Mission", link: "/about-miet/mission-vission" },
        { name: "Governing Body", link: "/about-miet/governing-body" },
        { name: "Chairman's Message", link: "/about-miet/chairman-message" },
        { name: "Principal's Message", link: "/about-miet/principal-message" },
        {
          name: "Affiliation & Approval",
          nesteddropdownItems: [
            { name: "AICTE", link: "" },
            { name: "MAKAUT", link: "" },
            {
              name: "WBSCT & VE & SD",
              link: "/pdf/RPGIprospectors.pdf",
              target: "_blank",
            },
          ],
        },
        { name: "Prospects 2024 - 25", link: "" },
        {
          name: "Mandataory Disclosure",
          link: "/pdf/Mandatory-disclosure.pdf",
          target: "_blank",
        },
        { name: "Career", link: "/about-miet/online-enquiry" },
      ],
    },
    {
      name: "Admisson 2024",
      dropdownItems: [
        {
          name: "Courses Offered",
          nesteddropdownItems: [
            { name: "B.Tech", link: "/admission/offer-course/btech" },
            { name: "Diploma", link: "/admission/offer-course/diploma" },
          ],
        },
        { name: "Fees Structure", link: "/admission/fees-structure" },
        { name: "Scholarship", link: "/admission/scholarship" },
        { name: "Previous Year Placement Record", link: "" },
        { name: "Online Enquiry", link: "/about-miet/online-enquiry" },
      ],
    },
    {
      name: "Academics",
      dropdownItems: [
        {
          name: "Departments",
          nesteddropdownItems: [
            {
              name: "Basic Science & Humanities Department",
              link: "/department/bsc/overview",
            },
            {
              name: "Computer Science & Engineering",
              link: "/department/csc/overview",
            },
            { name: "Civil Engineering", link: "/department/civil/overview" },
            {
              name: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
              link: "/department/cscai/overview",
            },
            {
              name: "Computer Science and Engineering (Cyber Security)",
              link: "/department/csccs/overview",
            },
            {
              name: "Electrical Engineering",
              link: "/department/ee/overview",
            },
            {
              name: "Electronics and Communication Engineering",
              link: "/department/ece/overview",
            },
            {
              name: "Mechanical Engineering",
              link: "/department/me/overview",
            },
          ],
        },
        {
          name: "Academic Calendar",
          link: "/pdf/Academic Calender 2024.pdf",
          target: "_blank",
        },
        { name: "Curriculum Feedback", link: "" },
      ],
    },
    {
      name: "Library",
      dropdownItems: [
        { name: "Library Overview", link: "/mietcampus/facilities/library" },
        {
          name: "Vision & Mission",
          link: "/mietcampus/facilities/library-vision",
        },
        { name: "Staff Details", link: "" },
        { name: "Statistics", link: "" },
        { name: "E-Resources", link: "/pdf/LIBRARY.pdf", target: "_blank" },
        {
          name: "Rules & Regulations",
          link: "/mietcampus/facilities/library-rules",
        },
      ],
    },
    {
      name: "Committee",
      dropdownItems: [
        {
          name: "IQAC",
          link: "",
        },
        { name: "IIC", link: "" },
        { name: "Anti Ragging Committee", link: "/comittee/anti-ragging" },
        {
          name: "Grievance Redressal Committee",
          nesteddropdownItems: [
            { name: "Student Grievance Redressal", link: "" },
            { name: "Faculty Grievance Redressal", link: "" },
          ],
        },
        { name: "Internal Complain Committee", link: "" },
        { name: "SC & ST Committee", link: "" },
        { name: "Disciplinary Committee", link: "" },
        { name: "Cultural Committee", link: "" },
        { name: "Board of Examination Committee", link: "" },
        { name: "Library Committee", link: "" },
        { name: "Hostel & Camping Committee", link: "" },
        { name: "Women Cell", link: "" },
        { name: "Training & Placement Committee", link: "" },
        { name: "Research & Development Committee", link: "" },
      ],
    },
    {
      name: "MIET Campus",
      dropdownItems: [
        {
          name: "Facilities",
          nesteddropdownItems: [
            {
              name: "Hostel, Transport",
              link: "/mietcampus/facilities/hostel-facilities",
            },
            {
              name: "Conference Hall",
              link: "/mietcampus/facilities/conference-room",
            },
            { name: "Common Room", link: "" },
            { name: "Playground, Student Counseling", link: "" },
          ],
        },
        { name: "Infrastructure, Events", link: "/mietcampus/events" },
        { name: "Virtual Tour, Google Map", link: "" },
      ],
    },
    {
      name: "Training & Placement",
      dropdownItems: [
        {
          name: "Overview",
          link: "",
        },
        {
          name: "Placement Statistics",
          link: "/pdf/RPGIprospectors.pdf",
          target: "_blank",
        },
        { name: "Placement Record", link: "" },
        { name: "Training & Internship", link: "" },
        {
          name: "Photo Gallery for T&P",
          link: "/pdf/RPGIprospectors.pdf",
          target: "_blank",
        },
      ],
    },
    {
      name: "Gallery",
      dropdownItems: [
        {
          name: "Photo Gallery",
          link: "/gallery/photo-gallery",
        },
        { name: "Video Gallery", link: "" },
      ],
    },
    { name: "Contact Us", link: "" },
  ];

  const getGridColumnsClass = (items) => {
    return items.length >= 6
      ? "grid-cols-2 w-[32rem]"
      : "grid-cols-1 w-[15rem]";
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-white relative">
        <div className="flex w-full sm:h-[5rem] md:h-[8rem] lg:h-[5rem] justify-between items-center">
          <div className="sm:flex sm:px-2 md:px-4 lg:px-6 lg:hidden">
            <button onClick={togglemenuopen} className="">
              {menuopen ? (
                <RiCloseLine className="sm:text-[1.8rem] md:text-4xl text-[#bb3232] font-semibold" />
              ) : (
                <RiMenuAddLine className="sm:text-[1.8rem] md:text-4xl text-[#bb3232] font-semibold" />
              )}
            </button>
          </div>

          {menuopen && (
            <div className="w-full justify-end flex items-end absolute sm:top-20 lg:top-20">
              <div className="sm:block flex w-full z-30 h-[80vh] overflow-scroll bg-[#bb3232] flex-col relative TopToBottom md:text-3xl sm:text-base lg:hidden px-9">
                {NavElement.map((navbar, index) => (
                  <div
                    key={index}
                    className="font-semibold text-white p-4 md:py-10 border-b-2 border-gray-200"
                  >
                    {navbar.dropdownItems ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="flex flex-row gap-2 items-center"
                        >
                          <div>{navbar.name}</div>
                          <span className="text-lg">
                            {dropdownStates[index] ? (
                              <MdKeyboardArrowUp />
                            ) : (
                              <MdKeyboardArrowDown />
                            )}
                          </span>
                        </button>

                        {dropdownStates[index] && (
                          <div className="bg-[#751e1e] rounded-lg shadow-md mt-1 p-2 w-full transition-opacity border-gray-200 text-white opacity-100">
                            {navbar.dropdownItems.map((item, i) => (
                              <div key={i}>
                                {item.nesteddropdownItems ? (
                                  <div>
                                    <button
                                      onClick={() =>
                                        toggleNestedDropdown(index, i)
                                      }
                                      className="flex flex-row gap-2 items-center slidefromright"
                                    >
                                      <div>{item.name}</div>
                                      <span className="text-lg">
                                        {dropdownStates[`${index}-${i}`] ? (
                                          <MdKeyboardArrowUp />
                                        ) : (
                                          <MdKeyboardArrowDown />
                                        )}
                                      </span>
                                    </button>
                                    {dropdownStates[`${index}-${i}`] && (
                                      <div className="ml-4">
                                        {item.nesteddropdownItems.map(
                                          (nestedItem, j) => (
                                            <a
                                              key={j}
                                              href={nestedItem.link}
                                              className="flex py-2 items-center px-4 border-b border-yellow-400 text-white hover:bg-[#751e1e]"
                                              target={nestedItem.target}
                                            >
                                              <span>
                                                <MdArrowRight />
                                              </span>
                                              <span>{nestedItem.name}</span>
                                            </a>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    to={item.link}
                                    className="flex flex-col py-4 px-4 border-b-[0.5px] border-gray-200"
                                    onClick={item.onClick}
                                    target={item.target}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link to={navbar.link}>{navbar.name}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 sm:px-2 md:px-4 lg:px-6 items-center">
            <Link to="/">
              <img
                src="/images/mietlogo.png"
                alt=""
                className="w-fit sm:h-[3rem] md:h-[3rem] xl:h-[4rem]"
              />
            </Link>
            <div className="flex md:flex-row sm:flex-col lg:gap-2">
              <span>
                <img
                  src="/images/aicte.png"
                  alt=""
                  className="w-fit sm:h-[2rem] md:h-[3rem] xl:h-[4rem]"
                />
              </span>
              <span>
                <img
                  src="/images/makaut_logo.png"
                  alt=""
                  className="w-fit sm:h-[2rem] md:h-[3rem] xl:h-[4rem]"
                />
              </span>
            </div>
          </div>

          <div className="flex lg:flex-row sm:flex-col sm:gap-0 md:gap-4 sm:px-2 md:px-4 lg:px-0 lg:gap-8 items-center">
            <div className="boxdesign"></div>
            <div className="xlg:w-[10rem] lg:w-[8rem] lg:h-[2.5rem] xlg:h-[3rem] z-10 sm:hidden rounded-md lg:text-xs xlg:text-lg font-semibold bg-[#bb3232] text-white lg:flex items-center justify-center">
              Pay Now
            </div>
            <div className="flex gap-2 z-20 items-center">
              <span className="lg:block sm:hidden">
                <img
                  src="images/call-icon.png"
                  alt=""
                  className="xl:w-[3rem] lg:w-[2rem]"
                />
              </span>
              <div className="flex flex-col text-[#bb3232] font-bold">
                <span className="text-black sm:text-[8px] md:text-xs lg:text-xs xl:text-xs">
                  Admissions Only
                </span>
                <span className="sm:text-[10px] md:text-sm lg:text-lg xl:text-xl">
                  918336070583
                </span>
              </div>
            </div>
            <div className="flex flex-col z-20 text-[#bb3232] font-bold">
              <span className="text-black sm:text-[8px] md:text-xs lg:text-xs xl:text-xs">
                Other Quaries
              </span>
              <span className="sm:text-[10px] md:text-sm lg:text-lg xl:text-xl">
                918336070583
              </span>
            </div>

            <div className="w-[11rem] h-[5rem] p-3 sm:hidden text-[1.3rem] font-semibold animate-blink lg:flex items-center justify-center">
              Apply Now
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="lg:flex sm:hidden lg:gap-4 xl:gap-6 justify-start bg-[#bb3232] p-3 xl:px-3 relative lg:text-[10px] xlg:text-[12px] xl:text-sm"
          onMouseLeave={() => {
            setDropdownStates({});
          }}
        >
          {NavElement.map((navbar, index) => (
            <div key={index} className="font-semibold text-white">
              {navbar.dropdownItems ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    onMouseEnter={() => toggleDropdown(index)}
                    className="flex flex-row items-center"
                  >
                    <div>{navbar.name}</div>
                    <span className="text-lg">
                      {dropdownStates[index] ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </button>
                  {dropdownStates[index] && (
                    <div className="w-full h-full flex items-center justify-center z-50">
                      <div
                        className={`bg-[#bb3232] absolute top-7 left-0 rounded-sm shadow-md mt-1 grid ${getGridColumnsClass(
                          navbar.dropdownItems
                        )}`}
                      >
                        {navbar.dropdownItems.map((item, i) => (
                          <div key={i} className="relative group">
                            {item.target ? (
                              <a
                                href={item.link}
                                target={item.target}
                                className="flex py-4 items-center px-2 text-white hover:bg-[#751e1e]"
                              >
                                <span>
                                  <MdArrowRight />
                                </span>
                                <span>{item.name}</span>
                              </a>
                            ) : (
                              <Link
                                to={item.link}
                                className="flex py-4 items-center px-2 text-white hover:bg-[#751e1e]"
                                onClick={item.onClick}
                              >
                                <span>
                                  <MdArrowRight />
                                </span>
                                <span>{item.name}</span>
                              </Link>
                            )}
                            {item.nesteddropdownItems && (
                              <div className="absolute left-full -top-2 w-[16rem] z-[60] hidden group-hover:block bg-white shadow-md rounded-sm p-2">
                                {item.nesteddropdownItems.map((nestedItem, j) =>
                                  nestedItem.target ? (
                                    <a
                                      key={j}
                                      href={nestedItem.link}
                                      className="flex py-4 items-center px-2 text-black hover:bg-[#751e1e] hover:text-white"
                                      target={nestedItem.target}
                                    >
                                      <span>
                                        <MdArrowRight />
                                      </span>
                                      <span>{nestedItem.name}</span>
                                    </a>
                                  ) : (
                                    <Link
                                      key={j}
                                      to={nestedItem.link}
                                      className="flex py-4 items-center px-2 text-black hover:bg-[#751e1e] hover:text-white"
                                    >
                                      <span>
                                        <MdArrowRight />
                                      </span>
                                      <span>{nestedItem.name}</span>
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={navbar.link}>{navbar.name}</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
