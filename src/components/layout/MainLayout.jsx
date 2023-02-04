import React from "react";
import "../../assets/css/main-layout.css";
import Footer from "../footer/Footer";
import Navigation from "../navbar/Navigation";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <Navigation />
      </header>
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
