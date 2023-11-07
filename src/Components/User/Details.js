import React, { useState } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const [status, setStatus] = useState("Pending");

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div id="branding">
            <h1>
              <Link to="/dashboard" className="text-4xl font-extrabold text-yellow-500">
                Parcel<span className="text-yellow-500">Pal</span>
              </Link>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="dashboard.html">Dashboard</a>
              </li>
              <li>
                <a className="current" href="parcel.html">
                  Parcel
                </a>
              </li>
              <li>
                <a href="landing">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-yellow-300 py-8">
        <div className="container mx-auto">
          <div className="detailContainer flex justify-center">
            <div className="detailsForm bg-white shadow-lg p-6 w-96">
              <h2 className="text-2xl font-semibold mb-4">Request Details</h2>
              <hr />
              <p>
                <span className="font-semibold">Request Date</span>: May 22, 2018, 5:00pm
              </p>
              <p>
                <b>Weight</b>: 25kg
              </p>
              <p>
                <b>Amount</b>: #1500
              </p>
              <p>
                <b>Status</b>: {status}
              </p>
              <p>
                <b>Start Point</b>: Hughes Ave, Alagomeji-Yaba, Lagos, Nigeria
              </p>
              <p>
                <b>Destination</b>: 235 Ikorodu Rd, Ilupeju, Lagos, Nigeria
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Results</h2>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => handleChangeStatus("Canceled")}
                >
                  Cancel Order
                </button>
                <button
                  className="bg-blue-800 text-white px-4 py-2 rounded-md"
                  onClick={() => handleChangeStatus("Delivered")}
                >
                  Change Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-yellow-500">
            <span id="trackerText" className="font-semibold">
              Parcel<span className="text-yellow-500">Pal</span>
            </span>
            , Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Details;
