import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
