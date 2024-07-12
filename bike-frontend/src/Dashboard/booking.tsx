import Sidebar from "./Sidebar";
import Header from "./header";
import OrderTable from "./OrderTable";

const Booking = () => {
  return (
    <div className="flex h-screen font-sans m-3">
      <Sidebar />
      <div className="flex-1 p-6 bg-white">
        <Header />
        <main>
          <h2 className="text-xl font-semibold text-foreground mb-2">Order</h2>
          <p className="text-muted-foreground mb-4">
            Let's check your order details
          </p>
          <OrderTable />
        </main>
      </div>
    </div>
  );
};

export default Booking;
