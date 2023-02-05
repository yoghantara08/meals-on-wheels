import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getOrderComplete, getOrderOnProgress } from "../../../api/admin-api";
import AuthContext from "../../../context/auth-context";
import AssignPartner from "./AssignPartner";
import AssignRider from "./AssignRider";

const OrderManagement = () => {
  const authCtx = useContext(AuthContext);
  const [onProgressOrder, setOnProgressOrder] = useState([]);
  const [orderComplete, setOrderComplete] = useState([]);
  const [partnerModal, setPartnerModal] = useState(false);
  const [riderModal, setRiderModal] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    // Get Order ON PROGRESS
    getOrderOnProgress(authCtx.token)
      .then((res) => {
        setOnProgressOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Get Order COMPLETE
    getOrderComplete(authCtx.token)
      .then((res) => {
        setOrderComplete(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authCtx.token, refresh]);

  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-decoration-underline">Order Management</h2>
      </div>
      {/* Order On Progress */}
      <AssignPartner
        orderId={orderId}
        show={partnerModal}
        onHide={() => setPartnerModal(false)}
        refresh={setRefresh}
      />
      <AssignRider
        orderId={orderId}
        show={riderModal}
        onHide={() => setRiderModal(false)}
        refresh={setRefresh}
      />
      <div className="mt-3">
        <h5 className="fw-bold">Order On Progress</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Meal Name</th>
              <th>Status</th>
              <th>Client</th>
              <th>Partner Assigned</th>
              <th>Rider Assigned</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {onProgressOrder.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.meal.mealName}</td>
                <td>{order.orderStatus}</td>
                <td>{order.member?.firstName}</td>
                <td>{order.partner?.companyName || "-"}</td>
                <td>{order.rider?.firstName || "-"}</td>
                <td>
                  {order.orderStatus === "PENDING" && (
                    <div
                      className="btn btn-shade-yellow"
                      onClick={() => {
                        setPartnerModal(true);
                        setOrderId(order._id);
                      }}
                    >
                      Assign partner
                    </div>
                  )}
                  {order.orderStatus === "READY TO DELIVER" && (
                    <div
                      className="btn btn-shade-yellow"
                      onClick={() => {
                        setRiderModal(true);
                        setOrderId(order._id);
                      }}
                    >
                      Assign rider
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Order Complete */}
      <div className="mt-3">
        <h5 className="fw-bold">Order Complete</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Meal Name</th>
              <th>Status</th>
              <th>Client</th>
              <th>Partner Assigned</th>
              <th>Rider Assigned</th>
            </tr>
          </thead>
          <tbody>
            {orderComplete.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.meal.mealName || "-"}</td>
                <td>{order.orderStatus}</td>
                <td>{order.member.firstName || "-"}</td>
                <td>{order.partner.companyName || "-"}</td>
                <td>{order.rider.firstName || "-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderManagement;
