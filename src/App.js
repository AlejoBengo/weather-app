//______________________________________________________________________________
/*IMPORT DE UTILIDADES*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*IMPORT DE COMPONENTES*/
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
/*IMPORT DE CSS*/
import "./App.css";
//______________________________________________________________________________

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
