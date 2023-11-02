import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { LogInPage } from './Pages/LogInPage';
import { ProfilePage } from './Pages/ProfilePage';
import { SendParcelPage } from './Pages/SendParcelPage';
import { SignUpPage } from './Pages/SignUpPage';
import { ContactPage } from './Pages/ContactPage';
import { Details } from './Pages/Details';
import { Tracking } from './Map/Tracking';
import { Payment } from './Pages/Payment';



export default function App() {
  return (
    <Router>
      <>
        <NavBar /> 
        <Routes> 
          <Route index path="/parcel" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="/sendparcel" element={<SendParcelPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sendparcel" element={<SendParcelPage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<Details />} />



        </Routes>
      </>
    </Router>
  );
}