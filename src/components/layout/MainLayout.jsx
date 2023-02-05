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
      <main className="">{children}</main>
      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
