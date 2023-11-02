import React, { useState } from "react";
const DeliveryDetails = () => {
  const [receiverName, setReceiverName] = useState("Alex");
  const [phoneNo, setPhoneNo] = useState("0712345678");
  const [weight, setWeight] = useState("150");
  const [pickup, setPickup] = useState("Ngong");
  const [destination, setDestination] = useState("Westlands");
  const [totalCost, setTotalCost] = useState(400); // Set the initial total cost to 400

  const handleWeightChange = (e) => {
    const enteredWeight = e.target.value;
    const rate = 200; // Rate per 1kg

    if (!enteredWeight || isNaN(enteredWeight)) {
      setWeight("");
      setTotalCost(0);
    } else {
      const calculatedCost = parseFloat(enteredWeight) * rate;
      setWeight(enteredWeight);
      setTotalCost(calculatedCost);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted");
  };

  const handleCancelOrder = () => {
    // Handle cancel order logic here
    console.log("Order canceled");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-yellow-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6 text-black">
        Delivery Details
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="receiverName" className="block font-semibold mb-2 text-gray-700">
            Receiver Name
          </label>
          <input
            type="text"
            id="receiverName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={receiverName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNo" className="block font-semibold mb-2 text-gray-700">
            Phone No
          </label>
          <input
            type="text"
            id="phoneNo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={phoneNo}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block font-semibold mb-2 text-gray-700">
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={weight}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickup" className="block font-semibold mb-2 text-gray-700">
            Pick Up
          </label>
          <input
            type="text"
            id="pickup"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={pickup}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block font-semibold mb-2 text-gray-700">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={destination}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label htmlFor="totalCost" className="block font-semibold mb-2 text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="totalCost"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            value={totalCost}
            readOnly
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-yellow-600 text-white px-4 py-2 rounded-md w-1/2 focus:outline-none hover:bg-green-600 focus:ring-2 focus:ring-green-500"
          >
            New Parcel
          </button>
          <div className="w-4"></div> {/* Adds space between buttons */}
          <button
            type="button"
            onClick={handleCancelOrder}
            className="bg-red-600 text-white px-4 py-2 rounded-md w-1/2 focus:outline-none hover:bg-red-700 focus:ring-2 focus:ring-red-500"
          >
            Cancel Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryDetails;
