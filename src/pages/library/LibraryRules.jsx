import React from "react";
import FooterComponent from "../../component/FooterComponent";
import SubBanner from "../../component/SubBanner";
import MainPageTemplate from "../../template/MainPageTemplate";

const LibraryRules = () => {
  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg={"/images/admissionsubbanner.jpg"}
        heading={"Library"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-[1.2vmax]">
          <h1 className="lg:text-3xl text-xl text-red-600 font-bold">
            Library Rules and Regulations
          </h1>
          <ol className="lg:text-xl text-base flex flex-col list-decimal ps-6 gap-2">
            <li>
              All the Library users must have ID card & Library card compulsory.
            </li>
            <li>Silence should be maintained in the library.</li>
            <li>
              Cell phones should be in the SILENT mode & not allowed to speak
              inside the library.
            </li>
            <li>
              Library cards will be issued on producing the Identity card, and
              books will be issued for the period of two weeks.
            </li>
            <li>
              The books should be returned within 15 days from the date of
              issue.
            </li>
            <li>
              Before borrowing the book, the member must make sure that the book
              lent is in good condition and the page numbers are intact.
            </li>
            <li>
              Members should not write or make any mark in any form of book.
            </li>
            <li>
              If the book is damaged by the borrower, He/ She will be
              responsible to replace the new book.
            </li>
            <li>
              The arrangements of chair and other furniture in the reading
              section should not be disturbed.
            </li>
            <li>
              Library books are the nation&apos;s asset. All users are requested
              to protect the books against damage &amp; theft.
            </li>
            <li>
              Loss of library card must be reported to the Librarian
              immediately. For a duplicate card, all supporting documents
              regarding its loss should be submitted to the Administration.
            </li>
          </ol>
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

export default LibraryRules;
