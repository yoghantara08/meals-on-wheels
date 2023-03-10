import React from "react";
import { contactus, contactusbanner } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div
        className="banner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "130px",
        }}
      >
        <img
          src={contactusbanner}
          className="banner-img img-fluid"
          alt=""
          style={{
            width: "100%",
          }}
        />

        <h1
          className="banner-text text-center fw-normal text-white"
          style={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -25%)",
            fontSize: "80px",
          }}
        >
          {" "}
          Contact Us
        </h1>
      </div>

      <div class="container pt-">
        <div class="row">
          <div className="col-sm-6">
            <img
              src={contactus}
              alt="Meals"
              className="img-fluid"
              style={{
                width: "600px",
                height: "400px",
                borderTopRightRadius: "0%",
                borderBottomLeftRadius: "0%",
              }}
              onMouseOver={() => {
                console.log("Hello");
              }}
            />
          </div>

          <div className="col-sm-6 ">
            <form className="d-flex flex-column p-5 border shadow bg-gray">
              <h2 className="font-weight-bold text-xl mb-4">Ask Question</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  className="form-control p-3 rounded-0"
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  className="form-control p-3 rounded-0 "
                  id="message"
                  placeholder="Your Question"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-0 mt-4"
                style={{ backgroundColor: "#D6CE93" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div class="d-flex flex-wrap pt-5">
            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <div class="card-body d-flex flex-column align-items-center">
                  <i
                    class="fas fa-map-marker-alt fa-5x  pb-4"
                    style={{
                      fontSize: "50px",
                    }}
                  ></i>
                  <h2 class="font-weight-bold text-primary">Our Office</h2>
                  <p class="text-muted mt-3">Street aaa No. 7 bbbb</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <div class="card-body d-flex flex-column align-items-center">
                  <i
                    class="fas fa-envelope fa-5x  pb-4"
                    style={{
                      fontSize: "50px",
                    }}
                  ></i>
                  <h2 class="font-weight-bold text-primary">Email</h2>
                  <p class="text-muted mt-3">mealsonwhell@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <div class="card-body d-flex flex-column align-items-center">
                  <i
                    class="fas fa-phone fa-5x pb-4"
                    style={{
                      fontSize: "50px",
                    }}
                  ></i>
                  <h2 class="font-weight-bold text-primary">Telphone</h2>
                  <p class="text-muted mt-3">+6247385652</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
