import react from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OnlineEnquiry from "./pages/OnlineEnquiry";
import MissionAndVission from "./pages/MissionAndVission";
import AboutUs from "./pages/AboutUs";
import GoverningBody from "./pages/GoverningBody";
import PrincipalMessage from "./pages/PrincipalMessage";
import BTech from "./pages/courseoffer/BTech";
import FeesStructure from "./pages/FeesStructure";
import CivilDeptOverview from "./pages/academics/departments/civilengeenering/CivilDeptOverview";
import CivilVissionMission from "./pages/academics/departments/civilengeenering/CivilVissionMission";
import CivilProgramOutcome from "./pages/academics/departments/civilengeenering/CivilProgramOutcome";
import CivilFacultyDetails from "./pages/academics/departments/civilengeenering/CivilFacultyDetails";
import HostelFacilities from "./pages/facilities/HostelFacilities";
import AntiRagging from "./pages/committee/AntiRagging";
import Scholarships from "./pages/Scholarships";
import CollegeEvents from "./pages/CollegeEvents";
import CollegeNews from "./pages/CollegeNews";
import PhotoGallery from "./pages/PhotoGallery";
import ConferenceHall from "./pages/facilities/ConferenceHall";
import TransportFacility from "./pages/facilities/TransportFacility";
import ChairmanMessage from "./pages/ChairManMessage";
import LibraryOverview from "./pages/library/LibraryOverview";
import LibraryVisionMission from "./pages/library/LibraryVisionMission";
import LibraryRules from "./pages/library/LibraryRules";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-miet/about-us" element={<AboutUs />} />
        <Route path="/about-miet/online-enquiry" element={<OnlineEnquiry />} />
        <Route
          path="/about-miet/mission-vission"
          element={<MissionAndVission />}
        />
        <Route path="/about-miet/governing-body" element={<GoverningBody />} />
        <Route
          path="/about-miet/principal-message"
          element={<PrincipalMessage />}
        />
        <Route
          path="/about-miet/chairman-message"
          element={<ChairmanMessage />}
        />
        <Route path="/admission/offer-course/:course" element={<BTech />} />
        <Route path="/admission/fees-structure" element={<FeesStructure />} />
        <Route path="/admission/scholarship" element={<Scholarships />} />

        {/* civil dept */}
        <Route
          path="/department/:dept/overview"
          element={<CivilDeptOverview />}
        />
        <Route
          path="/department/:dept/vission-and-mission"
          element={<CivilVissionMission />}
        />
        <Route
          path="/department/:dept/program-outcome"
          element={<CivilProgramOutcome />}
        />
        <Route
          path="/department/:dept/faculty-details"
          element={<CivilFacultyDetails />}
        />

        {/* MIET Campus */}
        <Route path="/mietcampus/events" element={<CollegeEvents />} />
        {/* facilities */}
        <Route
          path="/mietcampus/facilities/hostel-facilities"
          element={<HostelFacilities />}
        />
        <Route
          path="/mietcampus/facilities/conference-room"
          element={<ConferenceHall />}
        />
        <Route
          path="/mietcampus/facilities/transport"
          element={<TransportFacility />}
        />
        <Route
          path="/mietcampus/facilities/library"
          element={<LibraryOverview />}
        />
        <Route
          path="/mietcampus/facilities/library-vision"
          element={<LibraryVisionMission />}
        />
        <Route
          path="/mietcampus/facilities/library-rules"
          element={<LibraryRules />}
        />

        {/* comittee */}
        <Route path="/comittee/anti-ragging" element={<AntiRagging />} />

        <Route path="/news" element={<CollegeNews />} />

        {/* gallery */}
        <Route path="/gallery/photo-gallery" element={<PhotoGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
