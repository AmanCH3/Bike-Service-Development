import React from "react";
import NavBar from "../component/navbar/NavBar";
import motor from "../assets/motorcycle.png";
const AddBike = () => {
  return (
    <div className="w-max[full]">
      <NavBar />
      {/* ============= title============= */}
      <div className="m-8 text-3xl font-semibold">
        <h1> Book your service by filling this info</h1>
      </div>
      <div className="leading-loose bg-white rounded shadow-xl p-6 border-solid ">
        <form className="m-6 border-solid gap-4">
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Your inquiry.."
              aria-label="Message"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* ========================================booking ======================= */}
      <div className="flex flex-row justify-center px-12 bg-white ">
        <div>
          <img src={motor} alt="motorcycle in thebooking system" />
        </div>

        {/* ============other text================== */}

        <div className="max-w-4xl bg-white p-8 rounded-lg ">
          <h2 className="text-3xl font-bold  mb-8 text-blue-500x">
            Service Include
          </h2>
          <div className="flex  gap-20 px-10 space-x-9">
            <div className="flex-1 ">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Basic Tune-Up:</h3>
                <ul className="list-disc list-inside">
                  <li>Align brakes</li>
                  <li>Fine-tune gear shifting</li>
                  <li>Lubricate chain and moving parts</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Safety Check:</h3>
                <ul className="list-disc list-inside">
                  <li>Inspect tires for proper inflation and wear</li>
                  <li>Tighten all bolts and nuts</li>
                  <li>Examine the bike frame for damage</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Wheel Maintenance:
                </h3>
                <ul className="list-disc list-inside">
                  <li>True wheels to correct wobble</li>
                  <li>Inspect and lubricate wheel hubs</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 space-x-7">
              <div className="mb-6 space-x-7">
                <h3 className="text-xl font-semibold mb-2 ">Brake Service:</h3>
                <ul className="list-disc list-inside">
                  <li>Replace worn brake pads</li>
                  <li>Check or replace brake rotors</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Bike Cleaning:</h3>
                <ul className="list-disc list-inside">
                  <li>Wash frame, wheels, and components</li>
                  <li>Detail hard-to-reach areas</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Repairs (if needed):
                </h3>
                <ul className="list-disc list-inside">
                  <li>Service suspension</li>
                  <li>Adjust headset</li>
                  <li>Inspect or replace bottom bracket</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBike;
