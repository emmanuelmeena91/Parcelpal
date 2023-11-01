import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ProfilePage } from './Pages/ProfilePage';
import { SendParcelPage } from './Pages/SendParcelPage';
import { ContactPage } from './Pages/ContactPage';
import AdminLogInPage from './Pages/AdminLogIn';
import AdminSignUpPage from './Pages/AdminSignUp';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';

export default function App() {
  return (
    <Router>
      <>
        <NavBar /> 
        <Routes> 
          <Route index path="/parcel" element={<HomePage />} />
          <Route path="/sendparcel" element={<SendParcelPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admin-signup" element={<AdminSignUpPage />} />
          <Route path="/admin-login" element={<AdminLogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </>
    </Router>
  );
}