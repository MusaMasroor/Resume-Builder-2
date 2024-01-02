import React from "react";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="bg-white shadow-lg border-0 rounded-lg mt-5 mx-auto w-full">
            <h3 className="card-header text-4xl text-muted text-center py-8">
              404
            </h3>
            <span className="block text-sm text-muted text-center mb-4">
              Page Could Not Be Found
            </span>
            <div className="card-body mx-auto">
              <Link
                to="/"
                className="block w-full bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
