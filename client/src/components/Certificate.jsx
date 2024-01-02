import React from "react";
import { Link } from "react-router-dom";
import { useResume } from "../ResumeContext";

const Certificate = () => {
  const { resumeContent, setResumeContent } = useResume();
  const handleResumeInputs = (e) => {
    const { name, value } = e.target;
    setResumeContent({ ...resumeContent, [name]: value });
  };
  return (
    <div className="dark:bg-gray-900">
      <section className="py-8 flex justify-center items-center ">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Certification 1
          </h2>
          <form className=" space-y-3">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Certificate's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="certificateName1"
                value={resumeContent.certificateName1}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schoole / Department's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="schooleName1"
                value={resumeContent.schooleName1}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tell us about the department
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="aboutDepartment1"
                value={resumeContent.aboutDepartment1}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start Date
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="startDate7"
                value={resumeContent.startDate7}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End Date
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="endDate7"
                value={resumeContent.endDate7}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
          </form>
        </div>
      </section>

      <section className=" flex justify-center items-center ">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Certification 2
          </h2>
          <form className=" space-y-3">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Certificate's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="certificateName2"
                value={resumeContent.certificateName2}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Schoole / Department's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="schooleName2"
                value={resumeContent.schooleName2}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tell us about the department
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="aboutDepartment2"
                value={resumeContent.aboutDepartment2}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Start Date
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="startDate8"
                value={resumeContent.startDate8}
                onChange={handleResumeInputs}
                type="text"
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                End Date
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="endDate8"
                value={resumeContent.endDate8}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
          </form>
          <Link to="/resume-preview">
            <button
              type="submit"
              className="py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Next Page
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Certificate;
