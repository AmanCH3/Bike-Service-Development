import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Booking from "./component/pages/booking";
import LoginPage from "./component/pages/LoginPage";
import RegisterPage from "./component/pages/RegisterPage";
import Vehicle from "./component/pages/VechilePage";
import "./index.css";
import Dashboard from "./component/pages/dashboard";
import Service from "./component/pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "vehicle",
        element: <Vehicle />,
      },
      {
        path: "order",
        element: <Booking />,
      },
      {
        path: "service",
        element: <Service />,
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
