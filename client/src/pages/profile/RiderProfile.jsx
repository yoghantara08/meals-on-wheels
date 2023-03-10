import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  assignedOrderToDeliver,
  deliverOrder,
  orderDelivered,
} from "../../api/rider-api";
import MainLayout from "../../components/layout/MainLayout";
import AuthContext from "../../context/auth-context";
import ProfileCard from "./ProfileCard";

const RiderProfile = () => {
  const { profile, token, userId } = useContext(AuthContext);
  const [assignedOrder, setAssignedOrder] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    assignedOrderToDeliver(token, userId)
      .then((res) => {
        setAssignedOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, userId, refresh]);

  const acceptOrderHandler = (orderId) => {
    deliverOrder(token, userId, orderId)
      .then((res) => {
        setRefresh((prev) => (prev += 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const orderDeliveredHandler = (orderId) => {
    orderDelivered(token, userId, orderId)
      .then((res) => {
        setRefresh((prev) => (prev += 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <ProfileCard
        name={profile.firstName + " " + profile.lastName}
        email={profile.email}
        image={profile.image}
        address={profile.address}
        phoneNumber={profile.phoneNumber}
      />
      <section className="container mt-4">
        <div className="border-bottom mb-2 pb-2 ">
          <h4 className="fw-bold" style={{ color: "#b35d62" }}>
            Order Assigned
          </h4>
        </div>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th style={{ minWidth: "150px" }}>Meal Name</th>
              <th>Meal Ingredients</th>
              <th style={{ minWidth: "150px" }}>Order Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignedOrder.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.meal.mealName}</td>
                <td>{order.meal.ingredients}</td>
                <td>{order.orderStatus}</td>
                <td>
                  <Link
                    to={`/meals/${order.meal.mealName.toLowerCase()}/${
                      order.meal._id
                    }`}
                    className="btn btn-shade-yellow w-100 mb-2"
                  >
                    Meal Details
                  </Link>
                  {order.orderStatus === "ASSIGNED TO RIDER" && (
                    <button
                      className="btn btn-shade-yellow w-100"
                      onClick={() => {
                        acceptOrderHandler(order._id);
                      }}
                    >
                      Accept Order
                    </button>
                  )}
                  {order.orderStatus === "ON DELIVERY" && (
                    <button
                      className="btn btn-shade-yellow w-100"
                      onClick={() => {
                        orderDeliveredHandler(order._id);
                      }}
                    >
                      Order Delivered!
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </MainLayout>
  );
};

export default RiderProfile;
