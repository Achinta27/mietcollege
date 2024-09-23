import React from "react";

import EventPageDesignComponent from "../component/EventPageDesignComponent";

const CollegeEvents = () => {
  const content = {
    bannerimg: "/images/admissionsubbanner.jpg",
    heading: "Events",
    events: [
      {
        eventimg: "/images/e1.png",
        title:
          "Lorem ipsum dolor sit amet consectetur. Diam ipsum ut volutpat cras augue pharetra. Mi risus interdum nunc aenean sit elit. Sed morbi felis molestie aliquet.",
        date: "26 July 2024",
        register: "Register now for free!",
      },
      {
        eventimg: "/images/e1.png",
        title:
          "Lorem ipsum dolor sit amet consectetur. Diam ipsum ut volutpat cras augue pharetra. Mi risus interdum nunc aenean sit elit. Sed morbi felis molestie aliquet.",
        date: "26 July 2024",
        register: "Register now for free!",
      },
      {
        eventimg: "/images/e1.png",
        title:
          "Lorem ipsum dolor sit amet consectetur. Diam ipsum ut volutpat cras augue pharetra. Mi risus interdum nunc aenean sit elit. Sed morbi felis molestie aliquet.",
        date: "26 July 2024",
        register: "Register now for free!",
      },
    ],
  };
  return <EventPageDesignComponent content={content} />;
};

export default CollegeEvents;
