import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listMeals } from "../../api/meal-api";
import "../../assets/css/home.css";
import Banner from "../../assets/img/banner.jpg";
import Delicious from "../../assets/img/delicious.png";
import Delivery from "../../assets/img/delivery.png";
import Form from "../../assets/img/form.png";
import MainLayout from "../../components/layout/MainLayout";

const Home = () => {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    listMeals()
      .then((res) => {
        setMealList(res.data);
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
          <h1 className="fw-semibold">Welcome to Meals On Wheels</h1>
          <h5 className="fw-normal">Search for food</h5>
          <form action="/meals/search">
            <div className="d-flex search-meal bg-transparent border-white rounded">
              <i className="fa-solid fa-magnifying-glass m-auto"></i>
              <input
                className="w-100 bg-transparent text-white form-control shadow-none"
                placeholder="Search meal"
                name="value"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="why-us py-5 px-3 text-center container">
        <h1 className="fw-normal">
          Why <span className="fw-bold">Us?</span>
        </h1>
        <p>
          Using the Meals on Wheels website is a great way to get involved and
          support a noble cause. This website is about a charity organization
          that provides food to those in need and helps to end hunger in our
          communities. By visiting the site, you can learn about the services we
          offer, how to volunteer or donate, and see the impact of your
          generosity in action. With your help, we can provide nourishing meals
          and a brighter future for those who are struggling to make ends meet.
          Whether you are looking to donate, volunteer, or simply learn more
          about our mission, the Meals on Wheels website is an excellent
          resource. So why not visit us today and see how you can make a
          difference in the lives of those in need.
        </p>
      </div>

      <div className="howdw py-5 text-center">
        <h1 className="fw-normal">
          How Delivery <span className="fw-bold">Works?</span>
        </h1>
        <div className="d-flex justify-content-around align-items-center mt-4">
          <div>
            <img src={Form} alt="" />
            <p className="mt-2">
              Sign in & choose food
              <br />
              from our menu
            </p>
          </div>
          <div>
            <img src={Delivery} alt="" />
            <p className="mt-2">
              We will deliver
              <br />
              your order
            </p>
          </div>
          <div>
            <img src={Delicious} alt="" />
            <p className="mt-2">
              Enjoy our
              <br />
              tasty & healthy food
            </p>
          </div>
        </div>
        <button className="px-5 py-2 btn">Order Now</button>
      </div>

      <div className="bestfood py-5 text-center">
        <h1>Our Best Food</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {mealList.slice(0, 3).map((meal) => (
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

export default Home;
