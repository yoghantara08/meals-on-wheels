import React, { useEffect, useState } from "react";
import { getMeals } from "../../../api/admin-api";
import { adminToken } from "../dummy-token";
import AddMeal from "./AddMeal";

const MealsManagement = () => {
  const [meals, setMeals] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getMeals(adminToken)
      .then((res) => {
        setMeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="p-3 mt-2">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="fw-bold text-decoration-underline">Meals Management</h2>
      </div>
      <AddMeal show={show} onHide={() => setShow(false)} />
      <div className="mt-3">
        <h5 className="fw-bold">Meal List</h5>
        <button
          className="btn btn-shade-yellow"
          onClick={() => {
            setShow(true);
          }}
        >
          Add Meal <i className="fa-solid fa-plus"></i>
        </button>
        <div className="mt-3 row gap-3 mx-1">
          {meals.map((meal) => (
            <div
              className="col-sm-4 col-xl-3 admin-card-meal p-0"
              key={meal._id}
            >
              <div className="admin-card-meal__image">
                <img
                  src={`http://localhost:8080/${meal.image}`}
                  alt={meal.mealName}
                />
              </div>
              <div className="px-3">
                <p className="m-0 my-2 fw-bold fs-4">{meal.mealName}</p>
                <p className="m-0 my-2">{meal.description}</p>
                <div className="mb-2">
                  <p className="m-0 fw-semibold">Ingredients:</p>
                  {meal.ingredients.map((i) => (
                    <span>{i} </span>
                  ))}
                </div>
                <button className="btn btn-shade-yellow mb-4">Edit Meal</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MealsManagement;
