import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import SubBanner from "../component/SubBanner";
import WorldClassFacilityImgComponent from "../component/WorldClassFacilityImgComponent";
import FooterComponent from "../component/FooterComponent";

const AboutUs = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"About Us"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-4 xl:gap-16">
          <div className="flex flex-col sm:gap-2 lg:gap-4">
            <span className="xl:text-4xl sm:text-2xl lg:text-2xl md:text-xl font-semibold text-[#DC143C]">
              About Modern Institute Of Engineering Of Technology
            </span>
            <div className="flex flex-col gap-2 sm:text-xs lg:text-sm xl:text-lg">
              <span>
                Education is a silent and peaceful weapon that can bring success
                without harm. Education is more than what you can learn from a
                book, it empowers the students&apos; minds, nurtures critical
                thinking and fosters a well-rounded perspective. The purpose of
                education is not limited to gaining knowledge and skills only,
                it equips the students with essential skills for personal and
                societal development. Modern Institute of Engineering &
                Technology was formed to act as a catalyst. The college was
                established under the Badal Deb Memorial Educational Foundation
                Trust in the year 2010. Since then, students from various
                backgrounds have been given a safe, nurturing environment where
                they can gain the skills and knowledge. By becoming
                knowledgeable and developing skills, the students can deal with
                real-world situations. They require to be progressive leaders in
                today&apos;s fast paced society. Modern Institute of Engineering
                & Technology empowers the students by providing specialized
                knowledge, relevant skills and critical thinking abilities. The
                team of dedicated, highly qualified and passionate engineering
                professors have helped students to do their best. Modern
                Institute of Engineering & Technology is approved by AICTE
                &#40;All India Council for Technical Education&#41;, Govt. of
                India and affiliated to MAKAUT &#40;Maulana Abul Kalam Azad
                University of Technology&#41; and WBSCT & VE & SD &#40;West
                Bengal State Council of Technical and Vocational Education and
                Skill Development&#41;.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/about1.png" alt="" />
              <img src="/images/about1.png" alt="" />
            </div>
            <div>
              <img src="/images/about3.png" alt="" className="w-full" />
            </div>
            <div className="w-full h-[5rem] flex justify-center items-center bg-[#DC143C] text-white text-xl font-semibold rounded-md">
              Life At MIET
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <span>
            Over the past 14 years, MIET has developed and paved the way to
            overcome all the problems to achieve sustainable development goals
            and education is the only way that can help the students to achieve
            sustainable development goals. We are involved in all parts of the
            students&apos; academic lives and make sure they dedicated for
            excellence as soon as they step on campus. We build across the
            institute a culture of excellence in teaching and learning with
            needed performance and accountability from all support activities.
            When theory is put into practise, real learning that sticks around
            happens. We work with our students on projects and practical
            applications to help them learn and remember more about engineering
            and management. We inculcate spirit of professionalism, team-work,
            innovation and entrepreneurship among the students. We promote
            co-curricular and extra-curricular activities for overall
            personality development of the students. Individual interests and
            skills are supported by clubs and cultural forums that are full of
            life.
          </span>
          <span>
            When theory is put into practise, real learning that sticks around
            happens. We work with our students on projects and practical
            applications to help them learn and remember more about engineering
            and management. We inculcate spirit of professionalism, team-work,
            innovation and entrepreneurship among the students. We promote
            co-curricular and extra-curricular activities for overall
            personality development of the students. Individual interests and
            skills are supported by clubs and cultural forums that are full of
            life.
          </span>
          <span>
            <b>Goals:</b>
            <br />
            1. To establish minimum three state-of-the-art research laboratories
            in the contemporary areas, such as: <br /> i&#41; Natural Language
            Processing, <br /> ii&#41; Multimedia and Communication, <br />
            iii&#41; Data Warehousing, <br /> iv&#41; High Performance Computing
            <br /> v&#41; Bioinformatics. <br /> 2. To enable all the students
            to pursue their chosen career paths, such as, higher education,
            entrepreneurship and placement in reputed organizations. <br /> 3.
            To have 80% faculty members with Ph.D. qualification by 2027. <br />{" "}
            4. At least 5 publications in reputed International
            Journals/Conference every year. <br /> 5. To execute Industry/R & D
            projects with 10% growth rate. <br /> 6. To introduce a new
            postgraduate programme in a contemporary area by 2027.
          </span>
          <span>
            With unmatched facility and state-of-the-art infrastructure, modern
            laboratories, well facilitated canteen with variety of palatable
            dishes, in campus Boys&apos; Hostel and well protected Girls&apos; Hostel and
            Library keeping pace with modern cutting-edge technology, students
            need to be properly groomed and ultimately made employable and
            subsequently shaped, honed into the groove of the requirement of
            corporate sector, behavioural patterns and expectations. In order to
            fructify this aim and target sustained efforts on behalf of the
            institute have been put in operation in the form of imparting such
            inclusive knowledge through regular hands-on training sessions on
            human skills, corporate environments, interview techniques, mock
            drills and relevant technical software sessions that are woven into
            the regular class fabric.
          </span>
        </div>
      </div>
      <WorldClassFacilityImgComponent />
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default AboutUs;
