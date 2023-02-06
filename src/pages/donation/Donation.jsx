import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Banner, Ovo, Gopay, Paypal } from "../../assets/img";
import "../../assets/scss/index.scss";
import { donationList } from "../../api/donation-api";

const Donation = () => {
  const [showMore, setShowMore] = useState(false);
  const [donatedItem, setDonatedItem] = useState([]);

  useEffect(() => {
    donationList()
      .then((res) => {
        setDonatedItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainLayout>
      <div className="top-donate-page">
        <section className="donate-banner">
          <h1 className="text-center mb-3 text-darken fw-bold">Donation</h1>
          <div className="container">
            <Row className="d-flex justify-content-center align-items-center mb-4">
              <Col
                xs="12"
                lg="7"
                className="column-content-img p-0 mb-4 mb-lg-0"
              >
                <div className="parent-img-donation">
                  <Image src={Banner} className="img-item-banner img-fluid" />
                </div>
              </Col>

              <Col xs="12" lg="5" className="column-content-desc ps-lg-5">
                <h2 className="text-darken mb-2 fw-bold">Our Mission</h2>
                <p className="text-desc text-darken mb-3 ">
                  Make a positive impact on the world by providing support to
                  those who are in need, enhancing the well-being of
                  communities, and working towards the creation of a better
                  future for all.
                </p>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <Link
                    to="/donation/donate"
                    type="button"
                    className="btn btn-shade-yellow fw-bold btn-donation text-darken"
                  >
                    Donate Now
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="desc-donate">
          <div className="container-fluid bg-light-shade-green py-4 mb-5">
            <div className="container">
              <h1 className="text-center mb-3 py-2 text-darken fw-bold">
                Why You Should Donate?
              </h1>
              <p className="text-center mt-1 mb-4 text-darken">
                Your donation helps us make a difference in people's lives. Your
                generosity enables us to support those in need, improve
                communities, and create a better world. By donating, you are
                investing in a brighter future for all and becoming a part of
                something bigger than yourself. Your contribution, no matter how
                big or small, goes directly towards creating positive change.
                Help us continue our mission and make a difference today.
              </p>
            </div>
          </div>
        </section>

        <section className="payment-donate my-5">
          <div className="container">
            <h1 className="text-center mb-4 text-darken fw-bold">
              We Accept the Following Payment Methods
            </h1>
            <Row className="d-flex justify-content-center align-items-center mb-2">
              <Col xs="12" md="4" className="column-card mb-3 mb-md-0">
                <div className="card border-0 shadow rounded-4">
                  <div className="card-body px-5 py-4">
                    <div className="parent-img-payment m-2">
                      <Image
                        src={Paypal}
                        className="img-fluid img-payment d-block mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs="12" md="4" className="column-card mb-3 mb-md-0">
                <div className="card border-0 shadow rounded-4">
                  <div className="card-body px-5 py-4">
                    <div className="parent-img-payment m-2">
                      <Image
                        src={Gopay}
                        className="img-fluid img-payment d-block mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs="12" md="4" className="column-card mb-3 mb-md-0">
                <div className="card border-0 shadow rounded-4">
                  <div className="card-body px-5 py-4">
                    <div className="parent-img-payment m-2">
                      <Image
                        src={Ovo}
                        className="img-fluid img-payment d-block mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="container-fluid py-5 mt-5 bg-light-shade-green">
          <div className="list-donated">
            <div className="container">
              <h1 className="text-center mb-3 py-2 text-darken fw-bold">
                Who have Donated
              </h1>

              <div className="donated-content">
                {donatedItem
                  .slice(0, showMore ? donatedItem.length : 2)
                  .map((item, index) => (
                    <div className="donated-item mb-3" key={index}>
                      <div className="card border-0 shadow rounded-4">
                        <div className="card-body p-5">
                          <h3 className="text-darken fw-semibold mb-2">
                            {item.firstName} {item.lastName} &ensp;
                            <span className="fw-normal span-donated">
                              Donated
                            </span>
                            &ensp; Rp. {item.amount}
                          </h3>
                          <p className="text-darken fw-normal p-0 m-0">
                            {item.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {!showMore && donatedItem.length > 2 && (
                <div className="text-center text-darken fw-bold mt-4 mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowMore(true)}
                  >
                    See More
                  </button>
                </div>
              )}
              {showMore && donatedItem.length > 2 && (
                <div className="text-center text-darken fw-bold mt-4 mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowMore(false)}
                  >
                    See Less
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Donation;
