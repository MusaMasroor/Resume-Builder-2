import React from "react";
import PreloaderGif from "../img/preloader.gif";
const Preloader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <img src={PreloaderGif} alt="Preloader" />
    </div>
  );
};

export default Preloader;
