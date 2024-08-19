import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getOrders } from "../../services/orders.api";
import DeleteOrderModal from "../modal/delete-order-modal";
import UpdateOrderModal from "../modal/update-order-modal";
import { GetOrdersResponse } from "../../services/orders.type";

const OrderTable = () => {
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
            <th className="py-2">Payment type</th>
            <th className="py-2">Location</th>
            <th className="py-2"> Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="py-2">AppointmentId</td>
            <td className="py-2">preferredDate</td>
            <td className="py-2">customer</td>
            <td className="py-2">service</td>
            <td className="py-2">Location</td>
            <td className="py-2">payment </td>

            <td className="py-2">
              <button
                className="btn btn-primary mr-2"
                // onClick={() => handleUpdate(order)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                // onClick={() => handleDelete(order)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
