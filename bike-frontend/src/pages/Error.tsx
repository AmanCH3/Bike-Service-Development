import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/Error404.jpg";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img src={errorImage} alt="404 Error" className="w-64 h-64 mx-auto" />
        <h1 className="text-6xl font-bold text-gray-800 mt-8">404</h1>
        <p className="text-2xl text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-600 mt-2">
          It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-8 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
