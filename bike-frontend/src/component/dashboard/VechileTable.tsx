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

  return (
    <div className="bg-card p-4 rounded-lg shadow w-full">
      <table className="w-full text-left">
        <thead className="bg-muted text-muted-foreground">
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Bike ID</th>
            <th className="px-4 py-2 text-left">Brand</th>
            <th className="px-4 py-2 text-left">Modal</th>
            <th className="px-4 py-2 text-left">Registration Number</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.bikeId} className="border-b border-border">
              <td className="px-4 py-2">{vehicle.brand}</td>
              <td className="px-4 py-2">{vehicle.modal}</td>
              <td className="px-4 py-2">{vehicle.registrationNumber}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-lg hover:bg-secondary/80"
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
            modal: selectedVechile.modal,
            registrationNumber: selectedVechile.registrationNumber,
          }}
          updateVechile={updateVehicle}
        />
      )}
    </div>
  );
};

export default VehicleTable;
