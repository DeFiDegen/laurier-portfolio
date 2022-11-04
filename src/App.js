import './Assets/CSS/main.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MaisonLaurierHero from "./Components/MaisonLaurierHero";
import MaisonCarousel from "./Components/MaisonCarousel";
import MaisonCall from "./Components/MaisonCall";
import PineappleHero from "./Components/PineappleHero";
import PineappleCall from "./Components/PineappleCall";
import DemonHero from "./Components/DemonHero";
import DemonCall from "./Components/DemonCall";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MaisonLaurierHero /> 
      <MaisonCarousel /> 
      <MaisonCall />
      <PineappleHero />
      <PineappleCall />
      <DemonHero />
      <DemonCall />
      <Contact />
    </div>
  );
}

export default App;
