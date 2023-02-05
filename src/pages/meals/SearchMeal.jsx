import React from "react";
import { aboutus2, contactus } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";
import { aboutus1, contactusbanner, banner } from "../../assets";

const SearchMeal = () => {
  return (
    <MainLayout>
      <section>
        <div class="container pt-5">
          <div className="text-center w-50 mx-auto">
            <h3>
              Search Another <span className="fw-bold">Food!</span>
            </h3>
            <div className="d-flex search  pt-3" style={{ height: "60px" }}>
              <i className="fa-solid fa-magnifying-glass m-auto"></i>
              <input
                className="w-100 bg-transparent"
                style={{ color: "black", borderRadius: "5px" }}
                placeholder="Your text here"
                type="text"
              />
            </div>
          </div>
          <div class="text-center w-50 mx-auto pt-5">
            <h3>Result Of Food Name</h3>
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", paddingBottom: "150px" }}
          >
            <div
              class="d-flex flex-column text-center p-5 border rounded bg-primary shadow-sm pt-"
              style={{ width: "80vh", backgroundColor: "#A3A380" }}
            >
              <img src={banner} alt="" />
              <h2 class="font-weight-bold text-primary text-lg pt-3">
                Name Of The Menu
              </h2>
              <i class="fas fa-warehouse fa-2x text-primary"></i>
              <button
                type="submit"
                className="btn btn-primary rounded-0 mt-4"
                style={{ backgroundColor: "#D6CE93" }}
              >
                See Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SearchMeal;
