import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://parcelpalserver.onrender.com/parcels/`)
        .then((response) => response.json())
        .then((data) => setParcels(data.parcels))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error('Error fetching parcels:', error);
    }
  }, []);

  const getStatus = (id, event) => {
    const newStatus = event.target.value;

    // Update the status for the specific parcel
    const updatedParcels = parcels.map((parcel) =>
      parcel.id === id ? { ...parcel, status: newStatus } : parcel
    );

    setParcels(updatedParcels);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/321/742/desktop-wallpaper-request-original-xbox-theme-for-new-dashboard-xboxthemes.jpg)' }}>
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1>
              <Link to="/admindashboard">
                <span className="text-3xl font-extrabold">
                  <span className="text-gray-100">Parcel</span>
                  <span className="text-yellow-500">Pal Admin</span>
                </span>
              </Link>
            </h1>
          </div>
          <nav className="bg-transparent">
            <ul className="flex space-x-4">
              <li>
                <Link to="/admindashboard" className="current text-orange-600 text-xl">
                  Admin 
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-orange-600 text-xl">
                  User 
                </Link>
              </li>
              <li>
                <Link to="/sendparcel" className="text-orange-600 text-xl">
                  Parcel
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-green-600">Welcome, Admin</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="dashboard-stat  p-4 rounded-lg shadow-md bg-yellow-800">
              <p className="text-gray-50 ">Processing Parcels</p>
              <h1 className="text-2xl text-indigo-50 font-bold">859</h1>
            </div>
            <div className="dashboard-stat bg-green-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-50">Delivered Parcels</p>
              <h1 className="text-2xl text-green-50 font-bold">3594</h1>
            </div>
            <div className="dashboard-stat bg-blue-900 p-4 rounded-lg shadow-md">
              <p className="text-gray-50">All Parcels</p>
              <h1 className="text-2xl text-yellow-50 font-bold">4453</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="dashboard-stat bg-blue-900 p-4 rounded-lg shadow-md">
              <p className="text-gray-50">All Users</p>
              <h1 className="text-2xl text-red-50 font-bold">50</h1>
            </div>
            <div className="dashboard-stat bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-50">Available Transit</p>
              <h1 className="text-2xl text-purple-50 font-bold">5</h1>
            </div>
            <div className="dashboard-stat bg-red-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-50">Declined Parcels</p>
              <h1 className="text-2xl text-pink-50 font-bold">10</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-green-50">All Admin Parcels</h2>
          <div className="w-full overflow-x-auto ">
            <table className="w-full mx-auto border-collapse border border-gray-500 max-w-7xl">
              <thead>
                <tr className="bg-green-700">
                  <th className="py-2 px-4 font-semibold">Parcel</th>
                  <th className="py-2 px-4 font-semibold">Weight(kg)</th>
                  <th className="py-2 px-4 font-semibold">Origin</th>
                  <th className="py-2 px-4 font-semibold">Destination</th>
                  <th className="py-2 px-4 font-semibold">Status</th>
                 
                  <th className="py-2 px-4 font-semibold">Change Status</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel) => (
                  <tr key={parcel.id} className="border-b border-gray-500">
                    <td>&nbsp;</td>
                    <td className="text-green-50 ">{parcel.parcel_name}</td>
                    <td className="text-green-50 ">{parcel.weight} kg</td>
                    <td className="text-green-50 ">{parcel.origin}</td>
                    <td>
                      <span
                        className={
                          parcel.status === "Delivered"
                            ? "text-gray-200 font-bold"
                            : parcel.status === "Processing"
                            ? "text-gray-200 font-bold"
                            : "text-gray-200 font-bold"
                        }
                      >
                        {parcel.status}
                      </span>
                    </td>
                  
                    <td>
                      <select
                        className="select-button"
                        id={`status${parcel.id}`}
                        onChange={(e) => getStatus(parcel.id, e)}
                        value={parcel.status}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer className="bg-green-700 text-white text-center py-2">
        <p>
          <span className="font-sunflower">
            Parcel<span className="text-yellow-500">Pal</span>
          </span>
          , Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
