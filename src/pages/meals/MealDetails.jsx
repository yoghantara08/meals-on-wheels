import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDetails } from "../../api/meal-api";
import MainLayout from "../../components/layout/MainLayout";
import AuthContext from "../../context/auth-context";

const MealDetails = () => {
  const [meal, setMeal] = useState({});
  const params = useParams();
  const { isMember } = useContext(AuthContext);

  useEffect(() => {
    getMealDetails(params.mealId)
      .then((res) => {
        setMeal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.mealId]);

  return (
    <MainLayout>
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 pt-5">
            <img
              src={`http://localhost:8080/${meal.image}`}
              alt={meal.mealName}
              className="img-fluid"
              style={{
                width: "600px",
                height: "400px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div class="col-sm-6 pt- ">
            <p
              className=""
              style={{ paddingTop: " 60px", paddingRight: "40px" }}
            >
              <h3 className="">{meal.mealName}</h3>
              <p className=" ">
                <h5>Ingredients:</h5>
                <span>{meal.ingredients}</span>
              </p>
              <p className=" ">
                <h5>Description:</h5>
                <span>{meal.description}</span>
              </p>
            </p>
            {isMember && (
              <button
                className="btn mt-3 d-block fw-bold"
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
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MealDetails;
