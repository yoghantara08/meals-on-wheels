import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { userDefault } from "../../assets";
import AuthContext from "../../context/auth-context";

const ProfileButton = () => {
  const { profile } = useContext(AuthContext);
  const [name, setName] = useState("");

  useEffect(() => {
    if (profile.role === "PARTNER") {
      setName(profile.companyName);
    } else {
      setName(profile.firstName + " " + (profile.lastName || ""));
    }
  }, [profile]);

  return (
    <ul className="navbar-nav fw-semibold">
      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle d-flex align-items-center"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="nav-account me-2">
            <img
              src={
                profile.image
                  ? `http://localhost:8080/${profile.image}`
                  : userDefault
              }
              alt="User Account"
            />
          </div>
          {name}
        </span>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="user-profile">
              <i className="fa-solid fa-user"></i> Dashboard
            </a>
          </li>
          <li className="dropdown-divider"></li>
          <li>
            <a className="dropdown-item" href="logout">
              <button className="nav-logout btn btn-shade-yellow">
                Logout
              </button>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ProfileButton;
