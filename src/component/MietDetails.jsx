import React from "react";
import HeadingTemplate from "../template/HeadingTemplate";

const MietDetails = () => {
  const mietdetails = [
    {
      topheading: "Why Study At MIET?",
      imgsrc: "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.04.jpeg",
      heading: "WHY STUDY AT MIET?",
      text: " With unmatched facility and stae-of-art infrastructure, modern labs, canteen, hostel, library.A student needs to be shaped for corporate requirements, behavioral patterns, and expectations. We continually impart such knowledge through regular training sessions on human skills, corporate environments, interview tactics, mock sessions and relevant technical software sessions; these sessions being woven into the regular class fabric,With unmatched facility and stae-of-art infrastructure, modern labs, canteen, hostel, library.A student needs to be shaped for corporate requirements, behavioral patterns, and expectations. We continually impart such knowledge through regular training sessions on human skills, corporate environments, interview tactics, mock sessions and relevant technical software sessions; these sessions being woven into the regular class fabric.",
      name: "",
      role: "",
    },
    {
      topheading: "Principal's Message",
      imgsrc: "/images/principal-about.png",
      heading: "",
      text: "It is with great pleasure that I welcome you to Modern Institute of Engineering & Technology, a pioneering institution in engineering education in Hooghly, West Bengal. Established with a vision to nurture innovative engineers and leaders of tomorrow, our institute offers a range of B.Tech and diploma engineering courses that are designed to meet the evolving needs of the industry.At Modern Institute of Engineering & Technology, we are committed to providing a holistic learning experience that goes beyond the classroom. Our state-of-the-art facilities, experienced faculty members, and industry-relevant curriculum ensure that our students are well-equipped to face the challenges of the modern world.",
      name: "Best wishes for a successful",
      role: "Academic journey ahead!",
    },
    {
      topheading: "Our Vision",
      imgsrc: "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (2).jpeg",
      heading: "",
      text: "Our vision at Modern Institute of Engineering & Technology is to be a premier institution of engineering education, recognized for excellence in teaching, research, and innovation. We aspire to nurture a learning community that is intellectually vibrant, socially inclusive, and globally competitive.We envision our graduates to be ethical leaders, equipped with the knowledge, skills, and values to address the complex challenges of the 21st century. We aim to foster a culture of continuous learning and professional development, empowering our students to adapt to the evolving demands of the industry.",
      name: "To achieve our vision, we are committed to:",
      role: "Providing a rigorous academic curriculum that is aligned with industry trends and global best practices.",
    },
  ];
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <span className="flex flex-col gap-2 w-full justify-center items-center">
        <HeadingTemplate heading={"Why Choose MIET"} />
      </span>
      <div className="w-full">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-6 lg:gap-2 xl:gap-4">
          {mietdetails.map((mietdetail, index) => (
            <div
              key={index}
              className="p-2 flex flex-col items-center gap-[2.5vmax] border border-gray-300 rounded-lg bg-[linear-gradient(180deg,_#FFF_0%,_#FFF7F8_100%)] shadow-[0_0_10px_1px_rgba(0,_0,_0,_0.15)] md:max-w-[28.8vmax] sm:px-2 xl:px-4"
            >
              <img src={mietdetail.imgsrc} alt="" className="max-w-[24vmax]" />
              <div className="flex flex-col gap-2 ">
                <span className="md:text-xl sm:text-xl lg:text-2xl text-black font-bold text-center">
                  {mietdetail.topheading}
                </span>
                <span className="flex items-center self-center my-[1.8vmax]">
                  <span className="h-[2px] w-[4rem] bg-red-700"></span>
                  <span className="h-[6px] w-[2.5rem] bg-red-700"></span>
                  <span className="h-[2px] w-[4rem] bg-red-700"></span>
                </span>
                <span className="xl:text-base md:text-base text-sm">
                  {mietdetail.text}
                </span>
                <span className="xl:text-xl md:text-xl text-base font-semibold text-[#bb3232]">
                  {mietdetail.name}
                </span>
                <span className="xl:text-lg md:text-lg text-sm text-gray-500">
                  {mietdetail.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MietDetails;
