import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-[90px] bg-white  px-6 shadow-md flex justify-between items-center ">
      <img src={logo} alt="Logo" className="w-[160px] h-[80px]" />

      <ul className="flex gap-10">
        {["Home", "About", "Contact", "Reviews"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="capitalize text-gray-800 text-[19px] font-semibold hover:text-gray-600"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link to="/login">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
