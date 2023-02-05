import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { aboutus2 } from "../../assets";

const MealDetails = () => {
  return (
    <MainLayout>
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 pt-5">
            <img
              src={aboutus2}
              alt="Meals"
              className="img-fluid"
              style={{
                width: "600px",
                height: "400px",
              }}
            />
          </div>
          <div class="col-sm-6 pt- ">
            <p
              className=""
              style={{ paddingTop: " 60px", paddingRight: "40px" }}
            >
              <h3 className="">Garlic Butter Steak</h3>
              <p className=" ">
                <h5>Ingredients:</h5>
                Steak cut of your choice (e.g. ribeye, sirloin, filet) <br />{" "}
                Salt Freshly ground black pepper Olive oil or melted butter
                Garlic <br /> Fresh herbs (optional, such as thyme, rosemary, or
                basil)
              </p>
              <p className=" ">
                <h5>Description:</h5>
                Meals on Wheels is not just a meal delivery service, but also a
                caring community. We're excited to improve the quality of life
                for seniors and individuals with limitations through our meal
                delivery program. At Meals on Wheels, we strive to provide not
                only hot meals, but also warm smiles and friendly visits to
                brighten our clients' day.
              </p>
            </p>
            <button
              className="btn mt-3 mx-auto d-block "
              style={{
                border: "5px solid #D6CE93",
                padding: "10px 20px",
                borderRadius: "20px",
                width: "400px",
                height: "70px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#D6CE93")
              }
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MealDetails;
