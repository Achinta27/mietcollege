import React from "react";
import NewsPageDesignComponent from "../component/NewsPageDesignComponent";

const CollegeNews = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "College News",
    news: [
      {
        title:
          "This is to inform all the students that the Annual Sports Meet 2023 will be held on 14th January (Saturday) at the college Ground.",
        date: "Jan 26, 2024",
      },
      {
        title:
          "This is to inform all the students that the Annual Sports Meet 2023 will be held on 14th January (Saturday) at the college Ground.",
        date: "Jan 26, 2024",
      },
    ],
  };
  return (
    <div>
      <NewsPageDesignComponent content={content} />
    </div>
  );
};

export default CollegeNews;
