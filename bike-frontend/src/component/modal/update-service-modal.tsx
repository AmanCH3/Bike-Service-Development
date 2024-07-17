import React, { useState } from "react";

interface UpdateServiceModalProps {
  openUpdatePopup: () => void;

  initialData: {
    serviceId: number;
    serviceName: String;
    serviceDescription: String;
    cost: number;
  };
  updateService: (updatedServiceData: {
    serviceId: number;
    serviceName: String;
    serviceDescription: String;
    cost: number;
  }) => void;
}

const UpdateServiceModal: React.FC<UpdateServiceModalProps> = ({
  openUpdatePopup,
  initialData,
  updateService,
}) => {
  const [serviceId, setServiceId] = useState<number>(initialData.serviceId);
  const [serviceName, setServiceName] = useState(initialData.serviceName);
  const [serviceDescription, setServiceDescription] = useState(
    initialData.serviceDescription
  );
  const [cost, setCost] = useState<number>(initialData.cost);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Call updateService with updated data
    updateService({ serviceId, serviceName, serviceDescription, cost });

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
                htmlFor="serviceId"
                className="block text-sm font-medium text-muted-foreground"
              >
                Service ID *
              </label>
              <input
                type="number"
                id="serviceId"
                name="serviceId"
                value={serviceId}
                onChange={(e) => setServiceId(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-muted-foreground"
              >
                Service Name *
              </label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="serviceDescription"
                className="block text-sm font-medium text-muted-foreground"
              >
                Description *
              </label>
              <input
                type="text"
                id="serviceDescription"
                name="serviceDescription"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cost"
                className="block text-sm font-medium text-muted-foreground"
              >
                Cost *
              </label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
              >
                Update Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
