import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./utils/globalStyles.scss";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Restaurants from "./pages/Restaurants";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/restaurants" element={<Restaurants />} />
         </Routes>
         <Footer />
      </Router>
   </StrictMode>
);
