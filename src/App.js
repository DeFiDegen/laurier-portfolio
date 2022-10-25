import './Assets/CSS/main.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MaisonLaurierHero from "./Components/MaisonLaurierHero";
import MaisonCarousel from "./Components/MaisonCarousel";
import MaisonCall from "./Components/MaisonCall";
import PineappleHero from "./Components/PineappleHero";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <MaisonLaurierHero/> 
      <MaisonCarousel/> 
      <MaisonCall/>
      <PineappleHero/>
    </div>
  );
}

export default App;
