import { React } from "react";
import { Link } from "react-router-dom";
import { useResume } from "../ResumeContext";
import UserProfile from "./UserProfile";
import Notification from "./Notification";

const PersonalDetail = () => {
  const { resumeContent, setResumeContent, showNotification } = useResume();

  const handleResumeInputs = (e) => {
    const { name, value } = e.target;
    setResumeContent({ ...resumeContent, [name]: value });
  };

  return (
    <div>
      {showNotification && (
        <Notification
          title="Important Message !"
          message="You can edit the input field information as per your requirement or click below to see the final result."
          buttonText="See Results"
          buttonLink="/resume-preview"
        />
      )}
      <section className="dark:bg-gray-900 py-8 min-h-screen flex justify-center items-center">
        <div className=" px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Personal Details
          </h2>

          <form action="#" className="space-y-3">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 font-bold text-md text-gray-900 dark:text-gray-300"
              >
                Select a photo
              </label>
              <UserProfile />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                id="firstName"
                placeholder="First name"
                name="firstName"
                value={resumeContent.firstName}
                onChange={handleResumeInputs}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                id="lastName"
                placeholder="Last name"
                name="lastName"
                value={resumeContent.lastName}
                onChange={handleResumeInputs}
              />
            </div>
            <div>
              <label
                htmlFor="occupation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Occupation
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="occupation"
                id="occupation"
                placeholder="occupation"
                name="occupation"
                value={resumeContent.occupation}
                onChange={handleResumeInputs}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="links"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Links
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                id="link1"
                placeholder="LinkedIn"
                name="link1"
                value={resumeContent.link1}
                onChange={handleResumeInputs}
              />
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                id="link2"
                placeholder="Gmail"
                name="link2"
                value={resumeContent.link2}
                onChange={handleResumeInputs}
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Location
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="location"
                id="location"
                placeholder="location"
                name="location"
                value={resumeContent.location}
                onChange={handleResumeInputs}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="phone"
                id="phone"
                placeholder="Phone number"
                name="phone"
                value={resumeContent.phone}
                onChange={handleResumeInputs}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Profesional Summary
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                rows="6"
                type="text"
                id="about"
                name="about"
                value={resumeContent.about}
                onChange={handleResumeInputs}
              ></textarea>
            </div>
            <Link to="/skills">
              <button
                type="submit"
                className="py-3 px-5 my-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Next Page
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PersonalDetail;
