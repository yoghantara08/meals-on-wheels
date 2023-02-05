import React from "react";
import Banner from "../../assets/img/banner-meal.jpg";
import MainLayout from "../../components/layout/MainLayout";
import "../../assets/css/meals.css";
import { Food1 } from "../../assets/img";

const Meals = () => {
  return (
    <MainLayout>
      <div className="banner-meal">
        <img src={Banner} className="banner-img img-fluid"/>
        <div className="banner-text text-white text-center">
          <h1 className="fw-bold">Meals <span className="fw-light">on </span>Wheels</h1>
          <h3 className="fw-normal">Search for <span className="fw-bold">food</span></h3>
          <form action="/meals/search">
            <div className="d-flex search-meal bg-transparent border-white rounded">
              <i class="fa-solid fa-magnifying-glass m-auto"></i>
              <input className="w-100 bg-transparent text-white" placeholder="Your text here..." name="value"/>
            </div>
          </form>
        </div>
      </div>

      <div className="bestmeals py-5 text-center">
        <h1>Our Best Food</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
      </div>

      <div className="menus py-5 text-center">
        <h1>Our Menus</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
          <div className="card card-meal">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Meals;
