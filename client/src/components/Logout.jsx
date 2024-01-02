import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      navigate("/login");
      if (res.status === 200) {
        alert("You have been logged out");
      }
    });
  });
  return <div></div>;
};

export default Logout;
