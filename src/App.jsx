import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Navbar />
    <Hero />
    <AboutUs />
  </div>
);

export default App;
