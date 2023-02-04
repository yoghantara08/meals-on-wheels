import React from "react";
import { memberToken, adminToken } from "../../api/constants";
import {
  getUsers,
  getPendingUsers,
  acceptUsers,
  getPartners,
  getPendingPartners,
  acceptPartners,
  getMeals,
  addMeal,
  editMeal,
  deleteMeal,
  getOrderOnProgress,
  getOrderComplete,
  assignOrderToPartner,
  assignOrderToRider,
} from "../../api/admin-api";

const Dashboard = () => {
  const testAPI = () => {
    assignOrderToRider(
      adminToken,
      "63dcb63d08330e47c906ddbf",
      "63db7162dd210b73adc54bfa"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <button className="btn btn-shade-yellow" onClick={testAPI}>
        Test API
      </button>
    </div>
  );
};

export default Dashboard;
