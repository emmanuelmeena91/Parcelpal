 import React from 'react'
 
 export const Tracking = () => {
   return (
    <div>
    <h1 className="text-xl font-bold text-gray-800 mb-12 text-center">Tracking Information</h1>
    <div className="bg-green-500  text-center">
      <p className="text-green-800 font-semibold">Shipped</p>
      <p className="text-xs text-gray-600">Your order has been shipped and is on its way.</p>
    </div>
    <div className="bg-yellow-500 p-1 rounded-md my-1 text-center">
      <p className="text-yellow-900 font-semibold">In Transit</p>
      <p className="text-xs text-gray-600">Your package is currently in transit.</p>
    </div>
    <div className="bg-red-300 p-1 rounded-md my-1 text-center">
      <p className="text-red-800 font-semibold">Out for Delivery</p>
      <p className="text-xs text-gray-600">Your package is out for delivery today.</p>
    </div>
    <div className="bg-blue-600 p-1 rounded-md text-center">
      <p className="text-blue-200 font-semibold">Delivered</p>
      <p className="text-xs text-gray-800">Your package has been successfully delivered.</p>
    </div>
  </div>
   )
 }
 