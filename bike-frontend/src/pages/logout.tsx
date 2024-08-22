import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear();
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold">You have successfully logged out.</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Logout;
