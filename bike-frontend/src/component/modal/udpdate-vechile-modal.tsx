import React, { useState } from "react";

interface UpdateVechileModalProps {
  openUpdatePopup: () => void;

  initialData: {
    bikeID: number;
    brand: String;
    modal: String;
    registrationNumber: String;
  };
  updateVechile: (updatedVechileData: {
    bikeId: number;
    brand: String;
    modal: String;
    registrationNumber: String;
  }) => void;
}

const UpdateVechileModal: React.FC<UpdateVechileModalProps> = ({
  openUpdatePopup,
  initialData,
  updateVechile,
}) => {
  const [bikeId, setBikeId] = useState<number>(initialData.bikeID);
  const [brand, setBrand] = useState(initialData.brand);
  const [modal, setModal] = useState(initialData.modal);
  const [registrationNumber, setRegistrationNumber] = useState<String>(
    initialData.registrationNumber
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call updateService with updated data
    updateVechile({ bikeId, brand, modal, registrationNumber });

    // Optionally, you may want to close the modal or handle UI feedback here
    // For simplicity, assuming closing modal after submission
    openUpdatePopup();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Update Service</h1>
          <button onClick={openUpdatePopup} className="text-xl font-bold">
            X
          </button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="bike Id"
                className="block text-sm font-medium text-muted-foreground"
              >
                Bike ID *
              </label>
              <input
                type="number"
                id="BikeID"
                name="BiekID"
                value={bikeId}
                onChange={(e) => setBikeId(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-muted-foreground"
              >
                Brand *
              </label>
              <input
                type="text"
                id="Brand"
                name="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="serviceDescription"
                className="block text-sm font-medium text-muted-foreground"
              >
                Modal *
              </label>
              <input
                type="text"
                id="Modal"
                name="Modal"
                value={modal}
                onChange={(e) => setModal(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-muted-foreground"
              >
                Registration number *
              </label>
              <input
                type="number"
                id="cost"
                name="cost"
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
                Update Vechile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVechileModal;
