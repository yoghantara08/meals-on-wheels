import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userRegister } from "../../api/auth-api";

import { Food1 } from "../../assets/img";
import "../../assets/scss/index.scss";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitHandler = (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("age", data.age);
    formData.append("address", data.address);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("image", data.image[0]);

    userRegister(formData)
      .then((res) => {
        alert(res.data.message);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
              <h5 className="fw-normal mb-3">
                Registration to have an Account
              </h5>

              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <select
                  className="form-select form-field mb-3 shadow-none"
                  aria-label="Default select example"
                  {...register("role", { required: true })}
                >
                  <option className="text-darken" value="MEMBER">
                    Member
                  </option>
                  <option className="text-darken" value="RIDER">
                    Rider
                  </option>
                </select>
                <div className="d-lg-flex justify-content-lg-between align-items-lg-center ">
                  <div className="mb-3 me-lg-2">
                    <input
                      type="text"
                      className="form-control form-field shadow-none"
                      id="exampleInputText1"
                      aria-describedby="textHelp"
                      placeholder="First Name*"
                      {...register("firstName", { required: true })}
                    />
                  </div>

                  <div className="mb-3 ms-lg-2">
                    <input
                      type="text"
                      className="form-control form-field shadow-none"
                      id="exampleInputText2"
                      aria-describedby="textHelp"
                      placeholder="Last Name"
                      {...register("lastName")}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-field shadow-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email@gmail.com*"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    id="inputPassword5"
                    className="form-control form-field shadow-none"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Password*"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    id="exampleInputText3"
                    aria-describedby="textHelp"
                    placeholder="Age*"
                    {...register("age", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    id="exampleInputText4"
                    aria-describedby="textHelp"
                    placeholder="Phone number*"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    id="exampleInputText5"
                    aria-describedby="textHelp"
                    placeholder="Address*"
                    {...register("address", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <div className="input-group custom-file-button">
                    <label
                      className="input-group-text form-field"
                      for="inputGroupFile"
                    >
                      Choose File
                    </label>
                    <input
                      type="file"
                      className="form-control form-field shadow-none"
                      id="inputGroupFile"
                      {...register("image")}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mt-4 my-3">
                  <button
                    type="submit"
                    className="btn btn-shade-green btn-register text-darken w-100"
                  >
                    REGISTER
                  </button>
                </div>

                <div className="text-to-link">
                  <p className="text-center">
                    Already have an Account? &ensp;{" "}
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
