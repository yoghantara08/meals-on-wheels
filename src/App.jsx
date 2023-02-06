import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/auth-context";
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
  MemberPage,
  RiderPage,
  PartnerPage,
  RegisterPage,
} from "./pages";

const App = () => {
  const { isLoggedIn, isAdmin, isMember, isPartner, isRider } =
    useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />

      {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      )}

      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/donation/donate" element={<DonatePage />} />
      <Route path="/donation/thank-you" element={<DonateThankYouPage />} />

      <Route path="/meals" element={<MealsPage />} />
      <Route path="/meals/:mealName/:mealId" element={<MealDetailsPage />} />
      <Route path="/meals/search" element={<SearchMealsPage />} />

      <Route path="/partnership" element={<PartnershipPage />} />

      {isMember && <Route path="/profile/member" element={<MemberPage />} />}
      {isRider && <Route path="/profile/rider" element={<RiderPage />} />}
      {isPartner && <Route path="/profile/partner" element={<PartnerPage />} />}
      {isAdmin && <Route path="/admin" element={<AdminPage />} />}
    </Routes>
  );
};
export default App;
