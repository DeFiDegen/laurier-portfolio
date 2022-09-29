import './Assets/CSS/main.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MaisonLaurierHero from "./Components/MaisonLaurierHero";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <MaisonLaurierHero/> 
    </div>
  );
}

export default App;
