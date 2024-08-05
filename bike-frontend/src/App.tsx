// import BookingSection from "./component/bookingsection/BookingComponent";
import React, { useEffect } from "react";
import Footer from "./component/herosection/Footer";
import HeroSection from "./component/herosection/HeroSection";
import ReviewsSection from "./component/herosection/review";
// import SechulingCalander from "./component/herosection/SechulingCalander";
import Services from "./component/herosection/Service";
import WarrantySection from "./component/herosection/WarrantyService";
import NavBar from "./component/navbar/NavBar";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      {/* <BookingSection /> */}
      {/* <SechulingCalander /> */}
      <Services />
      <WarrantySection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
export default App;
