import BookingSection from "./component/bookingsection/BookingComponent";
import HeroSection from "./component/herosection/HeroSection";
import NavBar from "./component/navbar/NavBar";
import Login from "./component/auth/Login";
import LoginPage from "./component/model/LoginPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-background text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      <BookingSection />
    </div>
  );
}
export default App;
