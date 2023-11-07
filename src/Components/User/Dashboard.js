import React, { useState } from "react";
import { Link } from "react-router-dom";
import SendParcel from "./SendParcel"; // Import the SendParcel component

const Dashboard = () => {
  const [parcels, setParcels] = useState([]);
  // Function to add a new parcel to the list
  const addParcel = (newParcel) => {
    setParcels([...parcels, newParcel]);
  };


  return (
 
    <div>
      <SendParcel addParcel={addParcel} />

      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div id="branding">
            <h1>
              <a href="index.html">
                <span className="text-4xl font-extrabold text-yellow-500">
                  Parcel<span className="text-yellow-500">Pal</span>
                </span>
              </a>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/dashboard" className="current">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/parcel">Parcel</Link>
              </li>
              <li>
                <Link to="/admin_dashboard">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="dashboard-login bg-white p-8 rounded-lg">
            <h1 className="text-center text-3xl font-semibold">
              Welcome, Your package's new home
            </h1>
            <div className="dashboard grid grid-cols-3 gap-4 mt-8">
              <div className="col white-bg p-4 rounded-lg shadow-md">
                <p className="allparcels text-2xl font-semibold">All Parcels</p>
                <h1 className="allparcels text-4xl font-bold text-blue-800">
                  1000
                </h1>
              </div>
              <div className="col white-bg p-4 rounded-lg shadow-md">
                <p className="processing text-2xl font-semibold">Processing Parcels</p>
                <h1 className="processing text-4xl font-bold text-orange-600">
                  236
                </h1>
              </div>
              <div className="col white-bg p-4 rounded-lg shadow-md">
                <p className="delivered text-2xl font-semibold">Delivered Parcels</p>
                <h1 className="delivered text-4xl font-bold text-green-700">
                  764
                </h1>
              </div>
            </div>
            <div className="mt-8" id="textbox">
              <h2 className="alignleft text-2xl font-semibold">All Packages</h2>
              <h6 className="alignright">
                <a id="addIcon" href="/sendparcel">
                  <i className="fas fa-plus fa-2x text-yellow-500"></i>
                </a>
              </h6>
            </div>
            <div className="clearAlignment"></div>
            <div id="tableContainer" className="mt-4">
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-yellow-500">
                    <th className="py-2 px-4 font-semibold">Parcel</th>
                    <th className="py-2 px-4 font-semibold">Weight(kg)</th>
                    <th className="py-2 px-4 font-semibold">Location</th>
                    <th className="py-2 px-4 font-semibold">Destination</th>
                    <th className="py-2 px-4 font-semibold">Status</th>
                    <th className="py-2 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Phones</td>
                    <td className="py-2 px-4">50kg</td>
                    <td className="py-2 px-4">Yaba</td>
                    <td className="py-2 px-4">Ikeja</td>
                    <td className="py-2 px-4 text-green-600 font-semibold">Delivered</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Tablet</td>
                    <td className="py-2 px-4">12kg</td>
                    <td className="py-2 px-4">Ikorodu</td>
                    <td className="py-2 px-4">Victoria Island</td>
                    <td className="py-2 px-4 text-orange-500 font-semibold">Processing</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Laptop</td>
                    <td className="py-2 px-4">15kg</td>
                    <td className="py-2 px-4">Surulere</td>
                    <td className="py-2 px-4">Ajah</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">Canceled</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Camera</td>
                    <td className="py-2 px-4">3kg</td>
                    <td className="py-2 px-4">Apapa</td>
                    <td className="py-2 px-4">Ikorodu</td>
                    <td className="py-2 px-4 text-green-600 font-semibold">Delivered</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Headphones</td>
                    <td className="py-2 px-4">1kg</td>
                    <td className="py-2 px-4">Ikeja</td>
                    <td className="py-2 px-4">Yaba</td>
                    <td className="py-2 px-4 text-orange-500 font-semibold">Processing</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="py-2 px-4">Smartwatch</td>
                    <td className="py-2 px-4">0.5kg</td>
                    <td className="py-2 px-4">Lekki</td>
                    <td className="py-2 px-4">Ikoyi</td>
                    <td className="py-2 px-4 text-orange-500 font-semibold">Processing</td>
                    <td className="py-2 px-4">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-4 py-2 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

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

export default Dashboard;
