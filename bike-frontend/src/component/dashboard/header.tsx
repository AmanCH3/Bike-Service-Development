import React from "react";
import { BellIcon, UserIcon } from "@heroicons/react/16/solid";

interface HeaderProps {
  onAddOrder: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddOrder }) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-foreground">Admin</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={onAddOrder}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          New Order
        </button>
        <div className="flex items-center space-x-2">
          <BellIcon className="text-xl" />
        </div>
        <div className="flex items-center space-x-2">
          <UserIcon className="text-l size-10" />
          <div>
            <p className="text-foreground">Aman Cad</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
