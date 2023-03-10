import React from "react";
import { aboutus1, aboutus2 } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";
const About = () => {
  return (
    <MainLayout>
      <section className="pb-5">
        <div class="container pt-5">
          <div class="text-center w-50 mx-auto">
            <h3>
              {" "}
              What We <span className="fw-bold">Do!</span>{" "}
            </h3>
            <p>
              {" "}
              Welcome to our online food ordering website! We are a team of food
              enthusiasts who have come together to make it easy for you to
              order your favorite meals from local restaurants. We believe that
              everyone should have access to delicious food, and our goal is to
              make that happen by providing a convenient and user-friendly
              platform for ordering food online. With our website, you can
              browse menus, customize your order, and have your food delivered
              straight to your door. Thanks for choosing us, we hope you enjoy
              your meal!!.
            </p>
          </div>
          <div class="row">
            <div className="col-sm-6">
              <img
                src={aboutus1}
                alt="Meals"
                className="img-fluid"
                style={{
                  width: "600px",
                  height: "400px",
                  borderTopRightRadius: "30%",
                  borderBottomLeftRadius: "30%",
                }}
                onMouseOver={() => {
                  console.log("Hello");
                }}
              />
            </div>

            <div className="col-sm-6 pt-5">
              <p
                className="text-justify text-center"
                style={{ paddingTop: "30px", paddingRight: "40px" }}
              >
                Our organization is dedicated to providing healthy and delicious
                meals to those in need. We believe that everyone deserves access
                to healthy home-cooked meals. Our team is highly committed to
                making a difference in the lives of those we serve through the
                provision of nutritious meals. We understand the importance of
                good nutrition in maintaining independence and well-being,
                that's why we're here to help. Our goal is to provide the
                support needed to our clients to live well through our meal
                delivery service.
              </p>
            </div>

            <div class="col-sm-6 pt-5">
              <p
                className="text-justify text-center"
                style={{ paddingTop: "200px", paddingRight: "40px" }}
              >
                Meals on Wheels is not just a meal delivery service, but also a
                caring community. We're excited to improve the quality of life
                for seniors and individuals with limitations through our meal
                delivery program. At Meals on Wheels, we strive to provide not
                only hot meals, but also warm smiles and friendly visits to
                brighten our clients' day.
              </p>
            </div>

            <div class="col-sm-6 pt-5">
              <img
                src={aboutus2}
                alt="Meals"
                className="img-fluid"
                style={{
                  width: "600px",
                  height: "400px",
                  borderTopLeftRadius: "30%",
                  borderBottomRightRadius: "30%",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
