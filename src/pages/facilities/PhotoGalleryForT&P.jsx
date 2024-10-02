import React from "react";
import MainPageTemplate from "../../template/MainPageTemplate";
import PhotoGalleryComponent from "../../component/PhotoGalleryComponent";
import FooterComponent from "../../component/FooterComponent";
import SubBanner from "../../component/SubBanner";

const PhotoGalleryForTP = () => {
  const photogallery = [
    "/images/tp1.jpg",
    "/images/tp2.jpg",
    "/images/tp3.jpg",
    "/images/tp4.jpg",
    "/images/tp5.jpg",
    "/images/tp6.jpg",
    "/images/tp7.jpg",
    "/images/tp8.jpg",
  ];

  return (
    <MainPageTemplate>
      <SubBanner
        bannerimg="/images/admissionsubbanner.jpg"
        heading={"Photo Gallery For T&P"}
      />
      <div className="xl:p-16 lg:p-8 sm:p-4">
        <PhotoGalleryComponent gallery={photogallery} />
      </div>
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default PhotoGalleryForTP;
