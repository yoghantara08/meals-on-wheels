import React from "react";
import { Link } from "react-router-dom";

const LoginRegisButton = () => {
  return (
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
        <Link to="/register" className="btn btn-darken text-whiten py-2 px-4">
          Register
        </Link>
      </li>
    </ul>
  );
};

export default LoginRegisButton;
