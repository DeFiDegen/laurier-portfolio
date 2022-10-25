import './Assets/CSS/main.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MaisonLaurierHero from "./Components/MaisonLaurierHero";
import MaisonCarousel from "./Components/MaisonCarousel";
import MaisonCall from "./Components/MaisonCall";
import PineappleHero from "./Components/PineappleHero";
import PineappleCall from "./Components/PineappleCall";
import DemonHero from "./Components/DemonHero";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <MaisonLaurierHero/> 
      <MaisonCarousel/> 
      <MaisonCall/>
      <PineappleHero/>
      <PineappleCall/>
      <DemonHero/>
    </div>
  );
}

export default App;
