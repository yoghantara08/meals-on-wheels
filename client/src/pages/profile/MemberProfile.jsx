import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import "../../assets/scss/index.scss";
import AuthContext from "../../context/auth-context";
import ProfileCard from "./ProfileCard";
import { Table } from "react-bootstrap";
import {
  orderCompleteMember,
  orderOnProgressMember,
} from "../../api/member-api";
import { Link } from "react-router-dom";

const MemberProfile = () => {
  const { profile, token, userId } = useContext(AuthContext);
  const [orderOnProgress, setOrderOnProgress] = useState([]);
  const [orderComplete, setOrderComplete] = useState([]);

  useEffect(() => {
    // Order on progress
    orderOnProgressMember(token, userId)
      .then((res) => {
        setOrderOnProgress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Order complete
    orderCompleteMember(token, userId)
      .then((res) => {
        setOrderComplete(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, userId]);

  return (
    <MainLayout>
      <ProfileCard
        name={profile.firstName + " " + profile.lastName}
        email={profile.email}
        image={profile.image}
        address={profile.address}
        phoneNumber={profile.phoneNumber}
      />
      {/* ORDER ON PROGRESS */}
      <section className="container mt-4">
        <div className="border-bottom mb-2 pb-2 d-flex justify-content-between">
          <h4 className="fw-bold" style={{ color: "#b35d62" }}>
            Order On Progress
          </h4>
          <Link
            to="/meals"
            className="text-decoration-none btn btn-shade-yellow"
          >
            Order More Meal
          </Link>
        </div>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Status</th>
              <th>Meal Name</th>
              <th>Meal Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {orderOnProgress.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderStatus}</td>
                <td>{order.meal.mealName}</td>
                <td>{order.meal.description}</td>
                <td className="order-meal-image overflow-hidden">
                  <img
                    src={`http://localhost:8080/${order.meal.image}`}
                    alt={order.meal.mealName}
                    className="w-100 h-100 img-thumbnail"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
      {/* ORDER COMPLETE */}
      <section className="container mt-4 mb-4">
        <div className="border-bottom mb-2 pb-2 ">
          <h4 className="fw-bold" style={{ color: "#b35d62" }}>
            Order Complete
          </h4>
        </div>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Status</th>
              <th>Meal Name</th>
              <th>Meal Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {orderComplete.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderStatus}</td>
                <td>{order.meal.mealName}</td>
                <td>{order.meal.description}</td>
                <td className="order-meal-image overflow-hidden">
                  <img
                    src={`http://localhost:8080/${order.meal.image}`}
                    alt={order.meal.mealName}
                    className="w-100 h-100 img-thumbnail"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </MainLayout>
  );
};

export default MemberProfile;
