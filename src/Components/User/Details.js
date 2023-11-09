import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [parcelDetails, setParcelDetails] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [loading, setLoading] = useState(true); // Added loading state
  const { id } = useParams();

  useEffect(() => {
    // Fetch parcel details based on the id parameter
    fetch(`https://parcelpalserver.onrender.com/parcels/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setParcelDetails(data.parcel);
        setStatus(data.parcel.status);
        setLoading(false); // Set loading to false after data is received
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  const handleChangeStatus = (newStatus) => {
    // Update the status in the database
    fetch(`https://parcelpalserver.onrender.com/parcels/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the status in the state
        setStatus(data.parcel.status);
      })
      .catch((error) => console.error(error));
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="current" to="/sendparcel">
                  Parcel
                </Link>
              </li>
              <li>
                <Link to="/landing">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-yellow-300 py-8">
        <div className="container mx-auto">
          <div className="detailContainer flex justify-center">
            <div className="detailsForm bg-white shadow-lg p-6 w-96">
              <h2 className="text-2xl font-semibold mb-4">Parcel Details</h2>
              <hr />
              {loading ? (
                <p>Loading...</p>
              ) : parcelDetails ? (
                <>
                  <p>
                    <span className="font-semibold">Request Date</span>: {parcelDetails.created_at}
                  </p>
                  <p>
                    <b>Weight</b>: {parcelDetails.weight} kg
                  </p>
                  <p>
                    <b>Amount</b>: {parcelDetails.price}
                  </p>
                  <p>
                    <b>Status</b>: {parcelDetails.status}
                  </p>
                  <p>
                    <b>Origin</b>: {parcelDetails.origin}
                  </p>
                  <p>
                    <b>Destination</b>: {parcelDetails.destination}
                  </p>
                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Results</h2>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md mr-2"
                      onClick={() => handleChangeStatus("Canceled")}
                    >
                      Cancel Order
                    </button>
                    {/* <button
                      className="bg-blue-800 text-white px-4 py-2 rounded-md"
                      onClick={() => handleChangeStatus("Delivered")}
                    >
                      Change Destination
                    </button> */}
                  </div>
                </>
              ) : (
                <p>No data available</p>
              )}
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