import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../component/navbar/NavBar";
import motor from "../assets/motorcycle.png";
import { BASE_API_URL } from "../utils/api.constants";
// Define the interfaces for Bike and Service
interface Bike {
  bikeId: number;
  brand: string;
  model: string;
  registrationNumber: string;
}

interface Service {
  serviceId: number;
  serviceName: string;
  serviceDescription: string;
  cost: number;
}

const BookingService: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedBikeId, setSelectedBikeId] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );
  const [date, setDate] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [data, setData] = useState(null);
  const userID = localStorage.getItem("userID");
  const token = localStorage.getItem("session");
  console.log("token", token);
  console.log("userID", userID);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/bike`)
      .then((response) => {
        const bikesData = response.data.data;
        console.log(bikesData);

        setBikes(bikesData);
      })
      .catch((error) => console.error("Error fetching bikes:", error));

    axios
      .get(`${BASE_API_URL}/service`)
      .then((response) => {
        const servicesData = response.data.data;
        console.log(servicesData);

        setServices(servicesData);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);
  console.log("bikes", bikes);
  console.log("services", services);
  console.log("selectServiceId", selectedServiceId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      selectedBikeId &&
      selectedServiceId &&
      date &&
      paymentMethod &&
      location
    ) {
      const bookingData = {
        customerId: userID,
        serviceId: selectedServiceId,
        preferredDate: date,
        paymentMethod,
        location,
      };

      axios
        .post(`${BASE_API_URL}/ride`, bookingData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Booking successful:", response.data);
          alert("Booking successful!");
        })
        .catch((error) => {
          console.error("Error booking service:", error);
          alert(error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="w-max[full]">
      <NavBar />
      {/* ============= title============= */}
      <div className="m-8  text-3xl font-semibold">
        <center>
          <h1>Book your service by filling this info</h1>
        </center>
      </div>
      <div className="leading-loose bg-white rounded w-[50] shadow-xl p-6 border-solid">
        <form className="m-6 border-solid gap-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="bike">
              Select Bike
            </label>
            <select
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="bike"
              value={selectedBikeId ?? ""}
              onChange={(e) => setSelectedBikeId(Number(e.target.value))}
              required
            >
              <option value="" disabled>
                Select a bike
              </option>
              {bikes.map((bike) => (
                <option key={bike.bikeId} value={bike.bikeId}>
                  {bike.brand} {bike.model} ({bike.registrationNumber})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="service">
              Select Service
            </label>
            <select
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="service"
              value={selectedServiceId ?? ""}
              onChange={(e) => setSelectedServiceId(Number(e.target.value))}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.serviceId} value={service.serviceId}>
                  {service.serviceName} - ${service.cost}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="date">
              Select Date
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-600" htmlFor="payment">
              Payment Method
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="payment"
              name="payment"
              placeholder="Cash or Card"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-500" htmlFor="location">
              Location
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="location"
              name="location"
              placeholder="Pick up location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
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
          <img src={motor} alt="motorcycle in the booking system" />
        </div>

        {/* ============other text================== */}

        <div className="max-w-4xl bg-white p-8 rounded-lg ">
          <h2 className="text-3xl font-bold mb-8 text-blue-500">
            Service Includes
          </h2>
          <div className="flex gap-20 px-10 space-x-9">
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

export default BookingService;
