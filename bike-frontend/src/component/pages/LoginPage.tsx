import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  CreateDetailsRequestBody,
  ApiResponse,
} from "../../services/auth.type";
import { createDetails } from "../../services/auth.api";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (
    values: CreateDetailsRequestBody
  ): Promise<ApiResponse> => {
    try {
      console.log("Sending login request with values:", values);
      const response = await createDetails(values);
      console.log("Received login response:", response);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error during authentication:", error);
        console.error("Error code:", error.code);
        console.error("Error response data:", error.response?.data);
        console.error("Error response status:", error.response?.status);
        console.error("Error response headers:", error.response?.headers);
      } else {
        console.error("Unexpected error during authentication:", error);
      }
      throw new Error("Authentication failed");
    }
  };

  const onSubmit = async (
    values: CreateDetailsRequestBody,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await handleLogin(values);
      const { token, UserId, UserType } = response.data;

      localStorage.setItem("jwtToken", token); // Save JWT token
      localStorage.setItem("roles", JSON.stringify(UserType)); // Save roles
      localStorage.setItem("userID", UserId); // Save userID

      // Role-based redirection
      if (UserType.includes("ROLE_ADMIN") || UserType === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
    resetForm(); // Reset the form after submission
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values: CreateDetailsRequestBody = {
      email: (form.elements.namedItem("userEmail") as HTMLInputElement).value,
      password: (form.elements.namedItem("userPassword") as HTMLInputElement)
        .value,
    };
    onSubmit(values, { resetForm: () => form.reset() });
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center py-10">
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 person">
            <h1 className="text-xl font-semibold text-zinc-900">User Login</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
            <Link to="/register" className="text-zinc-600 hover:text-zinc-900">
              Registration
            </Link>
            <button className="text-zinc-600 hover:text-zinc-900">
              <img src="https://placehold.co/24x24?text=🔍" alt="search" />
            </button>
          </nav>
        </div>
      </header>
      <div className="w-full bg-zinc-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-zinc-600">Home / Login</span>
        </div>
      </div>
      <main className="flex-grow w-full max-w-4xl bg-white shadow-md rounded-lg mt-8 p-8">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Login</h2>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="userEmail"
              className="block text-sm font-medium text-zinc-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="userPassword"
              className="block text-sm font-medium text-zinc-700"
            >
              User Password
            </label>
            <input
              type="password"
              id="userPassword"
              className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-blue-600 border border-zinc-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-zinc-700"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>
          <center>
            <button
              type="submit"
              className="w-96 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300 ease-in-out justify-center items-center"
            >
              Login
            </button>
          </center>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
