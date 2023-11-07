import React from 'react'
import { NavLink } from "react-router-dom";

export const Select = () => {
  return (
<div className="flex flex-col items-center">
  <div className="sendParcelButton mb-4">
    <NavLink to="/signup" className="text-blue-500">
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg">
        USER
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
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg">
        ADMIN
      </button>
    </NavLink>
  </div>
</div>
  )
}
