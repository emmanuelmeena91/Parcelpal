import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import NavBar from './Components/Nav/NavBar';

// import AdminLogInPage from './Pages/AdminLogIn';
// import AdminSignUpPage from './Pages/AdminSignUp';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
// import { Tracking } from './Map/Tracking';
import UserFooter from './Components/UserFooter';
// import LandingPage from './Components/Landing-Page/Home';
// import AdminNav from './Pages/AdminNav';
// import { Transaction } from './Pages/Transaction';
// import { AdminHome } from './Pages/AdminHome';
// import { AdminProfile } from './Pages/AdminProfile';
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
          {/* <Route path="/admin-signup" element={<AdminSignUpPage />} /> */}
          {/* <Route path="/admin-login" element={<AdminLogInPage />} /> */}
          {/* <Route path="/" element={<LandingPage />} />      
        <Route path="/transaction" element={<Transaction />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminprofile" element={<AdminProfile />} /> */}
        
        {/* <NavBar />  */}
        {/* <AdminNav/> */}

        



        </Routes>
        <UserFooter />


      </>


    </Router>


  );
}