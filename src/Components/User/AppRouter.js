import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import HomePage from './HomePage';
import CarouselWithContent from './Carousel';
import Tracking from "./Tracking";
import SendParcel from './SendParcel';
import { UserProfile } from "./UserProfile";
// import DeliveryDetails from './DeliveryDetails';
import Dashboard from "./Dashboard";
import Details from "./Details";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      {/* <CarouselWithContent /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendparcel" element={<SendParcel />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
