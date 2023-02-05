import React from "react";
import { Dropdown, Table } from "react-bootstrap";

const OrderManagement = () => {
  return (
    <main className="p-3 mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-decoration-underline">Order Management</h2>
      </div>
      {/* Order On Progress */}
      <div className="mt-3">
        <h5 className="fw-bold">Order On Progress</h5>
        <Table striped bordered responsive="md">
          <thead>
            <tr>
              <th>ID</th>
              <th>Meal Name</th>
              <th>Status</th>
              <th>Client</th>
              <th>Partner Assigned</th>
              <th>Rider Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default OrderManagement;
