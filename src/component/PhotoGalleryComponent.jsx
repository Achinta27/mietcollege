import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const PhotoGalleryComponent = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateImage = (direction) => {
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item}
              onClick={() => openModal(index)}
              alt=""
              className="w-full shadow-[0_6px_12px_rgba(0,0,0,0.35)] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_6px_12px_rgba(220,20,60,0.8)] flex-shrink flex-grow basis-full md:max-h-[15vmax] object-cover"
            />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-[100] flex justify-center items-center bg-black bg-opacity-80">
          <div className="relative w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <span>
                <img
                  src={gallery[selectedImageIndex]}
                  alt=""
                  className="xlg:h-[40rem] lg:h-[30rem] md:h-[30rem] sm:h-[20rem]"
                />
              </span>
            </div>
            <div className="absolute w-full flex justify-between p-4">
              <FaChevronLeft
                className="text-white text-3xl cursor-pointer"
                onClick={() => navigateImage("prev")}
              />
              <FaChevronRight
                className="text-white text-3xl cursor-pointer"
                onClick={() => navigateImage("next")}
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 p-16">
            <FaTimes
              className="text-white text-3xl cursor-pointer"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGalleryComponent;
