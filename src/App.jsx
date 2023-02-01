import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MealsPage from "./pages/MealsPage";
import MenuDetailsPage from "./pages/MenuDetailsPage";
import DonationPage from "./pages/DonationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/meals" element={<MealsPage/>}></Route>
        <Route path="/menu-details" element={<MenuDetailsPage/>}></Route>
        <Route path="/donation" element={<DonationPage/>}></Route>
      </Routes>
    </Router> 
  );
}
export default App;
