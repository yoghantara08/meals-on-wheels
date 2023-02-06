import React from "react";
import { useForm } from "react-hook-form";
import { partnerRegister } from "../../api/auth-api";
import "../../assets/css/partnership.css";
import PartnershipImg from "../../assets/img/partnership.jpg";
import MainLayout from "../../components/layout/MainLayout";

const Partnership = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("companyName", data.companyName);
    formData.append("address", data.address);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("image", data.image[0]);

    partnerRegister(formData)
      .then((res) => {
        alert(res.data.message);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <div className="partnership form container rounded pt-4 pb-4 text-black">
        <h1 className="text-center">Partnership Register</h1>
        <hr />
        <div className="d-flex form justify-content-center gap-5 mt-4">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-group mb-2">
              <label htmlFor="email" className="label">
                Email Address
              </label>
              <br />
              <input
                type="email"
                className="rounded px-3"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="label">
                Password
              </label>
              <br />
              <input
                type="password"
                className="rounded px-3"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="companyName" className="label">
                Company Name
              </label>
              <br />
              <input
                type="text"
                className="rounded px-3"
                id="companyName"
                {...register("companyName", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="address" className="label">
                Address
              </label>
              <br />
              <input
                type="text"
                className="rounded px-3"
                id="address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <br />
              <input
                type="text"
                className="rounded px-3"
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image" className="label">
                Company Image
              </label>
              <input
                className="form-control rounded"
                type="file"
                id="image"
                {...register("image", { required: true })}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <img src={PartnershipImg} className="rounded" alt="Partnership" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Partnership;
