import React, { useState, useEffect } from "react";
import AddVehicleModal from "../component/modal/add-vechile-modal";
import { getVechile, POST_BIKE_URL } from "../services/vechile.api";
import { getVechileResponse } from "../services/vechile.type";
import VehicleTable from "../component/dashboard/VechileTable";

const Vehicle: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vechiles, setVechiles] = useState<getVechileResponse[]>([]);
  const itemsPerPage = 50;
  const totalItems = 2128;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestBody: Record<string, string> = {};
    formData.forEach((value, key) => {
      requestBody[key] = value.toString();
    });
    const jsonBody = JSON.stringify(requestBody);
    // console.log(jsonBody);

    try {
      const response = await fetch(POST_BIKE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonBody,
      });

      if (!response.ok) {
        throw new Error("Failed to add Bike");
      }

      fetchVechiles();
    } catch (error) {
      console.error("Failed to add Vechile:", error);
      alert("Failed to add Vechile. Please try again.");
    }
  };

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < totalItems) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchVechiles = async () => {
    try {
      const data = await getVechile();
      //@ts-ignore
      setVechiles(data.data);
    } catch (error) {
      console.error("Failed to fetch vechiles:", error);
    }
  };

  useEffect(() => {
    fetchVechiles();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-foreground p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Bikes</h1>
        <div className="flex space-x-2">
          <button
            onClick={openModal}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-slate-100"
          >
            + Add Bike
          </button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-slate-100 ">
            Import Bikes
          </button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
            ...
          </button>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by Bike ID"
          className="bg-input text-foreground px-4 py-2 rounded-lg w-full max-w-md border border-border focus:ring-primary focus:border-primary"
        />
        <input
          type="text"
          placeholder="Search by Brand"
          className="bg-input text-foreground px-4 py-2 rounded-lg w-full max-w-md border border-border focus:ring-primary focus:border-primary"
        />
        <select className="bg-white text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
          <option value="model">Model</option>
        </select>
        <select className="bg-input text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
          <option value="registrationNumber">Registration Number</option>
        </select>
      </div>
      <VehicleTable vehicles={vechiles} setVechile={setVechiles} />
      <div className="mt-4 text-foreground">
        Showing {Math.min(itemsPerPage * currentPage, totalItems)} of{" "}
        {totalItems}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= totalItems}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80"
        >
          Next
        </button>
      </div>
      {isModalOpen && (
        <AddVehicleModal
          openAddPopup={openModal}
          closePopup={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Vehicle;
