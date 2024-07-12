import React, { useState } from "react";

interface Order {
  id: string;
  date: string;
  customer: string;
  amount: string;
  payment: string;
  status: string;
}

const OrderTable: React.FC = () => {
  const orders: Order[] = [
    {
      id: "#Inv0561",
      date: "18 Nov 2023",
      customer: "Esther Howard",
      amount: "$456",
      payment: "Bank",
      status: "Processing",
    },
    {
      id: "#Inv0562",
      date: "18 Nov 2023",
      customer: "Robert Fox",
      amount: "$257",
      payment: "Cash",
      status: "Processing",
    },
    {
      id: "#Inv0563",
      date: "18 Nov 2023",
      customer: "Cameron Williamson",
      amount: "$89",
      payment: "Cash",
      status: "Delivered",
    },
    {
      id: "#Inv0564",
      date: "18 Nov 2023",
      customer: "Jacob Jones",
      amount: "$453",
      payment: "Card",
      status: "Delivered",
    },
    {
      id: "#Inv0565",
      date: "18 Nov 2023",
      customer: "Bessie Cooper",
      amount: "$121",
      payment: "Bank",
      status: "Cancel",
    },
    {
      id: "#Inv0566",
      date: "18 Nov 2023",
      customer: "Floyd Miles",
      amount: "$145",
      payment: "Bank",
      status: "Delivered",
    },
    {
      id: "#Inv0567",
      date: "18 Nov 2023",
      customer: "Annette Black",
      amount: "$155",
      payment: "Bank",
      status: "Delivered",
    },
    {
      id: "#Inv0568",
      date: "18 Nov 2023",
      customer: "Darlene Robertson",
      amount: "$145",
      payment: "Bank",
      status: "Delivered",
    },
    {
      id: "#Inv0569",
      date: "18 Nov 2023",
      customer: "Marvin McKinney",
      amount: "$125",
      payment: "Bank",
      status: "Delivered",
    },
    {
      id: "#Inv0570",
      date: "18 Nov 2023",
      customer: "Floyd Miles",
      amount: "$145",
      payment: "Bank",
      status: "Delivered",
    },
  ];

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

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
          {orders.map((order) => (
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="mb-4">Update Order</h2>
            <p>Order ID: {selectedOrder.id}</p>
            {/* Add more fields for updating the order as needed */}
            <button
              className="btn btn-secondary mr-2"
              onClick={closeUpdatePopup}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      )}

      {isDeletePopupOpen && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="mb-4">Delete Order</h2>
            <p>Are you sure you want to delete order ID: {selectedOrder.id}?</p>
            <button
              className="btn btn-secondary mr-2"
              onClick={closeDeletePopup}
            >
              Cancel
            </button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
