import React, { useState } from "react";

const AdminDashboard = () => {
  const [parcelStatus, setParcelStatus] = useState({
    one: "Delivered",
    two: "Declined",
    three: "Processing",
    four: "Delivered",
    five: "Declined",
    six: "Processing",
    seven: "Canceled",
  });

  const getStatus = (id, event) => {
    const newStatus = event.target.value;
    setParcelStatus({ ...parcelStatus, [id]: newStatus });
  };

  return (
    <div className="bg-gray-200">
      <header className="bg-yellow-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="index.html">
              <span className="font-sunflower">Parcel<span className="text-gray-900">Pal</span></span>
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a className="hover:text-yellow-500" href="admin_dashboard.html">
                  Admin
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-500" href="dashboard.html">
                  User
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-500" href="index.html">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Welcome, Admin</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">Processing Parcels</p>
              <h1 className="text-2xl text-blue-500 font-bold">859</h1>
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">Delivered Parcels</p>
              <h1 className="text-2xl text-green-500 font-bold">3594</h1>
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">All Parcels</p>
              <h1 className="text-2xl text-yellow-500 font-bold">4453</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">All Users</p>
              <h1 className="text-2xl text-red-500 font-bold">50</h1>
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">Available Transit</p>
              <h1 className="text-2xl text-purple-500 font-bold">5</h1>
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-gray-600">Declined Parcels</p>
              <h1 className="text-2xl text-pink-500 font-bold">10</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">All Packages</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full mx-auto border-collapse border border-gray-500 max-w-5xl">
              <thead>
                <tr className="bg-yellow-500">
                  <th className="py-2 px-4 font-semibold">Parcel</th>
                  <th className="py-2 px-4 font-semibold">Weight(kg)</th>
                  <th className="py-2 px-4 font-semibold">Location</th>
                  <th className="py-2 px-4 font-semibold">Destination</th>
                  <th className="py-2 px-4 font-semibold">Status</th>
                  <th className="py-2 px-4 font-semibold">Change Destination</th>
                  <th className="py-2 px-4 font-semibold">Change Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-500">
                  <td>&nbsp;</td>
                  <td>Phones</td>
                  <td>50kg</td>
                  <td>Yaba</td>
                  <td>
                    <span className={parcelStatus.one === "Delivered" ? "text-green-600 font-bold" : (parcelStatus.one === "Processing" ? "text-yellow-600 font-bold" : "text-red-600 font-bold")}>
                      {parcelStatus.one}
                    </span>
                  </td>
                  <td id="one">
                    <a href="">
                      <button className="bg-gray-400 text-white py-1 px-3 hover:bg-yellow-500">
                        Change
                      </button>
                    </a>
                  </td>
                  <td>
                    <select
                      className="select-button"
                      id="statusOne"
                      onChange={(e) => getStatus("one", e)}
                      value={parcelStatus.one}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td>&nbsp;</td>
                  <td>Tablet</td>
                  <td>30kg</td>
                  <td>Lagos</td>
                  <td>
                    <span className={parcelStatus.six === "Delivered" ? "text-green-600 font-bold" : (parcelStatus.six === "Processing" ? "text-yellow-600 font-bold" : "text-red-600 font-bold")}>
                      {parcelStatus.six}
                    </span>
                  </td>
                  <td id="six">
                    <a href="">
                      <button className="bg-gray-400 text-white py-1 px-3 hover-bg-yellow-500">
                        Change
                      </button>
                    </a>
                  </td>
                  <td>
                    <select
                      className="select-button"
                      id="statusSix"
                      onChange={(e) => getStatus("six", e)}
                      value={parcelStatus.six}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td>&nbsp;</td>
                  <td>Laptops</td>
                  <td>5kg</td>
                  <td>Ikeja</td>
                  <td>
                    <span className={parcelStatus.seven === "Delivered" ? "text-green-600 font-bold" : (parcelStatus.seven === "Processing" ? "text-yellow-600 font-bold" : "text-red-600 font-bold")}>
                      {parcelStatus.seven}
                    </span>
                  </td>
                  <td id="seven">
                    <a href="">
                      <button className="bg-gray-400 text-white py-1 px-3 hover-bg-yellow-500">
                        Change
                      </button>
                    </a>
                  </td>
                  <td>
                    <select
                      className="select-button"
                      id="statusSeven"
                      onChange={(e) => getStatus("seven", e)}
                      value={parcelStatus.seven}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                </tr>
                {/* Add more rows for additional parcels */}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-2">
        <p>
          <span className="font-sunflower">Parcel<span className="text-yellow-500">Pal</span></span>, Copyright &copy; 2023
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
