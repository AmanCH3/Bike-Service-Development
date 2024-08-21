import React, { useEffect, useState } from "react";
import axios from "axios";
import profileeee from "../assets/profilee.png";
import { BASE_API_URL } from "../utils/api.constants";
import { GetRegisterRequestBody } from "../services/reigster.api";

const ProfileForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [profileData, setProfileData] = useState<GetRegisterRequestBody>({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("session");

    if (token) {
      axios
        .get<any>(`${BASE_API_URL}/customer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfileData(response.data.data[0]);
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

  const handleUpdateProfile = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      await axios.put(`${BASE_API_URL}/customer`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile data:", error);
      setError("Failed to update profile data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        onSubmit={handleUpdateProfile}
      >
        <h1 className="text-4xl font-bold text-black mb-8">Profile</h1>

        <div className="flex items-center justify-center mt-6">
          <div className="relative">
            <img
              src={profileeee}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover"
            />
            <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 8.16a3.588 3.588 0 00-.722.08 4.502 4.502 0 00-.502-2.79 3.585 3.585 0 00-3.048-1.934 3.587 3.587 0 00-2.464 1.058 3.597 3.597 0 00-.646 2.36c0 1.2.722 2.265 1.828 2.92a4.5 4.5 0 002.79.502 3.586 3.586 0 002.792-.502 3.587 3.587 0 001.058-2.464 3.585 3.585 0 00-1.194-2.798zm-5.1 3.926c-1.207 0-2.42.226-3.528.672a3.505 3.505 0 00-1.99 3.236v1.4c0 .4.322.72.72.72h12.84a.72.72 0 00.72-.72v-1.4a3.506 3.506 0 00-1.99-3.236 11.47 11.47 0 00-3.528-.672H11.62zm-4.56 6.408c-1.248 0-2.41.72-3.02 1.8-.276.44.088.92.6.92h12.84c.512 0 .876-.48.6-.92a3.585 3.585 0 00-3.02-1.8h-8zm4.56-13.984a2.088 2.088 0 110 4.176 2.088 2.088 0 010-4.176z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="User Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              name="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
              type="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-mail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact number
            </label>
            <input
              name="contactNumber"
              value={profileData.contactNumber}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  contactNumber: e.target.value,
                })
              }
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              name="address"
              value={profileData.address}
              onChange={(e) =>
                setProfileData({ ...profileData, address: e.target.value })
              }
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out hover:shadow-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
