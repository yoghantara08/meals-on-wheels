import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDefault } from "../../assets";
import AuthContext from "../../context/auth-context";

const ProfileButton = () => {
  const { profile, role, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [dashboardLink, setDashboardLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (profile.role === "PARTNER") {
      setName(profile.companyName);
    } else {
      setName(profile.firstName + " " + (profile.lastName || ""));
    }

    if (role !== "ADMIN") {
      setDashboardLink(`/profile/${role.toLowerCase()}`);
    } else {
      setDashboardLink("/admin");
    }
  }, [profile, role]);

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <ul className="navbar-nav fw-semibold">
      <li className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle d-flex align-items-center text-capitalize"
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
            <Link className="dropdown-item" to={dashboardLink}>
              <i className="fa-solid fa-user"></i> Dashboard
            </Link>
          </li>
          <li className="dropdown-divider"></li>
          <li>
            <span className="dropdown-item" onClick={logoutHandler}>
              <button className="nav-logout btn btn-shade-yellow">
                Logout
              </button>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ProfileButton;
