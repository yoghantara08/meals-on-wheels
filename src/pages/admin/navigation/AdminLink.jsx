import React from "react";
import { Link } from "react-router-dom";

const AdminLink = ({ setActive }) => {
  return (
    <>
      <li
        className="nav-item align-items-center"
        onClick={() => setActive("ORDER")}
      >
        <i className="fa-solid fa-cart-shopping me-2"></i> Order Management
      </li>
      <li
        className="nav-item align-items-center"
        onClick={() => setActive("MEALS")}
      >
        <i className="fa-solid fa-bowl-food me-2"></i> Meals Management
      </li>
      <li
        className="nav-item align-items-center"
        onClick={() => setActive("USER")}
      >
        <i className="fa-solid fa-user me-2"></i> Users Management
      </li>
      <li
        className="nav-item align-items-center"
        onClick={() => setActive("PARTNER")}
      >
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
