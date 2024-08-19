import React, { useState } from "react";
import { getVechileResponse } from "../../services/vechile.type";
import { BASE_URL } from "../../services/vechile.api";
import UpdateVechileModal from "../modal/udpdate-vechile-modal";

interface VehicleTableProps {
  vehicles: getVechileResponse[];
  setVechile: React.Dispatch<React.SetStateAction<getVechileResponse[]>>;
}

const VehicleTable: React.FC<VehicleTableProps> = ({
  vehicles,
  setVechile,
}) => {
  const [selectedVechile, setSelectedVechile] =
    useState<getVechileResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openUpdateModal = (vehicle: getVechileResponse) => {
    setSelectedVechile(vehicle);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedVechile(null);
    setIsModalOpen(false);
  };

  const updateVehicle = async (updatedVechile: {
    bikeId: number;
    brand: String;
    modal: String;
    registrationNumber: String;
  }) => {
    console.log("Updating vechile", updatedVechile);

    try {
      const response = await fetch(`${BASE_URL}/${updatedVechile.bikeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVechile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedVehicle = await response.json();
      setVechile((prevVechile) =>
        prevVechile.map((vehicle) =>
          vehicle.bikeId === updatedVechile.bikeId ? updatedVehicle : vehicle
        )
      );
      closeUpdateModal();
    } catch (error) {
      console.error("Failed to update vehicle:", error);
      alert("Failed to update vehicle. Please try again.");
    }
  };
  console.log("randi ko choro vechical", vehicles);

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-100 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-100">
                <thead className="bg-gray-50 bg-cyan-500">
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Bike ID</th>
                    <th className="px-4 py-2 text-left">Brand</th>
                    <th className="px-4 py-2 text-left">Model</th>
                    <th className="px-4 py-2 text-left">Registration Number</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 bg-gray-400">
                  {vehicles?.map((vehicle) => (
                    <tr key={vehicle.bikeId} className="border-b border-border">
                      <td className="px-4 py-2 text-sm font-medium text-gray-800 dark:text-black whitespace-nowrap">
                        {vehicle.bikeId}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-800  dark:text-black whitespace-nowrap">
                        {vehicle.brand}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-800 dark:text-black whitespace-nowrap">
                        {vehicle.model}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                        {vehicle.registrationNumber}
                      </td>
                      <td className="px-4 py-2 text-sm whitespace-nowrap">
                        <button
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-lg hover:bg-secondary/80 to-gray-400"
                          onClick={() => openUpdateModal(vehicle)}
                        >
                          Update
                        </button>

                        <button className="text-destructive hover:text-destructive/80 bg-transparent text-red-700 mx-5">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isModalOpen && selectedVechile && (
                <UpdateVechileModal
                  openUpdatePopup={closeUpdateModal}
                  initialData={{
                    bikeID: selectedVechile.bikeId,
                    brand: selectedVechile.brand,
                    model: selectedVechile.model,
                    registrationNumber: selectedVechile.registrationNumber,
                  }}
                  updateVechile={updateVehicle}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;
