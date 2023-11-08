import React, { useState } from "react";

const SendParcel = ({ addParcel }) => {
  const [parcelName, setParcelName] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new parcel object with the form data
    const newParcel = {
      parcelName,
      weight,
      location,
      destination,
      // You can add other properties as needed
    };

    // Call the addParcel function from props to update the parcel list
    addParcel(newParcel);

    // Clear the form fields or perform any other necessary actions
    setParcelName("");
    setWeight("");
    setLocation("");
    setDestination("");

    console.log("Form submitted");
  };

  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl">
              <a href="index.html">
                <span id="trackerText">
                  Parcel<span className="text-yellow-500">Pal</span>
                </span>
              </a>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="dashboard" className="text-yellow-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="SendParcel" className="text-yellow-500">
                  Parcel
                </a>
              </li>
              <li>
                <a href="\" className="text-yellow-500">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto">
          <div className="white-login bg-white p-8 rounded-lg">
            <h3 className="text-3xl text-center">Create New Parcel</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="parcel"
                  placeholder="Parcel Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={parcelName}
                  onChange={(e) => setParcelName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="weight"
                  placeholder="Weight(Kg)"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="destination"
                  placeholder="Destination"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <button
                id="buttonSubmit"
                type="submit"
                className="bg-black text-yellow-500 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            <span id="trackerText">
              Parsel<span className="text-yellow-500">Pal</span>
            </span>, Copyright &copy; 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SendParcel;
