import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  acceptPartners,
  getPartners,
  getPendingPartners,
} from "../../api/admin-api";
import AuthContext from "../../context/auth-context";

const PartnerManagement = () => {
  const authCtx = useContext(AuthContext);
  const [partner, setPartner] = useState([]);
  const [partnerPending, setPartnerPending] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    // Get partner list
    getPartners(authCtx.token)
      .then((res) => {
        setPartner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Get partner pending list
    getPendingPartners(authCtx.token)
      .then((res) => {
        setPartnerPending(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authCtx.token, refresh]);

  const acceptPartner = (partnerId) => {
    acceptPartners(authCtx.token, partnerId)
      .then((res) => {
        alert(res.data.message);
        setRefresh((prev) => (prev += 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-3 mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-decoration-underline">User Management</h2>
      </div>
      <div className="mt-3">
        <h5 className="fw-bold">User List</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Partner Id</th>
              <th>Company name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Account Status</th>
            </tr>
          </thead>
          <tbody>
            {partner.map((partner) => (
              <tr key={partner._id}>
                <td>{partner._id}</td>
                <td>{partner.companyName}</td>
                <td>{partner.email}</td>
                <td>{partner.address}</td>
                <td>{partner.phoneNumber}</td>
                <td>{partner.accountStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-3">
        <h5 className="fw-bold">Accept Partner</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Partner Id</th>
              <th>Company name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Account Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partnerPending.map((partner) => (
              <tr key={partner._id}>
                <td>{partner._id}</td>
                <td>{partner.companyName}</td>
                <td>{partner.email}</td>
                <td>{partner.address}</td>
                <td>{partner.phoneNumber}</td>
                <td>{partner.accountStatus}</td>
                <td>
                  <button
                    className="btn btn-shade-yellow"
                    onClick={() => {
                      acceptPartner(partner._id);
                    }}
                  >
                    Accept Partner
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PartnerManagement;
