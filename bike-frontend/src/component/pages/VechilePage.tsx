import React, { useState } from "react";
import AddVehicleModal from "../modal/add-vechile-modal"; // Import the AddVehicleModal component

const Vehicle: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close
  const itemsPerPage = 50;
  const totalItems = 2128;

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

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Bikes</h1>
        <div className="flex space-x-2">
          <button
            onClick={openModal} // Open modal on button click
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Bike
          </button>
          <button className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-300">
            Import Bikes
          </button>
          <button className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-300">
            ...
          </button>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by Customer ID"
          className="border border-zinc-300 rounded px-4 py-2 w-1/4"
        />
        <input
          type="text"
          placeholder="Search by Brand"
          className="border border-zinc-300 rounded px-4 py-2 w-1/4"
        />
        <select className="border border-zinc-300 rounded px-4 py-2">
          <option>Model</option>
        </select>
        <select className="border border-zinc-300 rounded px-4 py-2">
          <option>Registration Number</option>
        </select>
      </div>
      <table className="min-w-full bg-white border border-zinc-300">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Customer ID</th>
            <th className="px-4 py-2 text-left">Brand</th>
            <th className="px-4 py-2 text-left">Model</th>
            <th className="px-4 py-2 text-left">Registration Number</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-zinc-100">
            <td className="px-4 py-2">
              <input type="checkbox" className="mr-2" />
              12345
            </td>
            <td className="px-4 py-2">Yamaha</td>
            <td className="px-4 py-2">YZF-R1</td>
            <td className="px-4 py-2">AB-1234</td>
            <td className="px-4 py-2">
              <button className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded hover:bg-zinc-300">
                ...
              </button>
            </td>
          </tr>
          <tr className="border-b hover:bg-zinc-100">
            <td className="px-4 py-2">
              <input type="checkbox" className="mr-2" />
              67890
            </td>
            <td className="px-4 py-2">Honda</td>
            <td className="px-4 py-2">CBR600RR</td>
            <td className="px-4 py-2">CD-5678</td>
            <td className="px-4 py-2">
              <button className="bg-zinc-200 text-zinc-700 px-2 py-1 rounded hover:bg-zinc-300">
                ...
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <div className="mt-4 text-zinc-600">
        Showing {Math.min(itemsPerPage * currentPage, totalItems)} of{" "}
        {totalItems}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-300"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= totalItems}
          className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-300"
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <AddVehicleModal openAddPopup={closeModal} /> // Render modal if isModalOpen is true
      )}
    </div>
  );
};

export default Vehicle;
