import React from "react";
import dashboard from "../assets/dashboard.png";
import order from "../assets/order.png";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-border">
      <div className="p-4">
        <h1 className="text-xl font-bold text-primary">Sales Insight</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded size-10">
            <img alt="dashboard-icon" src={dashboard} className="mr-2" />
            Dashboard
          </li>
          <li className="flex items-center p-2 text-primary bg-primary-foreground rounded size-10">
            <img alt="order-icon" src={order} className="mr-2" />
            Order
          </li>
          <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
            <img
              alt="vehicle-icon"
              src="https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg"
              className="mr-2 size-7"
            />
            Vehicle
          </li>
          <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
            <img
              alt="service-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPBeEdTkyeK0usr_dTXr-6x62M3GcJy7KFA&s"
              className="mr-2 size-7"
            />
            Service
          </li>
          <li className="flex items-center p-2 text-muted-foreground hover:bg-muted rounded">
            <img
              alt="inbox-icon"
              src="https://cdn0.iconfinder.com/data/icons/glyph-2-ui-part-1-of-4/100/pack02-05-512.png"
              className="my-20 size-7"
            />
            Log out
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
