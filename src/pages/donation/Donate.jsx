import React from "react";
import MainLayout from "../../components/layout/MainLayout";

import "../../assets/scss/index.scss";

const Donate = () => {
  return (
    <MainLayout>
      <section className="top-donate-page">
        <div className="container">
          <div className="donate-content bg-light-shade-green px-5 pb-3 mb-3">
            <form>
              <h1 className="text-center my-3 pt-3 text-darken fw-bold">
                Donation Form
              </h1>
              <div className="d-lg-flex justify-content-lg-between align-items-lg-center ">
                <div className="mb-3 me-lg-2">
                  <label for="exampleInputText1" className="ms-3 form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    id="exampleInputText1"
                    aria-describedby="textHelp"
                    placeholder="First Name"
                  />
                </div>

                <div className="mb-3 ms-lg-2">
                  <label for="exampleInputText2" className="ms-3 form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-field shadow-none"
                    id="exampleInputText2"
                    aria-describedby="textHelp"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="ms-3 form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-field shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputText3" className="ms-3 form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control form-field shadow-none"
                  id="exampleInputText3"
                  aria-describedby="textHelp"
                  placeholder="0123 1234 1234"
                />
              </div>

              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="ms-3 form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control form-field shadow-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter Message"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center align-items-center mb-2">
                <button
                  type="submit"
                  className="btn btn-shade-green btn-donate text-darken my-2"
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
