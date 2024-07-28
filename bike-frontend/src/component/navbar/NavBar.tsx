import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import { Link as ScrollLink } from "react-scroll";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full h-[90px] bg-white px-6 shadow-md flex justify-between items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-[120px] h-[60px] sm:w-[160px] sm:h-[80px]"
      />

      <ul className="hidden sm:flex gap-6 md:gap-10">
        {["Home", "About", "Contact", "Reviews"].map((item) => (
          <li key={item}>
            <ScrollLink
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="capitalize text-gray-800 text-[15px] sm:text-[19px] font-semibold hover:text-gray-600 cursor-pointer"
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />

        <button
          onClick={handleLoginClick}
          className="bg-gray-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-gray-700 text-xs sm:text-sm"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
