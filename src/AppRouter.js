// AppRouter.js
import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import UserFooter from './Components/User/UserFooter';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/User/HomePage';
import SendParcel from './Components/User/SendParcel';
import CarouselWithContent from './Components/User/Carousel';
import Tracking from "./Components/User/Tracking";
import Payment from "./Components/User/Payments";
import PaymentDetails from "./Components/User/DeliveryDetails";
import { UserProfile } from "./Components/User/UserProfile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <CarouselWithContent />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sendparcel" element={<SendParcel />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment" element={<PaymentDetails isPayment={true} />} />
            <Route path="/paymentdetails" element={<PaymentDetails isPayment={false} />} />
            <Route path="/profile" element={<UserProfile isPayment={false} />} />


          </Routes>
        </main>
        <UserFooter />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
