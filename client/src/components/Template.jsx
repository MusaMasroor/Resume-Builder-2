import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import TemplateImg from "../img/templateImg.png";
import { useResume } from "../ResumeContext";

const Template = () => {
  const { showAuth, setShowAuth } = useResume();
  const navigate = useNavigate();
  const callTemplate = async () => {
    try {
      const res = await fetch(
        "https://resume-builder-backend-lgtx.onrender.com/template",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (res.status === 200) {
        const responseData = await res.json();
        console.log(responseData);
        setShowAuth(true);
      } else if (res.status === 401) {
        const errorData = await res.json();
        setShowAuth(true);
        navigate("/login");
        window.alert(errorData.message);
      }
    } catch (error) {
      console.log(error);
      setShowAuth(true);
      navigate("/template");
    }
  };

  useEffect(() => {
    callTemplate();
  }, []);

  return (
    <div>
      <Navbar />
      {!showAuth ? (
        <div className="w-full min-h-screen dark:bg-gray-900"></div>
      ) : (
        <div>
          <div className="flex items-center justify-center min-h-screen space-x-4 dark:bg-gray-900">
            <div className="max-w-lg">
              <Link to="/personal-detail">
                <img
                  className="rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:delay-100"
                  src={TemplateImg}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
