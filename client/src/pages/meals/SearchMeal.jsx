import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMeal } from "../../api/meal-api";
import MainLayout from "../../components/layout/MainLayout";

const SearchMeal = () => {
  const [mealsList, setMealsList] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    searchMeal(searchParams.get("value"))
      .then((res) => {
        setMealsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams]);

  return (
    <MainLayout>
      <section>
        <div class="container pt-5">
          <div className="text-center w-50 mx-auto">
            <h3>
              Search Another <span className="fw-bold">Food!</span>
            </h3>

            <form className="d-flex search pt-3">
              <input
                className="w-100 bg-transparent ps-4 form-control"
                style={{ color: "black", borderRadius: "5px" }}
                placeholder="Search for meal"
                type="text"
                name="value"
              />
            </form>
          </div>
          <div class="text-center w-50 mx-auto pt-5">
            <h3>Result Of Food Name</h3>
          </div>
          <div className="menus pb-5 pt-2 text-center">
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
                    <Link
                      to={`/meals/${meal.mealName.toLowerCase()}/${meal._id}`}
                    >
                      <button className="btn btn-primary">See Details</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SearchMeal;
