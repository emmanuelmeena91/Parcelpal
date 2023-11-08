import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import AppRouter from './Components/User/AppRouter';
import Home from './Components/Landing-Page/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminSignUpPage from './Pages/AdminSignUp';
import AdminLoginPage from './Pages/AdminLogIn';

export default function App() {
  return (
    <Router>
      <>
      <Home />
     < AppRouter/>        
        <Routes> 
        {/* <Route path="/" element={<Home />} /> Set the default route to Home */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/adminsignup"HomePage element={<AdminSignUpPage />} />
          <Route path="/adminlogin"HomePage element={<AdminLoginPage />} />
          


        </Routes>
      </>
    </Router>
  );
}