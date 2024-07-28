// import BookingSection from "./component/bookingsection/BookingComponent";
import HeroSection from "./component/herosection/HeroSection";
import ReviewsSection from "./component/herosection/review";
// import SechulingCalander from "./component/herosection/SechulingCalander";
import Services from "./component/herosection/Service";
import WarrantySection from "./component/herosection/WarrantyService";
import NavBar from "./component/navbar/NavBar";

function App() {
  return (
    <div className="bg-background text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      {/* <BookingSection /> */}
      {/* <SechulingCalander /> */}
      <Services />
      <WarrantySection />
      <ReviewsSection />
    </div>
  );
}
export default App;
