import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../assets/scss/index.scss";
import AuthContext from "../../context/auth-context";
import LoginRegisButton from "./LoginRegisButton";
import NavigationLink from "./NavigationLink";
import ProfileButton from "./ProfileButton";

const Navigation = () => {
  const authCtx = useContext(AuthContext);

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
              <NavigationLink />
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarNav"
          >
            {authCtx.isLoggedIn ? <ProfileButton /> : <LoginRegisButton />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
