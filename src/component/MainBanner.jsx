import React, { useEffect, useRef } from "react";
import videobanner from "../assets/bannervideo.mp4";
const MainBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play().catch((error) => {});
  }, []);

  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        src={videobanner}
        loop
        autoPlay
        playsInline
        width={1920}
        height={1080}
        preload="auto"
        type="video/mp4"
        className="w-full max-h-[35.7vmax] object-cover"
        muted
      />
    </div>
  );
};

export default MainBanner;
