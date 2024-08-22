import OrderTable from "../component/dashboard/OrderTable";

const Booking = () => {
  return (
    <div className="flex-1 p-6 bg-white">
      {/* <Header /> */}
      <main>
        <h2 className="text-xl font-semibold text-foreground mb-2">Ordxer</h2>
        <p className="text-muted-foreground mb-4">
          Let's check your order details
        </p>
        <OrderTable />
      </main>
    </div>
  );
};

export default Booking;
