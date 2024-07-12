import { Order } from "../../utils/constants";

interface DeleteOrderModalProps {
  selectedOrder: Order;
  closeDeletePopup: () => void;
}

function DeleteOrderModal({
  selectedOrder,
  closeDeletePopup,
}: DeleteOrderModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="mb-4">Delete Order</h2>
        <p>Are you sure you want to delete order ID: {selectedOrder.id}?</p>
        <button
          className="bg-gray-400 py-1.5 px-2 rounded-md text-black mr-2"
          onClick={closeDeletePopup}
        >
          Cancel
        </button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default DeleteOrderModal;
