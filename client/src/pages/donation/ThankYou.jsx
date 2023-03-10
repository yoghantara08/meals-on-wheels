import React from "react";
import MainLayout from "../../components/layout/MainLayout";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ImgThankPage } from "../../assets/img";
import "../../assets/scss/index.scss";

const ThankYou = () => {
  return (
    <MainLayout>
      <section className="top-thank-page">
        <div className="container">
          <div className="thank-content bg-light-shade-green p-4 mb-4">
            <h1 className="text-center mb-3 text-darken fw-bold">
              Thank You For Donating
            </h1>
            <div className="parent-img-thank-page mb-3">
              <Image src={ImgThankPage} className="item-img-thank img-fluid" />
            </div>
            <p className="text-center text-darken mb-4 fw-normal">
              Helping those in need, improving communities, and creating a
              better world.
            </p>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <Link
                to="/home"
                type="button"
                className="btn btn-shade-green fw-bold text-darken w-50 py-2 rounded-3"
              >
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ThankYou;
