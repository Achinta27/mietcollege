import React from "react";
import MainPageTemplate from "../template/MainPageTemplate";
import MainBanner from "../component/MainBanner";
import RankingComponent from "../component/RankingComponent";
import OutstandingPlacement from "../component/OutstandingPlacement";
import CompanySlider from "../component/CompanySlider";
import MietDetails from "../component/MietDetails";
import ImportentNotice from "../component/ImportentNotice";
import SeniorFaculty from "../component/SeniorFaculty";
import GalleryComponent from "../component/GalleryComponent";
import FooterComponent from "../component/FooterComponent";
import AboutUsComponent from "../component/AboutUsComponent";
import OurCoursesComponent from "../component/OurCoursesComponent";

const Home = () => {
  return (
    <MainPageTemplate>
      <MainBanner />
      <RankingComponent />
      <AboutUsComponent />
      <OutstandingPlacement />
      <CompanySlider />
      <MietDetails />
      <OurCoursesComponent />
      <SeniorFaculty />
      <ImportentNotice />
      <GalleryComponent />
      <FooterComponent />
    </MainPageTemplate>
  );
};

export default Home;
