import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { twMerge } from "tailwind-merge";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "sticky top-0 container w-full h-[90px] px-6 py-2 z-[999] mx-auto transition-all duration-300 ease-in-out",
        isScrolled &&
          "translate-y-8 rounded-lg outline-0 border border-gray-200 py-1.5 pr-6 pl-4 shadow-md !bg-gray-200 lg:!w-[940px] 2xl:!w-[1040px]"
      )}
    >
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[120px] h-[60px] sm:w-[160px] sm:h-[80px]"
        />

        <ul className="hidden sm:flex gap-6 md:gap-10">
          {["Home", "About", "Contact", "Reviews"].map((item) => (
            <li key={item}>
              {/* <ScrollLink
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="capitalize text-gray-800 text-[15px] sm:text-[19px] font-semibold hover:text-gray-600 cursor-pointer"
            >
              {item}
            </ScrollLink> */}

              <a
                href={`#${item.toLowerCase()}`}
                className="capitalize text-gray-800 text-[15px] sm:text-[19px] font-semibold hover:text-gray-600 cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />

          <Link
            to={"/login"}
            className="bg-gray-800 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-gray-700 text-xs sm:text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
