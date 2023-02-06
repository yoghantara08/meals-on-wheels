import React from "react";
import MainLayout from "../../components/layout/MainLayout";

import "../../assets/scss/index.scss";
import { useForm } from "react-hook-form";
import { donateAPI } from "../../api/donation-api";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    donateAPI(data)
      .then((res) => {
        navigate("/donation/thank-you");
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <section className="top-donate-page">
        <div className="container">
          <div className="donate-content bg-light-shade-green px-5 pb-3 mb-4">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h1 className="text-center my-3 pt-3 text-darken fw-bold">
                Donation Form
              </h1>
              <div className="d-lg-flex justify-content-lg-between align-items-lg-center ">
                <div className="mb-3 me-lg-2">
                  <label className="ms-3 form-label">First Name*</label>
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                </div>

                <div className="mb-3 ms-lg-2">
                  <label className="ms-3 form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="ms-3 form-label">Email*</label>
                <input
                  type="email"
                  className="form-control form-field shadow-none"
                  placeholder="email@gmail.com"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="ms-3 form-label">Amount (Rupiah)*</label>
                <input
                  type="text"
                  className="form-control form-field shadow-none"
                  placeholder="1000"
                  {...register("amount", { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="ms-3 form-label">Card Number*</label>
                <input
                  type="text"
                  className="form-control form-field shadow-none"
                  placeholder="2312xxxx"
                  {...register("cardNumber", { required: true })}
                />
              </div>

              <div className="mb-3">
                <label className="ms-3 form-label">Message</label>
                <textarea
                  className="form-control form-field shadow-none"
                  rows="3"
                  placeholder="Enter Message"
                  {...register("message", { required: false })}
                />
              </div>

              <div className="d-flex justify-content-center align-items-center mb-2">
                <button
                  type="submit"
                  className="btn btn-shade-yellow btn-donate text-darken my-2 w-100 fw-semibold"
                >
                  Donate Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Donate;
