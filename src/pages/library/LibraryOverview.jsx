import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import SubBanner from "../../component/SubBanner";
import FooterComponent from "../../component/FooterComponent";

const LibraryOverview = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Library"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-[1.2vmax]">
          <h1 className="lg:text-3xl text-xl text-red-600 font-bold">
            Overview:
          </h1>
          <p className="lg:text-xl text-base">
            MIET central library is the repository of all types of resources for
            students and faculty to gain knowledge. MIET central library is
            well-lighted and spacious with comfortable seating arrangements for
            students to sit and study there for long hours. It is situated at
            ground floor in the main block. The library has a separate reading
            section, reference section and stacking section. <br /> <br /> The
            unmatched quality and quantity of material available is also
            supplemented by courteous and competent staff for facilitating
            students. The institute has constituted a separate library committee
            that selects and ensures the regular availability of latest books
            and reading material in the library. <br /> <br /> The library at
            MIET is well equipped and has an immense collection of resources in
            form of online database, books, audio/video CDs, reference books,
            national and international magazines, journals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-stretch justify-between gap-y-8">
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.12 (1).jpeg"
            alt="library-1"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.12.jpeg"
            alt="library-2"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.13 (1).jpeg"
            alt="library-3"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14 (1).jpeg"
            alt="library-4"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14 (2).jpeg"
            alt="library-5"
            className="w-[45vmax] rounded-xl"
          />
          <img
            src="/Library/WhatsApp Image 2024-07-24 at 15.04.14.jpeg"
            alt="library-6"
            className="w-[45vmax] rounded-xl"
          />
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default LibraryOverview;
