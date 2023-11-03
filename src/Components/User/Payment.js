import React, { useState } from "react";

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="max-w-md mx-auto p-6  bg-yellow-300 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-black">
          Send Money</h1>

      <div>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-semibold mb-2 text-gray-700">
            Amount (Ksh)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-semibold mb-2 text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button
          className="bg-black text-yellow-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
          >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Payment;
