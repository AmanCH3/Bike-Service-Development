import React, { useState } from "react";

interface AddVehicleModalProps {
  openAddPopup: () => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({ openAddPopup }) => {
  const [customerId, setCustomerId] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [registrationNumber, setRegistrationNumber] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ customerId, brand, model, registrationNumber });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Add Vehicle</h1>
          <button onClick={openAddPopup} className="text-xl font-bold">
            X
          </button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="customerId"
                className="block text-sm font-medium text-muted-foreground"
              >
                Customer ID *
              </label>
              <input
                type="number"
                id="customerId"
                name="customerId"
                value={customerId}
                onChange={(e) => setCustomerId(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-muted-foreground"
              >
                Brand *
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="model"
                className="block text-sm font-medium text-muted-foreground"
              >
                Model *
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="registrationNumber"
                className="block text-sm font-medium text-muted-foreground"
              >
                Registration Number *
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModal;
