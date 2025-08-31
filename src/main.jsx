import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./sections/Navbar.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Models from "./sections/Models.jsx";
import Reviews from "./sections/Reviews.jsx";
import Form from "./sections/Form.jsx";
import ReactLenis from "lenis/react";

createRoot(document.getElementById("root")).render(
  <ReactLenis root>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/models" element={<Models />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </ReactLenis>
);
