import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  // const listStyle = "text-gray-800 hover:text-gray-600";

  return (
    <nav className="w-full h-[90px] bg-white py-4 px-6 shadow-md flex justify-between items-center mb-10">
      <img src={logo} alt="Logo " className="w-[160px] h-[80px]" />

      {/* ul>li*4>a */}
      <ul className="flex gap-10">
        {["Home", "about", "contact", "reviews"].map((item) => (
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

      <Link to={"/Login"}>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Get Started
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
