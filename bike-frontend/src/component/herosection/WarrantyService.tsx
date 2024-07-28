import React from "react";
import warrantyIcon from "../../assets/warranty.png";
import illustration from "../../assets/Container.png";

const WarrantySection: React.FC = () => {
  return (
    <div className="bg-white p-10 flex flex-col items-center justify-center">
      <div className="text-center mb-10 flex flex-col">
        <h2 className="text-4xl md:text-5xl font-bold">Service Warranty</h2>
        <p className="text-lg text-blue-700 m-2">
          Service at your home or office, fair and transparent
          <br className="hidden md:block" /> pricing
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around w-full mb-10">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg m-4 md:m-0">
          <img src={warrantyIcon} alt="Warranty Icon" className="mb-4" />
          <h3 className="text-xl font-bold text-center">
            3 MONTHS or 1200 KM <br className="hidden md:block text-blue-700" />{" "}
            WARRANTY
          </h3>
        </div>

        <div className="md:w-1/3 flex flex-col items-stretch justify-center  bg-white p-6 rounded-lg  m-4 md:m-0">
          <ul className="list-none text-left">
            <li className="mb-2 flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>3 Months or
              1,200 KM whichever comes first.
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Warranty on parts and labour.
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Hassle-free claim process.
            </li>
            <li className="flex items-center">
              <span className="text-red-500 text-xl mr-2">✖</span>
              Wear and tear excluded (Accidental Cases).
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center md:w-1/3 m-4 md:m-0">
          <img
            src={illustration}
            alt="Illustration"
            className="w-60 h-60 md:w-80 md:h-80"
          />
        </div>
      </div>

      <div className="text-center">
        <p className="mb-2">
          We provide a 3 months / 1,200 KM warranty with every bike/scooter
          service. You have to buy our recommended parts for parts warranty
          policy.
        </p>
        <p>The labor is also covered under the warranty.</p>
      </div>
    </div>
  );
};

export default WarrantySection;
