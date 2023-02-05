import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import "../../assets/css/partnership.css"
import PartnershipImg from "../../assets/img/partnership.jpg";

const Partnership = () => {
  return (
    <MainLayout>
      <div className="partnership form container rounded pt-2 pb-4 text-black">
        <h1 className="text-center">Partnership Request</h1>
        <hr/>
        <div className="d-flex form justify-content-center gap-5 mt-4">
          <form>
            <div className="form-group mb-2">
              <label for="email" className="label">Email Address</label><br/>
              <input 
                type="text" 
                className="rounded px-3" 
                id="email" 
                name="email"
              />
            </div>
            <div className="form-group mb-2">
              <label for="password" className="label">Password</label><br/>
              <input 
                type="password" 
                className="rounded px-3" 
                id="password" 
                name="password"
              />
            </div>
            <div className="form-group mb-2">
              <label for="companyName" className="label">Company Name</label><br/>
              <input 
                type="text" 
                className="rounded px-3" 
                id="companyName" 
                name="companyName"
              />
            </div>
            <div className="form-group mb-2">
              <label for="address" className="label">Address</label><br/>
              <input 
                type="text" 
                className="rounded px-3" 
                id="address" 
                name="address"
              />
            </div>
            <div className="form-group mb-2">
              <label for="phoneNumber" className="label">Phone Number</label><br/>
              <input 
                type="text" 
                className="rounded px-3" 
                id="phoneNumber" 
                name="phoneNumber"
              />
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Company Image</label>
              <input 
                  className="form-control rounded" 
                  type="file" 
                  id="image" 
                  name="image"
                  accept="image/png, image/jpeg, image/gif"
                />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
          <img src={PartnershipImg} className="rounded"/>
        </div>
      </div>
    </MainLayout>)
  ;
};

export default Partnership;
