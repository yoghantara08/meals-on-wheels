import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Banner from "../../assets/img/banner.jpg";
import Form from "../../assets/img/form.png";
import Delivery from "../../assets/img/delivery.png";
import Delicious from "../../assets/img/delicious.png";
import Food1 from "../../assets/img/food-1.jpg";
import "../../assets/css/home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return( 
    <MainLayout>
      <div className="banner">
        <img src={Banner} className="banner-img img-fluid"/>
        <div className="banner-text text-white text-center">
          <h1 className="fw-normal">Welcome to <span className="fw-bold">Meals On Wheels</span></h1>
          <h5 className="fw-normal">Search for <span className="fw-bold">food</span></h5>
          <div className="d-flex search bg-transparent border-white rounded">
            <i class="fa-solid fa-magnifying-glass m-auto"></i>
            <input className="w-100 bg-transparent text-white" placeholder="Your text here..."/>
          </div>
        </div>
      </div>

      <div className="why-us py-5 px-3 text-center">
        <h1 className="fw-normal">Why <span className="fw-bold">Us?</span></h1>
        <p>Using the Meals on Wheels website is a great way to get involved and support a noble cause. This website is about a charity organization that provides food to those in need and helps to end hunger in our communities. By visiting the site, you can learn about the services we offer, how to volunteer or donate, and see the impact of your generosity in action. With your help, we can provide nourishing meals and a brighter future for those who are struggling to make ends meet. Whether you are looking to donate, volunteer, or simply learn more about our mission, the Meals on Wheels website is an excellent resource. So why not visit us today and see how you can make a difference in the lives of those in need.</p>
      </div>

      <div className="howdw py-5 text-center">
        <h1 className="fw-normal">How Delivery <span className="fw-bold">Works?</span></h1>
        <div className="d-flex justify-content-around align-items-center mt-4">
            <div>
              <img src={Form}/>
              <p className="mt-2">Sign in & choose food<br/>from our menu</p>
            </div>
            <div>
              <img src={Delivery}/>
              <p className="mt-2">We will deliver<br/>your order</p>
            </div>
            <div>
              <img src={Delicious}/>
              <p className="mt-2">Enjoy our<br/>tasty & healthy food</p>
            </div>
        </div>
        <button className="px-5 py-2 btn">Order Now</button>
      </div>

      <div className="bestfood py-5 text-center">
        <h1>Our Best Food</h1>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          <div className="card">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
            </div>
          </div>
          <div className="card">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
            </div>
          </div>
          <div className="card">
            <img src={Food1} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Menu Name</h5>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
