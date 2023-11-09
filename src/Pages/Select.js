import React from 'react'
import { NavLink } from "react-router-dom";

export const Select = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: 'url("https://img.lovepik.com/background/20211022/medium/lovepik-light-effect-atmospheric-gold-powder-background-image_605806949.jpg")' }}>
      <div className="h-full flex flex-col justify-center items-center bg-opacity-80">
        <h2 className="text-2xl font-semibold mb-8 text-white">Welcome! Please choose your role to proceed.</h2>
        <div className="sendParcelButton mb-4">
          <NavLink to="/signup" className="text-blue-500">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
              Sign in as User
            </button>
          </NavLink>
        </div>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <h1 className="text-center text-lg font-semibold mx-4 text-white">OR</h1>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="sendParcelButton">
          <NavLink to="/adminsignup" className="text-blue-500">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
              Sign in as Admin
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
