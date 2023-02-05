import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  AdminPage,
  ContactPage,
  DonationPage,
  DonatePage,
  DonateThankYouPage,
  LoginPage,
  MealsPage,
  MealDetailsPage,
  SearchMealsPage,
  PartnershipPage,
  PartnerRegisterPage,
  MemberPage,
  RiderPage,
  PartnerPage,
  RegisterPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/donation/donate" element={<DonatePage />} />
      <Route path="/donation/thank-you" element={<DonateThankYouPage />} />

      <Route path="/meals" element={<MealsPage />} />
      <Route path="/meals/:mealId" element={<MealDetailsPage />} />
      <Route path="/meals/search" element={<SearchMealsPage />} />

      <Route path="/partnership" element={<PartnershipPage />} />
      <Route path="/partnership/register" element={<PartnerRegisterPage />} />

      <Route path="/profile/member" element={<MemberPage />} />
      <Route path="/profile/rider" element={<RiderPage />} />
      <Route path="/profile/partner" element={<PartnerPage />} />

      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
export default App;
