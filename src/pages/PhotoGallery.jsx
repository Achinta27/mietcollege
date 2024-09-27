import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import FooterComponent from "../component/FooterComponent";
import PhotoGalleryComponent from "../component/PhotoGalleryComponent";

const PhotoGallery = () => {
  const photogallery = [
    "/Campus/Building 1.jpg",
    "/Campus/Classroom 1.JPG",
    "/Campus/Computer Lab.JPG",
    "/Campus/Drawing.JPG",
    "/Campus/Drone Overview.jpg",
    "/Campus/Entrance 3.JPG",
    "/Campus/Lab 2.JPG",
    "/Campus/Lab 3.JPG",
    "/Campus/Lab 4.JPG",
    "/Campus/Library 1.JPG",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (1).jpeg",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (2).jpeg",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (3).jpeg",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (4).jpeg",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02 (5).jpeg",
    "/Campus/WhatsApp Image 2024-08-02 at 10.59.02.jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02 (1).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02 (2).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02 (3).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02 (4).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02 (5).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 10.59.02.jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.04 (1).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.04.jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (1).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (2).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (3).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (4).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05 (5).jpeg",
    "/Campus 2 New/WhatsApp Image 2024-08-02 at 11.00.05.jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.12 (1).jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.12.jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.13 (1).jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.13.jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.14 (1).jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.14 (2).jpeg",
    "/Library/WhatsApp Image 2024-07-24 at 15.04.14.jpeg",
  ];

  return (
    <MainPageTemplate>
      <div className="xl:p-16 lg:p-8 sm:p-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photogallery.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src={item}
                alt=""
                className="w-full shadow-[0_6px_12px_rgba(0,0,0,0.35)] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(220,20,60,0.8)]"
              />
            </div>
          ))}
        </div> */}
        <PhotoGalleryComponent gallery={photogallery} />
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default PhotoGallery;
