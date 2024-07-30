import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { navItems } from "../../utils/constants";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Perform logout logic here, such as clearing tokens or user data
      navigate("/"); // Navigate to the landing page
      alert("You have successfully logged out.");
    }
  };

  return (
    <div className="w-64 bg-white border-r border-border">
      <div className="p-4">
        <h1 className="text-xl font-bold text-primary">Sales Insight</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={twMerge(
                "flex items-center p-2 rounded size-10",
                item.activeClass,
                item.path === pathname &&
                  "w-full bg-gray-50 text-black py-1.5 px-3 rounded-md"
              )}
            >
              <img
                alt={`${item.name}-icon`}
                src={item.icon}
                className="mr-6 size-7"
              />
              {item.path === "/logout" ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 rounded size-10"
                >
                  {item.name}
                </button>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
