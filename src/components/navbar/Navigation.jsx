import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/scss/index.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navbar bg-shade-green navbar-expand-lg navbar-light py-4 fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold">
            MoW
          </NavLink>
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
                <NavLink
                  to="/home"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <NavLink
                  to="/meals"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  Meals
                </NavLink>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <NavLink
                  to="/partnership"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  Partnership
                </NavLink>
              </li>

              <li className="nav-item px-lg-2 mt-2 my-lg-0">
                <NavLink
                  to="/donation"
                  activeclassname="active"
                  className="nav-link"
                  aria-current="page"
                >
                  Donation
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeclassname="active"
                  className="nav-link btn btn-outline-darken text-darken py-2 px-5 me-lg-4 my-2 my-lg-0"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeclassname="active"
                  className="nav-link btn btn-darken text-whiten py-2 px-5"
                  aria-current="page"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
