import React, { useState } from "react";

interface AddServiceModalProps {
  openAddPopup: () => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    serviceData: {
      serviceID: number;
      serviceName: string;
      serviceDescription: string;
      cost: number;
    }
  ) => void;
}

const AddServiceModal: React.FC<AddServiceModalProps> = ({
  openAddPopup,
  handleSubmit,
}) => {
  const [serviceID, setServiceId] = useState<number>(0);
  const [serviceName, setServiceName] = useState<string>("");
  const [serviceDescription, setServiceDescription] = useState<string>("");
  const [cost, setCost] = useState<number>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e, { serviceID, serviceName, serviceDescription, cost });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Add Service</h1>
          <button onClick={openAddPopup} className="text-xl font-bold">
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
                value={serviceID}
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
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServiceModal;
