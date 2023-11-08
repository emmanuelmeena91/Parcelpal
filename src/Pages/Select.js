import React from 'react'
import { NavLink } from "react-router-dom";

export const Select = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-8">Welcome! Please choose your role to proceed.</h2>
      <div className="sendParcelButton mb-4">
        <NavLink to="/signup" className="text-blue-500">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Sign in as User
          </button>
        </NavLink>
      </div>
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-300" />
        <h1 className="text-center text-lg font-semibold mx-4">OR</h1>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div className="sendParcelButton">
        <NavLink to="/adminsignup" className="text-blue-500">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Sign in as Admin
          </button>
        </NavLink>
      </div>
    </div>
  )
}
