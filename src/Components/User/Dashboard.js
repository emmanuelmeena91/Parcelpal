import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    // Fetch parcels data from your API
    let id = localStorage.getItem('user_id');
    fetch('https://parcelpalserver.onrender.com/parcels/' + id) 
      .then((response) => response.json())
      .then((data) => setParcels(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/321/742/desktop-wallpaper-request-original-xbox-theme-for-new-dashboard-xboxthemes.jpg)' }}>
      <header className="  py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div id="branding" className="text-left">
            <h1>
              <Link to="/dashboard">
                <span className="text-3xl font-extrabold">
                <span className="text-gray-100"> Parcel</span><span className="text-yellow-500">Pal</span>
                </span>
              </Link>
            </h1>
          </div>
          {console.log(parcels)}
          <nav className="text-right bg-transparent ">
            <ul className="flex space-x-4">
              <li>
                <Link to="/dashboard" className="current text-orange-600 text-xl">
                  User
                </Link>
              </li>
              <li>
                <Link to="/sendparcel" className="text-orange-600 text-xl">Parcel</Link>
              </li>
              <li>
                <Link to="/admindashboard" className="text-orange-600 text-xl">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className=" py-8">
        <div className="container mx-auto">
          <div className="dashboard-login  p-4 rounded-lg shadow-md  bg-transparent">
            <div className="name-heading text-center">
              <h1 className="text-3xl font-semibold text-green-600">
                Welcome, jaden wiliams
              </h1>
            </div>     
            <div className="dashboard grid grid-cols-3 gap-4 mt-4">
            <div className="dashboard-stat bg-blue-800 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-100">Total Parcels</h3>
              <p className="text-3xl text-indigo-100">200</p>
            </div>
            <div className="dashboard-stat bg-orange-800 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-100">Delivered Parcels</h3>
              <p className="text-3xl text-indigo-100">140</p>
            </div>
            <div className="dashboard-stat bg-green-800 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-100">Pending Parcels</h3>
              <p className="text-3xl text-indigo-100">6</p>
            </div>
          </div>
            <div className="mt-6" id="textbox">
              <div className="flex justify between items-center">
                <h2 className="text-2xl font-semibold text-indigo-50">All Parcels</h2>
                <Link to="/sendparcel">
                  <button className="showDetails text-gray-900 font-semibold bg-green-600 px-3 py-1 rounded-lg">
                    Add Parcel
                  </button>
                </Link>
              </div>
            </div>
            <div w-full table-auto>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-green-700">
                    <th className="px-4 py-2 text-indigo-50">Parcel</th>
                    <th className="px-4 py-2">Weight(kg)</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Destination</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {parcels.map((parcel) => (
                    <tr key={parcel.id} className="border-b border-gray-500">
                      <td className="px-4 py-2">{parcel.parcel_name}</td>
                      <td className="px-4 py-2">{parcel.weight} kg</td>
                      <td className="px-4 py-2">{parcel.origin}</td>
                      <td className="px-4 py-2">{parcel.destination}</td>
                      <td className={`px-4 py-2 ${parcel.status === "Delivered" ? "text-green-600" : (parcel.status === "Declined" ? "text-red-600" : "text-orange-500")} font-semibold`}>{parcel.status}</td>
                      <td className="px-4 py-2">
                        <Link to={`/details/${parcel.id}`}>
                          <button className="showDetails text-white bg-yellow-500 px-3 py-1 rounded-lg">
                            Show Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="font-semibold">
            Parcel<span className="text-green-700">Pal</span>, Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
