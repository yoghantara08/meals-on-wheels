import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { assignOrderToRider, getUsers } from "../../../api/admin-api";
import AuthContext from "../../../context/auth-context";

const AssignRider = ({ show, onHide, orderId, refresh }) => {
  const authCtx = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [riders, setRider] = useState([]);

  useEffect(() => {
    getUsers(authCtx.token)
      .then((res) => {
        setUsers(res.data);
        setRider(users.filter((user) => user.role === "RIDER"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authCtx.token, users]);

  const assignRider = (userId) => {
    assignOrderToRider(authCtx.token, orderId, userId)
      .then((res) => {
        onHide();
        refresh((prev) => (prev += 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Available Rider
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {riders.map((rider) => (
            <div
              key={rider._id}
              className="d-flex align-items-center mb-3 col-6"
            >
              <div className="admin-partner-image">
                <img
                  src={`http://localhost:8080/${rider.image}`}
                  alt={rider.firstName}
                />
              </div>

              <div>
                <p className="m-0 mb-1">{rider.firstName}</p>
                <Button
                  className="btn-shade-yellow"
                  onClick={() => assignRider(rider._id)}
                >
                  Assign Rider
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-shade-yellow" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssignRider;
