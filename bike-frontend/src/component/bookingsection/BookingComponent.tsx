import React from "react";

const BookingSection: React.FC = () => {
  return (
    <section className="text-center  bg-white m-20">
      <h2 className="text-2xl font-bold mb-8 pt-2">Book your Services Today</h2>
      <div className="flex justify-center space-x-4 items-center pb-2">
        <select className="bg-white text-black px-16 py-2 rounded-md shadow-md ">
          <option>Select Location</option>
          <option>Kathmandu</option>
          <option>Bhaktapur</option>8<option>Lalitpur</option>
        </select>
        <select className="bg-white text-gray-800 px-16 py-2 rounded-md shadow-md">
          <option>Select Brand</option>
          <option>Aprilla</option>
          <option>Yamaha</option>
          <option>Bajaj</option>
          <option>Hero</option>
          <option>KTM</option>
          <option>Honda</option>
        </select>
        <select className="bg-white text-gray-800 px-16 py-2 rounded-md shadow-md ">
          <option>Select Service</option>
          <option>General Service</option>
          <option>Oil Change</option>
          <option>Brake Service</option>
          <option>Clutch Service</option>
          <option>Chain Service</option>
          <option>Wash</option>
        </select>
        <button className="bg-gray-800 text-white px-10 py-2 rounded-md shadow-md hover:bg-gray-700 ">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default BookingSection;
