import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="w-[160px] h-[80px]" />
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-xl text-gray-600 hover:text-gray-900" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-gray-600 hover:text-gray-900" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-2">Use cases</h5>
              <ul>
                <li>
                  <button
                    onClick={() => navigateTo("/uidesign")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    UI design
                  </button>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h5 className="font-bold mb-2">Explore</h5>
              <ul>
                <li>
                  <button
                    onClick={() => navigateTo("/design")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("/prototyping")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Prototyping
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2">Resources</h5>
              <ul>
                <li>
                  <button
                    onClick={() => navigateTo("/blog")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
