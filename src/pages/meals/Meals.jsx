import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listMeals } from "../../api/meal-api";
import "../../assets/css/meals.css";
import Banner from "../../assets/img/banner-meal.jpg";
import MainLayout from "../../components/layout/MainLayout";

const Meals = () => {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    listMeals()
      .then((res) => {
        setMealsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainLayout>
      <div className="banner-meal">
        <img src={Banner} className="banner-img img-fluid" alt="Meal Banner" />
        <div className="banner-text text-white text-center">
          <h1 className="fw-bold">Meals on Wheels</h1>
          <form action="/meals/search">
            <div className="d-flex search-meal bg-transparent border-white rounded">
              <i class="fa-solid fa-magnifying-glass m-auto"></i>
              <input
                className="w-100 bg-transparent text-white form-control shadow-none"
                placeholder="Search meal"
                name="value"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="bestmeals py-5 text-center">
        <h1>Our Best Food</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {mealsList.slice(0, 3).map((meal) => (
            <div className="card card-meal" key={meal._id}>
              <img
                src={`http://localhost:8080/${meal.image}`}
                className="card-img-top"
                alt={meal.mealName}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.mealName}</h5>
                <Link to={`/meals/${meal.mealName.toLowerCase()}/${meal._id}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="menus py-5 text-center">
        <h1>Our Menus</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {mealsList.map((meal) => (
            <div className="card card-meal" key={meal._id}>
              <img
                src={`http://localhost:8080/${meal.image}`}
                className="card-img-top"
                alt={meal.mealName}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.mealName}</h5>
                <Link to={`/meals/${meal.mealName.toLowerCase()}/${meal._id}`}>
                  <button className="btn btn-primary">See Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Meals;
