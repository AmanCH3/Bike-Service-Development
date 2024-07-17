import React, { useState } from "react";
import { GetServiceResponse } from "../../services/service.type";
import UpdateServiceModal from "../modal/update-service-modal";

interface ServiceTableProps {
  services: GetServiceResponse[];
}

const ServiceTable: React.FC<ServiceTableProps> = ({ services }) => {
  const [selectedService, setSelectedService] =
    useState<GetServiceResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openUpdateModal = (service: GetServiceResponse) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };
  const updateService = (updatedServiceData: {
    serviceId: number;
    serviceName: String;
    serviceDescription: String;
    cost: number;
  }) => {
    // Implement your update logic here
    // This could be an API call or state update
    console.log("Updating service:", updatedServiceData);
    // After successful update, you might want to refresh your services list
  };

  return (
    <div>
      <table className="w-full text-left">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="py-2 px-4">Service Id</th>
            <th className="py-2 px-4">Service Name</th>
            <th className="py-2 px-4">Cost</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} className="border-b border-border">
              <td className="py-2 px-4">{service.serviceId}</td>
              <td className="py-2 px-4">{service.serviceName}</td>
              <td className="py-2 px-4">{service.cost}</td>
              <td className="py-2 px-4">{service.description}</td>
              <td className="py-2 px-2">
                <button
                  onClick={() => openUpdateModal(service)}
                  className="text-primary hover:text-primary/80 bg-transparent text-green-700 mx-3"
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
      {isModalOpen && selectedService && (
        <UpdateServiceModal
          openUpdatePopup={closeUpdateModal}
          initialData={{
            serviceId: selectedService.serviceId,
            serviceName: selectedService.serviceName,
            serviceDescription: selectedService.description,
            cost: selectedService.cost,
          }}
          updateService={updateService}
        />
      )}
    </div>
  );
};

export default ServiceTable;
