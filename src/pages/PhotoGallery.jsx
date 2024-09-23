import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import FooterComponent from "../component/FooterComponent";

const PhotoGallery = () => {
  const photogallery = [
    "/images/g1.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
  ];

  return (
    <MainPageTemplate>
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photogallery.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src={item}
                alt=""
                className="w-full shadow-[0_6px_12px_rgba(0,0,0,0.35)] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(220,20,60,0.8)]"
              />
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default PhotoGallery;
