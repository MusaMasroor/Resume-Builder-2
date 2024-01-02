import React from "react";
import Logo from "./Logo.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../ResumeContext";
import Notification from "./Notification.jsx";
const Login = () => {
  const navigate = useNavigate();
  const { resumeContent, setResumeContent, showNotification } = useResume();
  const handleResumeInputs = (e) => {
    const { name, value } = e.target;
    setResumeContent({ ...resumeContent, [name]: value });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = resumeContent;
    const res = await fetch(
      "https://resume-builder-backend-lgtx.onrender.com/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    if (res.status === 400) {
      const errorData = await res.json();
      window.alert(errorData.message);
      navigate("/signup");
    } else if (res.status === 200) {
      const responseData = await res.json();
      console.log(responseData.message);
      navigate("/");
    } else {
      console.log("Unexpected response status:", res.status);
    }
  };
  return (
    <div>
      {showNotification && (
        <Notification
          title="Important Message !"
          message="You can login with the default user or create your own account!"
          buttonText="OK"
        />
      )}
      <section className=" dark:bg-gray-900 min-h-screen">
        <div className=" flex relative top-3 right-2 items-center justify-center">
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log In
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={loginUser}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={resumeContent.email}
                    onChange={handleResumeInputs}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={resumeContent.password}
                    onChange={handleResumeInputs}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log In
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
