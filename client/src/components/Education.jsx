import React from "react";
import { Link } from "react-router-dom";
import { useResume } from "../ResumeContext";

const Education = () => {
  const { resumeContent, setResumeContent } = useResume();
  const handleResumeInputs = (e) => {
    const { name, value } = e.target;
    setResumeContent({ ...resumeContent, [name]: value });
  };
  return (
    <div className="dark:bg-gray-900">
      <section className="py-8">
        <div className=" px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Education 1
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Tell us about any colleges, vocational programs, or training courses
            you took. Even if you didn’t finish, it’s important to list them.
          </p>
          <form action="#" className="space-y-3">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Degree
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="degree1"
                value={resumeContent.degree1}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                University's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="university1"
                value={resumeContent.university1}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label
                  for="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Start Date
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="startDate1"
                  value={resumeContent.startDate1}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
              <div>
                <label
                  for="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  End Date
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="endDate1"
                  value={resumeContent.endDate1}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div>
                <label
                  for="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City / State
                </label>

                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="city1"
                  value={resumeContent.city1}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
              <div>
                <label
                  for="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Country
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="country1"
                  value={resumeContent.country1}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className=" px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Education 2
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Elevate the sophistication of your resume with the addition of
            another degree, showcasing a heightened level of professionalism.
          </p>
          <form action="#" className="space-y-3">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Degree
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="degree2"
                value={resumeContent.degree2}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                University's Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                name="university2"
                value={resumeContent.university2}
                onChange={handleResumeInputs}
                type="text"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label
                  for="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Start Date
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="startDate2"
                  value={resumeContent.startDate2}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
              <div>
                <label
                  for="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  End Date
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="endDate2"
                  value={resumeContent.endDate2}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div>
                <label
                  for="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City / State
                </label>

                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="city2"
                  value={resumeContent.city2}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
              <div>
                <label
                  for="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Country
                </label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  name="country2"
                  value={resumeContent.country2}
                  onChange={handleResumeInputs}
                  type="text"
                />
              </div>
            </div>
          </form>
          <Link to="/experience">
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
export default Education;
