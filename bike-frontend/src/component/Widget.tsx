import React from "react";
import NavBar from "./navbar/NavBar";
import HeroSection from "./herosection/HeroSection";
import BookingSection from "./bookingsection/BookingComponent";
const Widget: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      <BookingSection />
    </div>
  );
};

export default Widget;
