import React from "react";
import { Link } from "react-router-dom";

import "../../assets/scss/index.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navbar bg-shade-yellow navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            MoW
          </Link>
          <button
            className="navbar-toggler shadow-none border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <Link
                  to="/home"
                  className="text-decoration-none text-uppercase fw-semibold text-darken"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <Link
                  to="/meals"
                  className="text-decoration-none text-uppercase fw-semibold text-darken"
                >
                  Meals
                </Link>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <Link
                  to="/partnership"
                  className="text-decoration-none text-uppercase fw-semibold text-darken"
                >
                  Partnership
                </Link>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <Link
                  to="/donation"
                  className="text-decoration-none text-uppercase fw-semibold text-darken"
                >
                  Donation
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn btn-outline-darken btn-hover text-darken py-2 px-4 me-lg-3 my-2 my-lg-0"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="btn btn-darken text-whiten py-2 px-4"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
