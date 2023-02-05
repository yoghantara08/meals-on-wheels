import React from "react";
import AdminNavigation from "./AdminNavigation";
import OrderManagement from "./OrderManagement";
// import {
//   getUsers,
//   getPendingUsers,
//   acceptUsers,
//   getPartners,
//   getPendingPartners,
//   acceptPartners,
//   getMeals,
//   addMeal,
//   editMeal,
//   deleteMeal,
//   getOrderOnProgress,
//   getOrderComplete,
//   assignOrderToPartner,
//   assignOrderToRider,
// } from "../../api/admin-api";
// import { donationList } from "../../api/donation-api";

const Dashboard = () => {
  return (
    <div className="d-md-flex admin-dashboard">
      <AdminNavigation />
      <main className="admin-content">
        <OrderManagement />
      </main>
    </div>
  );
};

export default Dashboard;
