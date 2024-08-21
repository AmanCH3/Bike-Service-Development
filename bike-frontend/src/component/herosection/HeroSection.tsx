import React from "react";
import dropped from "../../assets/dropped.png";
import "../../css/image-scroller.css";
const HeroSection: React.FC = () => {
  const hover = "hover:scale-110 transition-transform duration-500 ease-in-out";
  return (
    <section id="home" data-aos="flip-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-center bg-white  items-center ">
        <div className="text-center items-center m-10 p-10 flex-1 py-20">
          <h1 className="text-4xl md:text-[60px] font-bold mb-4 leading-tight">
            <span>Door Step</span>
            <span className="block md:inline-block">Two Wheeler Servicing</span>
          </h1>
          <p className="text-lg text-service mb-2 py-4">
            Service at your home or office, 7 days a week,{" "}
            <br className="hidden md:block" />
            fair and transparent pricing
          </p>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img
            src={dropped}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            alt="Mechanic with tools"
            className={`${hover}  w-[200] h-[200] md:w-[300] md:h-[300] `}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
