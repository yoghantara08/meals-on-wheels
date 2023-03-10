import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { acceptUsers, getPendingUsers, getUsers } from "../../api/admin-api";
import AuthContext from "../../context/auth-context";

const UserManagement = () => {
  const authCtx = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [usersPending, setUsersPending] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    // Get User List
    getUsers(authCtx.token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Get Pending User(RIDER)
    getPendingUsers(authCtx.token)
      .then((res) => {
        setUsersPending(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authCtx.token, refresh]);

  const activateAccount = (userId) => {
    acceptUsers(authCtx.token, userId)
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
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Age</th>
              <th>Role</th>
              <th>Account Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.age}</td>
                <td>{user.role}</td>
                <td>{user.accountStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-3">
        <h5 className="fw-bold">Accept User</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone number</th>
              <th>Age</th>
              <th>Role</th>
              <th>Account Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersPending.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.age}</td>
                <td>{user.role}</td>
                <td>{user.accountStatus}</td>
                <td>
                  <button
                    className="btn btn-shade-yellow"
                    onClick={() => {
                      activateAccount(user._id);
                    }}
                  >
                    Activate Account
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

export default UserManagement;
