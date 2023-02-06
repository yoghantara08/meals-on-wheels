import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userDefault } from "../../assets";

const ProfileCard = ({ image, name, email, address, phoneNumber }) => {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile-item">
          <Row className="d-flex bg-shade-yellow justify-content-center align-items-center mt-3 p-4 rounded-4">
            <Col xs="12" md="4" className="profile-img">
              <div className="profile-parent-img ">
                <Image
                  src={image ? `http://localhost:8080/${image}` : userDefault}
                  fluid
                  className="profile-img-item d-block "
                  alt={name}
                />
              </div>
            </Col>

            <Col xs="12" md="8" className="profile-content px-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-darken fw-bold">{name}</h3>
                <Link
                  to=""
                  type="button"
                  className="btn btn-outline-shade-yellow fw-bold btn-edit text-shade-green border-0"
                >
                  <i className="fas fa-edit text-darken icon-edit p-3"></i>
                </Link>
              </div>
              <hr />
              <h6 className="text-darken fw-bold mb-1">Email</h6>
              <p className="text-darken fw-normal mb-3">{email}</p>
              <h6 className="text-darken fw-bold mb-1">Address</h6>
              <p className="text-darken fw-normal mb-3">{address}</p>
              <h6 className="text-darken fw-bold mb-1">Phone Number</h6>
              <p className="text-darken fw-normal mb-3">{phoneNumber}</p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
