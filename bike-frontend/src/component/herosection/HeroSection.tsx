import React from "react";
import center from "../../assets/center.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
const HeroSection: React.FC = () => {
  const hover = "hover:scale-110 transition-transform duration-500 ease-in-out";
  return (
    <section className="text-center">
      <h1 className="text-[42px] font-bold mb-4  leading-[50px] ">
        Door Step <br /> Two Wheeler Servicing
      </h1>
      <p className="text-lg text-service mb-2 ">
        Service at your home or office, 7 days a week, <br /> fair and
        transparent pricing
      </p>
      <div className="flex  justify-between items-center  m-20  ">
        <img
          src={right}
          alt="Mechanic with tools"
          className="mr hover:scale-110 transition-transform duration-500 ease-in-out  w-[200] h-[200] md:w-[300] md:h-[300]"
        />
        <img
          src={center}
          alt="Mechanic working on bike"
          className="size-200  w-[200] h-[200] md:w-[300] md:20 hover:scale-110
           transition-transform duration-500 ease-in-out  w-[200] h-[200] md:w-[300] md:h-[300] "
        />
        <img
          src={left}
          alt="Close-up of bike repair"
          className="hover:scale-110 transition-transform duration-500 ease-in-out  w-[200] h-[200] md:w-[300] md:h-[300]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
