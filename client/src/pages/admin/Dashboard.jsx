import React, { useState } from "react";
import AdminNavigation from "./navigation/AdminNavigation";
import MealsManagement from "./meals/MealsManagement";
import OrderManagement from "./order/OrderManagement";
import PartnerManagement from "./PartnerManagement";
import UserManagement from "./UserManagement";

const Dashboard = () => {
  const adminDashboard = localStorage.getItem("admin-dashboard");

  if (!adminDashboard) {
    localStorage.setItem("admin-dashboard", "ORDER");
  }
  const [active, setActive] = useState(adminDashboard);

  return (
    <div className="d-md-flex admin-dashboard">
      <AdminNavigation setActive={setActive} />
      <main className="admin-content">
        {active === "ORDER" && <OrderManagement />}
        {active === "MEALS" && <MealsManagement />}
        {active === "USER" && <UserManagement />}
        {active === "PARTNER" && <PartnerManagement />}
      </main>
    </div>
  );
};

export default Dashboard;
