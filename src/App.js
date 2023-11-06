import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import UserFooter from './Components/UserFooter';
import AppRouter from './Components/User/AppRouter';
import Home from './Components/Landing-Page/Home';
  


export default function App() {
  return (
    <Router>
      <>
      <Home />
     < AppRouter/>        
        <Routes> 
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
        <UserFooter />
      </>
    </Router>
  );
}