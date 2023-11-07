import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div id="branding">
            <h1>
              <Link to="/dashboard">
                <span className="text-2xl font-extrabold text-yellow-500">
                  Parcel<span className="text-yellow-500">Pal</span>
                </span>
              </Link>
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
                <Link to="/SendParcel">Parcel</Link>
              </li>
              <li>
                <Link to="/AdminDashboard">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="dashboard-login bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-center text-3xl font-semibold">
              Welcome, Your package's new home
            </h1>
            <div className="dashboard grid grid-cols-3 gap-4 mt-4">
              <div className="col">
                <div className="bg-blue-100 rounded p-4">
                  <p className="text-xl font-semibold">All Parcels</p>
                  <h1 className="text-3xl font-bold text-blue-800">1000</h1>
                </div>
              </div>
              <div className="col">
                <div className="bg-orange-100 rounded p-4">
                  <p className="text-xl font-semibold">Processing Parcels</p>
                  <h1 className="text-3xl font-bold text-orange-600">236</h1>
                </div>
              </div>
              <div className="col">
                <div className="bg-green-100 rounded p-4">
                  <p className="text-xl font-semibold">Delivered Parcels</p>
                  <h1 className="text-3xl font-bold text-green-700">764</h1>
                </div>
              </div>
            </div>
            <div className="mt-6" id="textbox">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">All Packages</h2>
                <Link to="/sendparcel">
                  <button className="showDetails text-white bg-yellow-500 px-3 py-1 rounded-lg">
                    Add Parcel
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-yellow-500">
                    <th className="px-4 py-2">Parcel</th>
                    <th className="px-4 py-2">Weight(kg)</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Destination</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-500">
                    <td className="px-4 py-2">Phones</td>
                    <td className="px-4 py-2">50kg</td>
                    <td className="px-4 py-2">Yaba</td>
                    <td className="px-4 py-2">Ikeja</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">Delivered</td>
                    <td className="px-4 py-2">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-3 py-1 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="px-4 py-2">Plates</td>
                    <td className="px-4 py-2">4kg</td>
                    <td className="px-4 py-2">Sabo</td>
                    <td className="px-4 py-2">Badagry</td>
                    <td className="px-4 py-2 text-red-600 font-semibold">Declined</td>
                    <td className="px-4 py-2">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-3 py-1 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500">
                    <td className="px-4 py-2">Ball</td>
                    <td className="px-4 py-2">10kg</td>
                    <td className="px-4 py-2">Yaba</td>
                    <td className="px-4 py-2">Ikorodu</td>
                    <td className="px-4 py-2 text-orange-500 font-semibold">Processing</td>
                    <td className="px-4 py-2">
                      <Link to="/details">
                        <button className="showDetails text-white bg-yellow-500 px-3 py-1 rounded-lg">
                          Show Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                  {/* Add more rows here with respective destination and status values */}
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
