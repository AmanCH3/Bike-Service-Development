// BikeManagement.tsx
import React, { useState, useEffect } from "react";
import {
  createVechileRequestBody,
  getVechileResponse,
} from "../services/vechile.type";
import { createVechile, getVechile } from "../services/vechile.api";
import NavBar from "../component/navbar/NavBar";
import Vehicle from "./VechilePage";

const BikeManagement: React.FC = () => {
  const [bikes, setBikes] = useState<getVechileResponse[]>([]);
  const [formData, setFormData] = useState<createVechileRequestBody>({
    brand: "",
    model: "",
    registrationNumber: "",
  });
  const [message, setMessage] = useState<string>("");

  const fetchBikes = async () => {
    try {
      const data = await getVechile();
      //@ts-ignore
      setBikes(data.data);
    } catch (error) {
      console.error("Failed to fetch vechiles:", error);
      setMessage("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createVechile(formData);
      setMessage("Bike added successfully.");
      fetchBikes(); // Refresh the bike list
      console.log(fetchBikes);
      setFormData({
        customerID: 0, // Reset to the actual customerId
        brand: "",
        model: "",
        registrationNumber: "",
      });
    } catch (error) {
      console.error("Failed to add bike:", error);
      setMessage("Failed to add bike. Please try again.");
    }
  };

  return (
    <div className="w-max[full]">
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Bike Management</h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="brand">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="model">
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="registrationNumber"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Bike
          </button>
        </form>

        {message && <p className="text-center text-red-500 mb-4">{message}</p>}

        <h2 className="text-xl font-bold mb-4">All Bikes</h2>
        <ul className="space-y-2">
          {bikes.map((bike) => (
            <li
              key={bike.bikeId}
              className="p-4 border border-gray-300 rounded-lg"
            >
              <h3 className="text-lg font-semibold">
                {bike.brand} {bike.model}
              </h3>
              <p>Registration Number: {bike.registrationNumber}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BikeManagement;
