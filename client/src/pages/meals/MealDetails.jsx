import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealDetails } from "../../api/meal-api";
import { orderMeal } from "../../api/member-api";
import MainLayout from "../../components/layout/MainLayout";
import AuthContext from "../../context/auth-context";

const MealDetails = () => {
  const [meal, setMeal] = useState({});
  const params = useParams();
  const { isMember, token, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMealDetails(params.mealId)
      .then((res) => {
        setMeal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.mealId]);

  const orderMealHandler = (mealId) => {
    // eslint-disable-next-line no-restricted-globals
    const isOk = confirm("Are you sure want to order this meal?");

    if (isOk) {
      orderMeal(token, mealId, userId)
        .then((res) => {
          alert(res.data.message);
          navigate("/profile/member");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
                onClick={() => {
                  orderMealHandler(meal._id);
                }}
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
