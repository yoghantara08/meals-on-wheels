import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Food1 } from "../../assets/img";
import "../../assets/scss/index.scss";

const Register = () => {
  return (
    <>
      <Container className="top">
        <div className="register-content">
          <Row className="d-flex justify-content-center align-items-center g-3">
            <Col xs="12" md="5" className="p-0 m-0 d-none d-lg-flex">
              <div className="img-left-regis">
                <Image src={Food1} className="img-fluid img-regis " />
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
                  <h1 className="fw-bold mb-0">REGISTER</h1>
                </div>
                <h5 className="fw-normal mb-3 pb-3">
                  Registration to have an Account
                </h5>

                <form>
                  <div className="d-lg-flex justify-content-lg-between align-items-lg-center ">
                    <div className="mb-3 me-lg-2">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="exampleInputText"
                        aria-describedby="textHelp"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="mb-3 ms-lg-2">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="exampleInputText"
                        aria-describedby="textHelp"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

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

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="exampleInputText"
                      aria-describedby="textHelp"
                      placeholder="Your Age"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="exampleInputText"
                      aria-describedby="textHelp"
                      placeholder="0123 1234 1234"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="exampleInputText"
                      aria-describedby="textHelp"
                      placeholder="Street Example No.1, City - Country"
                    />
                  </div>

                  <select
                    className="form-select mb-3 shadow-none"
                    aria-label="Default select example"
                  >
                    <option className="text-darken" selected>
                      Choose your Role
                    </option>
                    <option className="text-darken" value="1">
                      Member
                    </option>
                    <option className="text-darken" value="2">
                      Rider
                    </option>
                  </select>

                  <div className="text-to-link">
                    <p className="">
                      Have an Account &ensp; <Link to="/login">Login</Link>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <button
                      type="submit"
                      className="btn btn-shade-green btn-register text-darken"
                    >
                      REGISTER
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

export default Register;
