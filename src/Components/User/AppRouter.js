import React from "react";
import { Routes, Route } from 'react-router-dom';
import Tracking from "./Tracking";
import SendParcel from './SendParcel';
import { UserProfile } from "./UserProfile";
import Dashboard from "./Dashboard";
import Details from "./Details";

const AppRouter = () => {
  return (
    <div>
      {/* <NavBar /> */}
     {/* < Dashboard /> */}
      {/* <CarouselWithContent /> */}
      <main>
        <Routes>
          {/* <Route path="/Home" element={<HomePage />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendparcel" element={<SendParcel />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/details/:id" component={Details} />      
          </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
