import React from "react";
import "../../assets/css/main-layout.css";
import Footer from "../footer/Footer";
import Navigation from "../navbar/Navigation";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="head">
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className="bg-shade-yellow container-fluid">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
