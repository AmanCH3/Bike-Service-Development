import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen font-sans m-3">
      <Sidebar />

      <Outlet />
    </div>
  );
}

export default Dashboard;
