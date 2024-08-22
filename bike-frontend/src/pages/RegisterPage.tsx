import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { BASE_API_URL } from "../utils/api.constants";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestBody: Record<string, string> = {};
    formData.forEach(function (value, key) {
      requestBody[key] = value.toString();
    });
    const jsonBody = JSON.stringify(requestBody);
    console.log(jsonBody);

    try {
      // Send registration request to backend
      const response = await fetch(`${BASE_API_URL}/customer/details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonBody,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Redirect to Landing page page after successful registration
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-zinc-100 flex flex-col items-center py-10">
        <header className="w-full bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="h-10 w-15 accoun" />
              <h1 className="text-xl font-semibold text-zinc-900">
                User Registration
              </h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login
              </Link>
              <Link
                to="/register"
                className="text-zinc-600 hover:text-zinc-900"
              >
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
            <span className="text-zinc-600">Home / Registration</span>
          </div>
        </div>

        <main className="flex-grow w-full max-w-4xl bg-white shadow-md rounded-lg mt-8 p-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
            Registration
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                User Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700"
              >
                User Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-zinc-700"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-zinc-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-zinc-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="w-full md:w-96 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default RegisterPage;
