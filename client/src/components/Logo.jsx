import React from "react";
import resumeIcon from "../img/resumeIcon.png";

const logo = () => {
  return (
    <div>
      <div className="flex">
        <img src={resumeIcon} className="w-8 h-8" alt="icon" />

        <h2 className="text-2xl font-bold text-white">Resume Builder</h2>
      </div>
    </div>
  );
};

export default logo;
