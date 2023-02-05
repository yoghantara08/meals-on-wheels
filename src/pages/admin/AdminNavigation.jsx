import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/admin.css";

const AdminNavigation = () => {
  return (
    <>
      <aside className="admin-nav p-4 bg-shade-yellow d-none d-md-block">
        <h2 className="fw-bold">Dashboard</h2>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <i className="fa-solid fa-cart-shopping"></i> Order Management
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-bowl-food"></i> Meals Management
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-user"></i> Users Management
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-handshake-angle"></i> Partner Management
          </li>
          <Link to="/" className="text-decoration-none text-black">
            <li className="nav-item">
              <i className="fa-solid fa-house"></i> Go To Website
            </li>
          </Link>
        </ul>
      </aside>

      <nav className="navbar bg-shade-yellow d-block d-md-none">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Dashboard</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav admin-mobile-nav">
              <li className="nav-item align-items-center">
                <i className="fa-solid fa-cart-shopping me-2"></i> Order
                Management
              </li>
              <li className="nav-item align-items-center">
                <i className="fa-solid fa-bowl-food me-2"></i> Meals Management
              </li>
              <li className="nav-item align-items-center">
                <i className="fa-solid fa-user me-2"></i> Users Management
              </li>
              <li className="nav-item align-items-center">
                <i className="fa-solid fa-handshake-angle me-2"></i> Partner
                Management
              </li>
              <Link to="/" className="text-decoration-none text-black">
                <li className="nav-item align-items-center">
                  <i className="fa-solid fa-house me-2"></i> Go To Website
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavigation;
