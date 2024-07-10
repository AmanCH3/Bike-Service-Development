import BookingSection from "./component/bookingsection/BookingComponent";
import HeroSection from "./component/herosection/HeroSection";
import SechulingCalander from "./component/herosection/SechulingCalander";
import NavBar from "./component/navbar/NavBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-background text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      <BookingSection />
      <SechulingCalander />
    </div>
  );
}
export default App;
