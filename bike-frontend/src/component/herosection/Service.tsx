// src/components/Services.tsx
import React from "react";
import Vector from "../../assets/Vector.png";
import ve from "../../assets/ve.png";
import vee from "../../assets/vee.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Two Wheeler Servicing",
    description:
      "Ensure your two-wheeler is in top condition with our comprehensive bike servicing. Our expert technicians perform full inspections, engine tuning, oil changes, brake checks, chain and sprocket maintenance, tire inspections, and electrical system checks.",
    button: "Book Now",
    icon: Vector,
  },
  {
    title: "Service",
    description:
      "Finding a bike servicing pick-up and drop service in Kathmandu might require some effort. While specific services may be limited, exploring local bike shops, online platforms, and social media can help locate options. Consider factors like reputation, pricing, services offered, and convenience when choosing a provider.",
    button: "Service",
    icon: ve,
  },
  {
    title: "Bike information",
    description:
      "Ensure your bike runs smoothly and safely with our comprehensive care. From engine tuning and brake maintenance to oil changes and chain adjustments, we cover all aspects of your bike's performance. Trust us for detailed tire inspections and electrical system checks.",
    button: "Add your bike",
    icon: vee,
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/book");
  };

  const handleShowService = () => {
    navigate("/service");
  };

  const handleBikeManagement = () => {
    navigate("/bike");
  };

  return (
    <section id="services" className="p-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-6 px-6">Our Services</h2>
      <div
        className="w-full h-full flex flex-wrap justify-center m-6 py-12"
        style={{ gap: "5rem" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 mx-6 px-6 rounded-lg shadow-lg flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-500 ease-in-out"
            style={{ width: "356px", height: "auto" }}
          >
            <img
              className="mb-4"
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <h3 className="text-xl font-bold text-center mb-2">
              {service.title}
            </h3>
            <p className="mb-4 text-sm text-center leading-7 tracking-wider">
              {service.description}
            </p>
            <button
              className="text-blue-800 font-bold py-2 px-4"
              onClick={() => {
                if (service.title === "Two Wheeler Servicing") {
                  handleBook();
                } else if (service.title === "Service") {
                  handleShowService();
                } else if (service.title == "Bike information") {
                  handleBikeManagement();
                }
              }}
            >
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
