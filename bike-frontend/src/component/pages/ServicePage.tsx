import React, { useEffect, useState } from "react";
import { getService, POST_URL_SERVICE } from "../../services/service.api";
import { GetServiceResponse } from "../../services/service.type";

import AddServiceModal from "../modal/add-service-modal";
// Ensure correct import path
import { useNavigate } from "react-router-dom";
import ServiceTable from "../dashboard/Servicetable";

const Service: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [services, setServices] = useState<GetServiceResponse[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 50;
  const totalItems = 2128;
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestBody: Record<string, string> = {};
    formData.forEach((value, key) => {
      requestBody[key] = value.toString();
    });
    const jsonBody = JSON.stringify(requestBody);
    console.log(jsonBody);

    try {
      const response = await fetch(POST_URL_SERVICE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonBody,
      });

      if (!response.ok) {
        throw new Error("Failed to add Service");
      }

      // Optionally refetch services after adding a new one
      fetchServices();
    } catch (error) {
      console.error("Failed to add service:", error);
      alert("Failed to add service. Please try again.");
    }
  };

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const fetchServices = async () => {
    try {
      const data = await getService();
      console.log("data pf get", data);
      //@ts-ignore
      setServices(data.data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Services</h1>
        <div className="flex space-x-2">
          <button
            onClick={openModal}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80"
          >
            + Add Service
          </button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
            Import Services
          </button>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80">
            ...
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Service Name"
          className="bg-input text-foreground px-4 py-2 rounded-lg w-full max-w-md border border-border focus:ring-primary focus:border-primary"
        />
        <div className="flex space-x-2">
          <select className="bg-input text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
            <option value="serviceId"> Service Id</option>
            <option value="serviceName">Service Name</option>
            <option value="cost">Cost</option>
            <option value="serviceDescription">Description</option>
          </select>
          <select className="bg-input text-foreground px-4 py-2 rounded-lg border border-border focus:ring-primary focus:border-primary">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="bg-card p-4 rounded-lg shadow w-full">
        <ServiceTable services={services} />
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>
          Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={handlePreviousPage}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80"
            disabled={currentPage * itemsPerPage >= totalItems}
          >
            Next
          </button>
        </div>
      </div>
      {isModalOpen && (
        <AddServiceModal
          openAddPopup={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Service;
