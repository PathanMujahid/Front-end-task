import "./Styling/App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router";
import ContactUs from "./Component/ContactUs";
import About from "./Component/About";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
