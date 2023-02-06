import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";
import { ProfileImage } from "../../assets/img";
import "../../assets/scss/index.scss";

const MemberProfile = () => {
  return (
    <MainLayout>
      <section className="profile">
        <div className="container">
          <div className="profile-item">
            <Row className="d-flex bg-shade-yellow justify-content-center align-items-center mt-3 p-4 rounded-4">
              <Col xs="12" md="4" className="profile-img">
                <div className="parent-img">
                  <Image
                    src={ProfileImage}
                    fluid
                    className="img-item d-block w-75 mx-auto"
                  />
                </div>
              </Col>

              <Col xs="12" md="8" className="profile-content">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-darken fw-bold">Name of User</h3>
                  <Link
                    to="###"
                    type="button"
                    className="btn btn-outline-shade-yellow fw-bold btn-edit text-shade-green border-0"
                  >
                    <i className="fas fa-edit text-darken icon-edit p-3"></i>
                  </Link>
                </div>
                <hr />
                <h6 className="text-darken fw-bold mb-1">Email</h6>
                <p className="text-darken fw-normal mb-3">example@gmail.com</p>
                <h6 className="text-darken fw-bold mb-1">Address</h6>
                <p className="text-darken fw-normal mb-3">
                  Street example No.8, Bali - Indonesia
                </p>
                <h6 className="text-darken fw-bold mb-1">Phone Number</h6>
                <p className="text-darken fw-normal mb-3">+ 62 123 4567 8901</p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MemberProfile;
