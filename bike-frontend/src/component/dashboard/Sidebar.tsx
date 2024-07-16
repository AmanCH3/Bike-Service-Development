import { Link, useLocation, } from "react-router-dom";
import { navItems } from "../../utils/constants";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

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
                item.path == pathname &&
                  "w-full bg-stone-400 text-white py-1.5 px-3 rounded-md"
              )}
            >
              <img
                alt={`${item.name}-icon`}
                src={item.icon}
                className="mr-6 size-7"
              />
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
