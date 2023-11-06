import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  HomePage  from './Components/User/HomePage';
import  SendParcel from './Pages/SendParcel';
import AdminLogInPage from './Pages/AdminLogIn';
import AdminSignUpPage from './Pages/AdminSignUp';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import  DeliveryDetails  from './Components/User/DeliveryDetails';
import { Tracking } from './Map/Tracking';
import  Payment  from './Components/User/Payment';
import UserFooter from './Components/UserFooter';
import LandingPage from './Components/Landing-Page/HomePage';
import { UserProfile } from "./Components/User/UserProfile";
import AdminNav from './Pages/AdminNav';
import { Transaction } from './Pages/Transaction';
import { AdminHome } from './Pages/AdminHome';
import { AdminProfile } from './Pages/AdminProfile';
import CarouselWithContent from './Components/User/Carousel';
  


export default function App() {
  return (
    <Router>
      <>
      <LandingPage />
        {/* <CarouselWithContent/> */}
     
        {/* <AdminNav/> */}
        
       
        <Routes> 
          
          <Route index path="/parcel" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="/sendparcel" element={<SendParcel />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admin-signup" element={<AdminSignUpPage />} />
          <Route path="/admin-login" element={<AdminLogInPage />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<DeliveryDetails />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route index path="/home" element={<CarouselWithContent/>} />
          <Route index path="/adminhome" element={<CarouselWithContent/>} />


        </Routes>

      </>

      <UserFooter />

    </Router>

  );
}
