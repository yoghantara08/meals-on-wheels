import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationLink;
