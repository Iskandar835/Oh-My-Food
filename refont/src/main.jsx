import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./utils/globalStyles.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Restaurants from "./pages/Restaurants";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/restaurants/:id" element={<Restaurants />} />
         </Routes>
         <Footer />
      </Router>
   </StrictMode>
);
