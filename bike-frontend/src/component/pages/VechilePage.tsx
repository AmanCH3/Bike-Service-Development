import React, { useState, useEffect } from "react";
import AddVehicleModal from "../modal/add-vechile-modal";
import { getVechile } from "../../services/vechile.api";
import { getVechileResponse } from "../../services/vechile.type";

const Vehicle: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vechiles, setVechiles] = useState<getVechileResponse[]>([]);
  const itemsPerPage = 50;
  const totalItems = 2128; // Example total items, should ideally be dynamic

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
      setVechiles(data.data); // Update to match the correct data structure
    } catch (error) {
      console.error("Failed to fetch vechiles:", error);
    }
  };

  useEffect(() => {
    fetchVechiles();
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Bikes</h1>
        <div className="flex space-x-2">
          <button
            onClick={openModal}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80"
          >
            + Add Bike
          </button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
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
        <select className="bg-input text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
          <option value="model">Model</option>
        </select>
        <select className="bg-input text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
          <option value="registrationNumber">Registration Number</option>
        </select>
      </div>
      <div className="bg-card p-4 rounded-lg shadow w-full">
        <table className="min-w-full bg-white border border-border">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Bike ID</th>
              <th className="px-4 py-2 text-left">Brand</th>
              <th className="px-4 py-2 text-left">Model</th>
              <th className="px-4 py-2 text-left">Registration Number</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vechiles.map((vechile) => (
              <tr key={vechile.bikeId} className="border-b hover:bg-input/20">
                <td className="px-4 py-2">
                  <input type="checkbox" className="mr-2" />
                  {vechile.bikeId}
                </td>
                <td className="px-4 py-2">{vechile.brand}</td>
                <td className="px-4 py-2">{vechile.modal}</td>
                <td className="px-4 py-2">{vechile.registrationNumber}</td>
                <td className="px-4 py-2">
                  <button className="bg-secondary text-secondary-foreground px-2 py-1 rounded-lg hover:bg-secondary/80">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
      {isModalOpen && <AddVehicleModal openAddPopup={closeModal} />}
    </div>
  );
};

export default Vehicle;
