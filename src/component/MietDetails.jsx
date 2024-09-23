import React from "react";

const MietDetails = () => {
  const mietdetails = [
    {
      topheading: "WHY MIET",
      imgsrc: "/images/Building1.jpg",
      heading: "WHY STUDY AT MIET?",
      text: " With unmatched facility and stae-of-art infrastructure, modern labs, canteen, hostel, library.A student needs to be shaped for corporate requirements, behavioral patterns, and expectations. We continually impart such knowledge through regular training sessions on human skills, corporate environments, interview tactics, mock sessions and relevant technical software sessions; these sessions being woven into the regular class fabric,With unmatched facility and stae-of-art infrastructure, modern labs, canteen, hostel, library.A student needs to be shaped for corporate requirements, behavioral patterns, and expectations. We continually impart such knowledge through regular training sessions on human skills, corporate environments, interview tactics, mock sessions and relevant technical software sessions; these sessions being woven into the regular class fabric",
      name: "",
      role: "",
    },
    {
      topheading: "Principal’s Message",
      imgsrc: "/images/Building1.jpg",
      heading: "",
      text: "It is with great pleasure that I welcome you to Modern Institute of Engineering & Technology, a pioneering institution in engineering education in Hooghly, West Bengal. Established with a vision to nurture innovative engineers and leaders of tomorrow, our institute offers a range of B.Tech and diploma engineering courses that are designed to meet the evolving needs of the industry.At Modern Institute of Engineering & Technology, we are committed to providing a holistic learning experience that goes beyond the classroom. Our state-of-the-art facilities, experienced faculty members, and industry-relevant curriculum ensure that our students are well-equipped to face the challenges of the modern world.",
      name: "Best wishes for a successful",
      role: "academic journey ahead!",
    },
    {
      topheading: "Our Vision",
      imgsrc: "/images/Building1.jpg",
      heading: "",

      text: "Our vision at Modern Institute of Engineering & Technology is to be a premier institution of engineering education, recognized for excellence in teaching, research, and innovation. We aspire to nurture a learning community that is intellectually vibrant, socially inclusive, and globally competitive.We envision our graduates to be ethical leaders, equipped with the knowledge, skills, and values to address the complex challenges of the 21st century. We aim to foster a culture of continuous learning and professional development, empowering our students to adapt to the evolving demands of the industry.",
      name: "To achieve our vision, we are committed to:",
      role: "Providing a rigorous academic curriculum that is aligned with industry trends and global best practices.",
    },
  ];
  return (
    <div className="flex flex-col gap-8 sm:p-4 md:p-8 xl:p-16 w-full justify-center items-center">
      <div className="w-full">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-6 lg:gap-2 xl:gap-4">
          {mietdetails.map((mietdetail, index) => (
            <div
              key={index}
              className="p-2 box-shadow flex flex-col  sm:gap-2 lg:gap-6 border border-gray-300 rounded-lg"
            >
              <span className="w-full sm:h-[2rem]  xl:h-[3rem] flex justify-center text-white font-bold sm:text-sm xl:text-xl rounded-lg items-center bg-[#bb3232]">
                {mietdetail.topheading}
              </span>
              <div className="flex flex-col gap-1 sm:px-2 xl:px-4">
                <span className="">
                  <img
                    src={mietdetail.imgsrc}
                    alt=""
                    className="w-full h-auto"
                  />
                </span>
                <span className="flex flex-col gap-2 ">
                  <span className="xl:text-xl sm:text-xl lg:text-base font-semibold text-[#bb3232]">
                    {mietdetail.heading}
                  </span>
                  <span className="xl:text-base sm:text-base lg:text-sm">
                    {mietdetail.text}
                  </span>
                  <span className="xl:text-xl sm:text-xl lg:text-base font-semibold text-[#bb3232]">
                    {mietdetail.name}
                  </span>
                  <span className="xl:text-lg sm:text-lg lg:text-sm text-gray-500">
                    {mietdetail.role}
                  </span>
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
