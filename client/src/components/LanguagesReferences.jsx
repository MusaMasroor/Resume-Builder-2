import React from "react";
import { Link } from "react-router-dom";
import { useResume } from "../ResumeContext";

const LanguagesReferences = () => {
  const { resumeContent, setResumeContent } = useResume();
  const handleResumeInputs = (e) => {
    const { name, value } = e.target;
    setResumeContent({ ...resumeContent, [name]: value });
  };
  return (
    <div className=" dark:bg-gray-900 min-h-screen">
      <section className=" py-16  flex justify-center items-center">
        <div className=" px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Languages
          </h2>

          <form action="#">
            <div className="space-y-3">
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="language1"
                value={resumeContent.language1}
                onChange={handleResumeInputs}
                type="text"
              />
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="language2"
                value={resumeContent.language2}
                onChange={handleResumeInputs}
                type="text"
              />
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="language3"
                value={resumeContent.language3}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>

            <h2 className="mb-4 my-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              References
            </h2>

            <form action="#">
              <div className="space-y-3">
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="reference1"
                  value={resumeContent.reference1}
                  onChange={handleResumeInputs}
                  type="text"
                />
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="reference2"
                  value={resumeContent.reference2}
                  onChange={handleResumeInputs}
                  type="text"
                />
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="reference3"
                  value={resumeContent.reference3}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
            </form>
          </form>
          <Link to="/education">
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
export default LanguagesReferences;
