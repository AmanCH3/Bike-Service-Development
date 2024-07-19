import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../component/dashboard/Sidebar";

const RootLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        setIsLoading(true);
        const session = await localStorage.getItem("session");
        setIsAuthenticated(session ? true : false);

        if (!session) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) {
    return (
      <div className="flex h-screen font-sans m-3">
        <Sidebar />

        <Outlet />
      </div>
    );
  }
};

export default RootLayout;
