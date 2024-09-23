import React, { useEffect, useRef } from "react";
import videobanner from "../assets/bannervideo.mp4";
const MainBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play().catch((error) => {});
  }, []);

  return (
    <div className="w-full ">
      <video
        ref={videoRef}
        src={videobanner}
        loop
        autoPlay
        playsInline
        type="video/mp4"
        className="w-full"
        muted
      />
    </div>
  );
};

export default MainBanner;
