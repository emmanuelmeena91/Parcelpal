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
    <div
    className="bg-cover bg-center bg-no-repeat min-h-screen flex justify-center items-center"
    style={{ backgroundImage: 'url("https://img.lovepik.com/background/20211022/medium/lovepik-light-effect-atmospheric-gold-powder-background-image_605806949.jpg")' }}
  >      <div className="bg--900 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-orange-500 mb-6">SendParcel</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="parcelName" className="block text-orange-500 text-lg mb-2">
              Parcel Name
            </label>
            <input
              type="text"
              id="parcelName"
              placeholder="Enter Parcel Name"
              className="w-full px-4 py-2 border border-orange-500 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={parcelName}
              onChange={(e) => setParcelName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="receiverName" className="block text-orange-500 text-lg mb-2">
              Receiver Name
            </label>
            <input
              type="text"
              id="receiverName"
              placeholder="Enter Receiver's Name"
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-orange-500 text-lg mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNo"
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-orange-500 text-lg mb-2">
              Weight (kg)
            </label>
            <input
              type="text"
              id="weight"
              placeholder="Enter Weight in kilograms"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pickup" className="block text-orange-500 text-lg mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickup"
              placeholder="Enter Pickup Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-orange-500 text-lg mb-2">
              Destination Location
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Enter Destination Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="totalCost" className="block text-orange-500 text-lg mb-2">
              Total Cost (Ksh)
            </label>
            <input
              type="text"
              id="totalCost"
              placeholder="Total cost will be calculated"
              className=" text-whitew-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
              value={totalCost}
              readOnly
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          >
            Send Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
