import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Booking from "./pages/booking";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./index.css";
import Service from "./pages/ServicePage";
import Vehicles from "./pages/VechilePage";
import FormsPage from "./pages/setting";
import RootLayout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import AddBike from "./pages/AddBike";
import BookServiceForm from "./pages/AddBike";
import Logout from "./pages/logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "vehicle",
        element: <Vehicles />,
      },
      {
        path: "order",
        element: <Booking />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "setting",
        element: <FormsPage />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/book",
    element: <AddBike />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
