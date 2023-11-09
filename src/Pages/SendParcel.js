import React, { useState } from "react";

const SendParcel = () => {
  const [parcelName, setParcelName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [weight, setWeight] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  const handleWeightChange = (e) => {
    const enteredWeight = e.target.value;
    const rate = 200;

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
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-yellow-300 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6 text-black">
        SendParcel
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="parcelName" className="block font-medium text-black mb-2 text-lg">
            Parcel Name
          </label>
          <input
            type="text"
            id="parcelName"
            placeholder="Parcel Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={parcelName}
            onChange={(e) => setParcelName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="receiverName" className="block font-medium text-black mb-2 text-lg">
            Receiver Name
          </label>
          <input
            type="text"
            id="receiverName"
            placeholder="Receiver's name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNo" className="block font-medium text-black mb-2 text-lg">
            Phone No
          </label>
          <input
            type="text"
            id="phoneNo"
            placeholder="Phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block font-medium text-black mb-2 text-lg">
            Weight (kg)
          </label>
          <input
            type="text"
            id="weight"
            placeholder="Weight in kilograms"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickup" className="block font-medium text-black mb-2 text-lg">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickup"
            placeholder="Pickup location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block font-medium text-black mb-2 text-lg">
            Destination Location
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Destination location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="totalCost" className="block font-medium text-black mb-2 text-lg">
            Total Cost (Ksh)
          </label>
          <input
            type="text"
            id="totalCost"
            placeholder="Total cost will be calculated"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 text-lg"
            value={totalCost}
            readOnly
          />
        </div>
        <button
          type="submit"
          className="bg-black text-yellow-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
        >
          Send Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
