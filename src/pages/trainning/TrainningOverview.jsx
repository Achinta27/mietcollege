import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FooterComponent from "../../component/FooterComponent";

const TrainningOverview = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Training & Overview"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 md:gap-4 xl:gap-16">
          <div className="flex flex-col sm:gap-2 lg:gap-4">
            <span className="xl:text-4xl sm:text-2xl lg:text-2xl md:text-xl font-semibold text-[#DC143C]">
              Overview
            </span>
            <div className="flex flex-col gap-2 sm:text-xs lg:text-sm xl:text-lg">
              <span>
                The Training and Placement &#40;T & P&#41; Cell facilitates and
                coordinates the placement opportunities for students assisting
                them securing gainful employment, internships, conducting skill
                enhancement programs and providing real-world corporate exposure
                through industrial visits. <br /> Creating awareness amongst the
                students regarding various career options. To enhance students
                employability by providing training in Aptitude &amp; soft
                skills.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <img src="/images/placement-statistics.jpeg" alt="" />
            </div>
            <div className="w-full h-[5rem] flex justify-center items-center bg-[#DC143C] text-white text-xl font-semibold rounded-md">
              Placement Statistics
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:gap-2 lg:gap-4">
          <span className="xl:text-4xl sm:text-2xl lg:text-2xl md:text-xl font-semibold text-[#DC143C]">
            Objectives of Training &amp; Placements:
          </span>
          <div className="flex flex-col gap-2 sm:text-xs lg:text-sm xl:text-lg">
            <span>
              To provide recruitment to students. To provide exposure to Diploma
              &amp; B.Tech pursuing students. To have good relations with the
              recruiters. Managing Recruiters correspondence and
              feedback&apos;s. <br />A Training & Placement officer arranges
              guest lectures, workshops, seminars, industrial visits &
              educational tours for students. Coordinates with the different
              industries for on-campus and off-campus interviews of the
              meritorious students for providing suitable jobs in their
              organizations.
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:gap-2 lg:gap-4">
          <span className="xl:text-4xl sm:text-2xl lg:text-2xl md:text-xl font-semibold text-[#DC143C]">
            Skill Development:
          </span>
          <div className="flex flex-col gap-2 sm:text-xs lg:text-sm xl:text-lg">
            <span>
              The development of an individual&apos;s employability skills is
              essential for their professional success. They help with
              professional growth and work happiness in addition to improving
              one&apos;s chances of landing a job. Employers want potential
              employees who are adaptable to changing situations, work
              effectively in teams, communicate clearly, and think analytically
              in today&apos;s quickly changing work environment. Individuals who
              possess these abilities can succeed in their positions and
              favourably impact the performance of the organization.
              Additionally, employability skills are not restricted to a
              particular profession or sector, which makes people more flexible
              and versatile throughout their careers.
            </span>
          </div>
        </div>
        <img
          src="/images/placment.jpg"
          alt="placement"
          className="w-full rounded"
        />
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default TrainningOverview;
