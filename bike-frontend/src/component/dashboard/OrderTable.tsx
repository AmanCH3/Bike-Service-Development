import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getOrders } from "../../services/orders.api";
import { Order } from "../../utils/constants";
import DeleteOrderModal from "../modal/delete-order-modal";
import UpdateOrderModal from "../modal/update-order-modal";

const OrderTable: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const {
    isPending,
    isError,
    data: fetchedOrders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const handleUpdate = (order: Order) => {
    setSelectedOrder(order);
    setIsUpdatePopupOpen(true);
  };

  const handleDelete = (order: Order) => {
    setSelectedOrder(order);
    setIsDeletePopupOpen(true);
  };

  const closeUpdatePopup = () => {
    setIsUpdatePopupOpen(false);
    setSelectedOrder(null);
  };

  const closeDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setSelectedOrder(null);
  };

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error... {error.message}</div>;

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
            <th className="py-2">Center ID</th>
            <th className="py-2">Date of Created</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Payment type</th>
            <th className="py-2">Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchedOrders?.map((order) => (
            <tr key={order.id} className="border-b border-border">
              <td className="py-2">{order.id}</td>
              <td className="py-2">{order.date}</td>
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.amount}</td>
              <td className="py-2 text-green-500">{order.payment}</td>
              <td
                className={`py-2 ${
                  order.status === "Processing"
                    ? "text-yellow-500"
                    : order.status === "Delivered"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {order.status}
              </td>
              <td className="py-2">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleUpdate(order)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isUpdatePopupOpen && selectedOrder && (
        <UpdateOrderModal
          selectedOrder={selectedOrder}
          closeUpdatePopup={closeUpdatePopup}
        />
      )}

      {isDeletePopupOpen && selectedOrder && (
        <DeleteOrderModal
          selectedOrder={selectedOrder}
          closeDeletePopup={closeDeletePopup}
        />
      )}
    </div>
  );
};

export default OrderTable;
