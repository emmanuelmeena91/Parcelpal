import React, { useState } from "react";

const SendParcel = () => {
  const [parcelName, setParcelName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState(0);

  const handleWeightChange = (e) => {
    const enteredWeight = e.target.value;
    const rate = 200;

    if (!enteredWeight || isNaN(enteredWeight)) {
      setWeight("");
      setPrice(0);
    } else {
      const calculatedPrice = parseFloat(enteredWeight) * rate;
      setWeight(enteredWeight);
      setPrice(calculatedPrice);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the parcel data to the backend or perform any necessary action
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/321/742/desktop-wallpaper-request-original-xbox-theme-for-new-dashboard-xboxthemes.jpg)' }}>
    <header className=" text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl">
              <a href="Dashboard">
                <span id="trackerText">
                  Parcel<span className="text-orange-600">Pal</span>
                </span>
              </a>
            </h1>
          </div>
          <nav className="bg-transparent">
            <ul className="flex space-x-4 ">
              <li>
                <a href="dashboard" className="text-orange-600 text-xl">
                  User
                </a>
              </li>
              <li>
                <a href="SendParcel" className="text-orange-600 text-xl">
                  Parcel
                </a>
              </li>
              <li>
                <a href="/" className="text-orange-600  text-xl">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex justify-center items-center">
        <div className="bg-green-00 rounded-lg shadow-lg p-6 w-1/3">
          <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Send Parcel</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="parcelName" className="block text-gray-100 text-lg mb-2">
                Parcel Name
              </label>
              <input
                type="text"
                id="parcelName"
                placeholder="Enter Parcel Name"
                className="w-full px-4 py-2 border border-gray-100rounded-lg focus:outline-none focus:ring focus:ring-green-600 text-lg"
                value={parcelName}
                onChange={(e) => setParcelName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="receiverName" className="block text-gray-100 text-lg mb-2">
                Receiver Name
              </label>
              <input
                type="text"
                id="receiverName"
                placeholder="Enter Receiver's Name"
                className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNo" className="block text-gray-100 text-lg mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNo"
                placeholder="Enter Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-600 text-lg"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-gray-100 text-lg mb-2">
                Weight (kg)
              </label>
              <input
                type="text"
                id="weight"
                placeholder="Enter Weight in kilograms"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="origin" className="block text-gray-100 text-lg mb-2">
                Origin
              </label>
              <input
                type="text"
                id="origin"
                placeholder="Enter Origin"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="destination" className="block text-gray-100 text-lg mb-2">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Enter Destination"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="price" className="block text-gray-100 text-lg mb-2">
                Price (Ksh)
              </label>
              <input
                type="text"
                id="price"
                placeholder="Price will be calculated"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500 text-lg"
                value={price}
                readOnly
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-900 text-lg"
            >
              Send Parcel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendParcel;
