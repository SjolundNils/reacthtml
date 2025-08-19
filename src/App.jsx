import "./normalize.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import NavbarWrapper from "./components/NavbarWrapper";
import FooterWrapper from "./components/FooterWrapper";

function App() {
  return (
    <div>
      <Router>
        <NavbarWrapper />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Music" element={<Music />} />
        </Routes>
        <FooterWrapper />
      </Router>
    </div>
  );
}
export default App;