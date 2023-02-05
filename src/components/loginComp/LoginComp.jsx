import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Food1 } from "../../assets/img";
import "../../assets/scss/index.scss";

const LoginComp = () => {
  return (
    <>
      <Container className="top">
        <div className="login-content">
          <Row className="d-flex justify-content-center align-items-center g-3">
            <Col xs="12" md="5" className="p-0 m-0 d-none d-lg-flex">
              <div className="img-left-login">
                <Image src={Food1} className="img-fluid img-login " />
              </div>
            </Col>

            <Col xs="12" md="7" className="filed-item">
              <div className="p-3 form-content w-75 mx-auto">
                <div className="d-flex align-items-center mb-3 pb-1">
                  <img
                    src={Food1}
                    alt="Logo"
                    width="50"
                    height="50"
                    className="d-inline-block align-text-center me-3 rounded-circle"
                  />
                  <h1 className="fw-bold mb-0">LOGIN</h1>
                </div>
                <h5 className="fw-normal mb-3 pb-3">Login into your Account</h5>

                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="example@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      id="inputPassword5"
                      className="form-control shadow-none"
                      aria-describedby="passwordHelpBlock"
                      placeholder="********"
                    />
                  </div>

                  <div className="text-to-link">
                    <p className="">
                      Dont have an Account? &ensp;{" "}
                      <Link to="/register">Register</Link>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <button
                      type="submit"
                      className="btn btn-shade-green btn-login text-darken"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LoginComp;