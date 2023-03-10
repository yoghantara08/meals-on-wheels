import React from "react";
import "../../../assets/css/admin.css";
import AdminLink from "./AdminLink";

const AdminNavigation = ({ setActive }) => {
  return (
    <>
      <aside className="admin-nav p-4 bg-shade-yellow d-none d-md-block">
        <h2 className="fw-bold">Dashboard</h2>
        <ul className="nav flex-column mt-4">
          <AdminLink setActive={setActive} />
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
              <AdminLink setActive={setActive} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavigation;
