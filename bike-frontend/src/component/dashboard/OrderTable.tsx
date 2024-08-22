import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../utils/api.constants";

const OrderTable = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("session");

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/ride`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const rideData = response.data;
        if (Array.isArray(rideData)) {
          setData(rideData);
        } else {
          console.error("Services data is not an array:", rideData);
        }
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by invoice id, customer name or others..."
          className="flex-1 p-2 border border-input rounded"
        />
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2">Appointment Id</th>
            <th className="py-2">Date of Created</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Service</th>
            <th className="py-2">Location</th>
            <th className="py-2">Payment type</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.appointmentId} className="border-b border-border">
              <td className="py-2">{item.appointmentId}</td>
              <td className="py-2">{item.preferredDate}</td>
              <td className="py-2">{item.customer.name}</td>
              <td className="py-2">
                {item.service.serviceName} - {item.service.description} (${item.service.cost})
              </td>
              <td className="py-2">{item.location || "N/A"}</td>
              <td className="py-2">{item.payment || "N/A"}</td>
              <td className="py-2">
                <button className="btn btn-primary mr-2">Update</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
