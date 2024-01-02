import React, { useRef } from "react";
import RandomUser from "../img/random-user.png";
import { useResume } from "../ResumeContext";

const UserProfile = () => {
  const fileInputRef = useRef(null);
  const { selectedPhoto, handleUpload, handleDelete } = useResume();

  // Function to reset the input element's value
  const resetInputValue = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the input value
    }
  };

  return (
    <div>
      <div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            handleUpload(e);
            resetInputValue(); // Reset the input value after upload
          }}
          ref={fileInputRef}
        />
        <img
          src={selectedPhoto || RandomUser}
          className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          alt="User's photo"
          onClick={() => fileInputRef.current.click()}
        />
        {selectedPhoto ? (
          <button
            className="py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleDelete}
          >
            Delete Photo
          </button>
        ) : (
          <button
            className="py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => fileInputRef.current.click()}
          >
            Upload Photo
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
