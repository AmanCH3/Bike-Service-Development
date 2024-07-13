import React, { useState } from "react";
import { Order } from "../../utils/constants";

interface UpdateOrderModalProps {
  selectedOrder: Order;
  openUpdatePopup: () => void;
}

const addOrderModal: React.FC<UpdateOrderModalProps> = ({
  selectedOrder,
  openAddPopup,
}) => {
  const [id, setId] = useState<string>(selectedOrder.id);
  const [date, setDate] = useState<string>(selectedOrder.date);
  const [customer, setCustomer] = useState<string>(selectedOrder.customer);
  const [payment, setPayment] = useState<string>(selectedOrder.payment);
  const [amount, setAmount] = useState<string>(selectedOrder.amount);
  const [status, setStatus] = useState<string>(selectedOrder.status);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ id, date, customer, payment, amount, status });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Update Order</h1>
          <span className="text-red-500">• Not Saved</span>
          <button onClick={openAddPopup} className="text-xl font-bold">
            X
          </button>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="id"
                className="block text-sm font-medium text-muted-foreground"
              >
                Id *
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="customer"
                className="block text-sm font-medium text-muted-foreground"
              >
                Customer
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-muted-foreground"
              >
                Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-muted-foreground"
              >
                Payment*
              </label>
              <input
                type="text"
                id="payment"
                name="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-muted-foreground"
              >
                Amount*
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-muted-foreground"
              >
                Status*
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background p-2 text-foreground"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addOrderModal;
