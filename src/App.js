import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import AppRouter from './Components/User/AppRouter';
import Home from './Components/Landing-Page/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminSignUpPage from './Pages/AdminSignUp';
import AdminLoginPage from './Pages/AdminLogIn';
import Landing from './Components/Landing-Page/Landing';
import HomePage from './Components/Landing-Page/HomePage';
export default function App() {
  return (
    <Router>
      <>
        <Home />
        <AppRouter />
        <Routes>
       
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/adminsignup" element={<AdminSignUpPage />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
        </Routes>
      </>
    </Router>
  );
}
