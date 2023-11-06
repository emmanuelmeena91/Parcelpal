import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserFooter from './UserFooter';
import NavBar from '../Nav/NavBar';
import HomePage from './HomePage';
import CarouselWithContent from './Carousel';
import Tracking from "./Tracking";
import  SendParcel from '../../Pages/SendParcel';
import { UserProfile } from "./UserProfile";
import  Payment  from './Payment';
import  DeliveryDetails  from './DeliveryDetails';


const AppRouter = () => {
  return (
      <div>
        <NavBar />
        <CarouselWithContent />
        <main>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index path="/parcel" element={<HomePage />} />
          <Route path="/sendparcel" element={<SendParcel />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<DeliveryDetails />} />

          </Routes>
        </main>
        {/* <UserFooter /> */}
      </div>
  );
};

export default AppRouter;
