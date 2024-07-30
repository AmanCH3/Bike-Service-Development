// src/components/Services.tsx
import React from "react";
import Vector from "../../assets/Vector.png";
import ve from "../../assets/ve.png";
import vee from "../../assets/vee.png";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const services = [
  {
    title: "Two Wheeler Servicing",
    description:
      "Ensure your two-wheeler is in top condition with our comprehensive bike servicing. Our expert technicians perform full inspections, engine tuning, oil changes, brake checks, chain and sprocket maintenance, tire inspections, and electrical system checks.",
    button: "book now",
    icon: Vector,
  },
  {
    title: "Membership",
    description:
      "Join our membership program for exclusive benefits. Enjoy priority service, discounts on all services, free regular check-ups, and access to special offers. Become a member today for unmatched care and savings for your bike.",
    button: "Join",
    icon: ve,
  },
  {
    title: "Guaranteed",
    description:
      "Experience top-notch bike care with our guaranteed services. We provide engine tuning, brake maintenance, oil changes, chain care, tire inspections, and electrical system checks. Trust us for comprehensive safety and optimal performance.",
    button: "Read more",
    icon: vee,
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();
  const handleBook = () => {
    navigate("/book");
  };
  return (
    <section id="contact" className="p-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-6">Our Services</h2>
      <div
        className="w-full h-full flex flex-wrap justify-center  "
        style={{ gap: "3rem" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-3 mr hover:scale-105 transition-transform duration-500 ease-in-out  w-[200] h-[200] md:w-[300] md:h-[300]"
            style={{ width: "356px", height: "auto" }}
          >
            <img
              className="mb-4 size-10 "
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <h3 className="text-xl font-bold text-center mb-2 ">
              {service.title}
            </h3>
            <p className="mb-4 text-sm text-center leading-7 tracking-wider font-family-cambay">
              {service.description}
            </p>
            <button
              className="text-blue-800  font-bold py-2 px-4  "
              onClick={
                service.title === "Two Wheeler Servicing"
                  ? handleBook
                  : undefined
              }
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
