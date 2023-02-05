import React from "react";
import { Link } from "react-router-dom";

const AdminLink = ({ setActive }) => {
  const order = () => {
    localStorage.setItem("admin-dashboard", "ORDER");
    const adminDashboard = localStorage.getItem("admin-dashboard");
    setActive(adminDashboard);
  };
  const meals = () => {
    localStorage.setItem("admin-dashboard", "MEALS");
    const adminDashboard = localStorage.getItem("admin-dashboard");
    setActive(adminDashboard);
  };
  const user = () => {
    localStorage.setItem("admin-dashboard", "USER");
    const adminDashboard = localStorage.getItem("admin-dashboard");
    setActive(adminDashboard);
  };
  const partner = () => {
    localStorage.setItem("admin-dashboard", "PARTNER");
    const adminDashboard = localStorage.getItem("admin-dashboard");
    setActive(adminDashboard);
  };

  return (
    <>
      <li className="nav-item align-items-center" onClick={order}>
        <i className="fa-solid fa-cart-shopping me-2"></i> Order Management
      </li>
      <li className="nav-item align-items-center" onClick={meals}>
        <i className="fa-solid fa-bowl-food me-2"></i> Meals Management
      </li>
      <li className="nav-item align-items-center" onClick={user}>
        <i className="fa-solid fa-user me-2"></i> Users Management
      </li>
      <li className="nav-item align-items-center" onClick={partner}>
        <i className="fa-solid fa-handshake-angle me-2"></i> Partner Management
      </li>
      <Link to="/" className="text-decoration-none text-black">
        <li className="nav-item align-items-center">
          <i className="fa-solid fa-house me-2"></i> Go to Website
        </li>
      </Link>
    </>
  );
};

export default AdminLink;
