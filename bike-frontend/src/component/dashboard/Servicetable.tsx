// dashboard/ServiceTable.tsx
import React from "react";
import { GetServiceResponse } from "../../services/service.type";

interface ServiceTableProps {
  services: GetServiceResponse[];
}

const ServiceTable: React.FC<ServiceTableProps> = ({ services }) => {
  return (
    <table className="w-full text-left">
      <thead className="bg-muted text-muted-foreground">
        <tr>
          <th className="py-2 px-4">Service Name</th>
          <th className="py-2 px-4">Cost</th>
          <th className="py-2 px-4">Description</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr key={index} className="border-b border-border">
            <td className="py-2 px-4">{service.serviceName}</td>
            <td className="py-2 px-4">{service.cost}</td>
            <td className="py-2 px-4">{service.serviceDescription}</td>
            <td className="py-2 px-4">
              <button className="text-primary hover:text-primary/80">✏️</button>
              <button className="text-destructive hover:text-destructive/80">
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
