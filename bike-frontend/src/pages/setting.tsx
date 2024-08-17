// src/pages/FormsPage.tsx
import React, { useEffect, useState } from "react";
import { GetRegisterRequestBody } from "../services/reigster.api";
import axios from "axios";
import { BASE_API_URL } from "../utils/api.constants";
import { getVechileResponse } from "../services/vechile.type";

const FormsPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [bikeData, setBikeData] = useState<getVechileResponse>({
    bikeId: 0,
    brand: "",
    model: "",
    registrationNumber: "",
  });
  const [profileData, setProfileData] = useState<GetRegisterRequestBody>({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios
        .get<GetRegisterRequestBody>(`${BASE_API_URL}/customer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfileData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setError("Failed to fetch profile data.");
          setLoading(false);
        });
    } else {
      console.error("No token found. Please log in.");
      setError("No token found. Please log in.");
      setLoading(false);
    }
  }, []);

  console.log(profileData);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-3xl text-black pb-6">Forms</h1>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-1/2 px-2 mb-6">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Contact Form
            </p>
            <div className="leading-loose bg-white rounded shadow-xl p-6">
              <form>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600" htmlFor="name">
                    Brand
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-background rounded"
                    id="name"
                    name="name"
                    type="text"
                    value={profileData.name}
                    required
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Modal
                  </label>
                  <input
                    className="w-full px-5 py-4 text-gray-700 bg-background rounded"
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="message"
                  >
                    Registration number
                  </label>
                  <textarea
                    className="w-full px-5 py-2 text-gray-700 border-spacing-1 bg-background rounded"
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Your inquiry.."
                    aria-label="Message"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-6">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Checkout Form
            </p>
            <div className="leading-loose bg-white rounded shadow-xl p-6">
              <form>
                <p className="text-lg text-gray-800 font-medium pb-4">
                  Customer Information
                </p>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600 "
                    htmlFor="cus_name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700  bg-background rounded "
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5 py-4 text-gray-700  bg-background rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  bg-background rounded"
                    id="cus_password"
                    name="cus_password"
                    type="text"
                    required
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="contact number"
                  >
                    Contact number
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  bg-background rounded"
                    id="cus_number"
                    name="cus_number"
                    type="text"
                    required
                    placeholder="contact number"
                    aria-label="Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700  bg-background rounded"
                    id="cus_address"
                    name="cus_address"
                    type="text"
                    required
                    placeholder="Street"
                    aria-label="Address"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
