import React, { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginAPI } from "../../api/auth-api";

import { Food1 } from "../../assets/img";
import "../../assets/scss/index.scss";
import AuthContext from "../../context/auth-context";

const LoginComp = () => {
  const { register, handleSubmit, reset } = useForm();
  const authCtx = useContext(AuthContext);
  const [invalid, setInvalid] = useState(false);

  const onSubmitHandler = (data) => {
    loginAPI(data.email, data.password)
      .then((res) => {
        authCtx.login(res.data.token);
        authCtx.redirectLogin(res.data.role);
        reset();
      })
      .catch((err) => {
        setInvalid(true);
      });
  };
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
                <h5 className="fw-normal mb-3">Login into your Account</h5>

                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  {invalid && (
                    <div className="p-3 text-center invalid-login">
                      Invalid email or password!
                    </div>
                  )}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-field shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="email@gmail.com"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="inputPassword5"
                      className="form-control form-field shadow-none"
                      aria-describedby="passwordHelpBlock"
                      placeholder="password"
                      {...register("password", { required: true })}
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
