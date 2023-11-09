import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridLoaderSpinner from "../GridLoader";

const SendParcel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const baseURL = "https://parcelpalserver.onrender.com/";

  const handleTimeout = () => {
    setIsLoading(false);
    toast.error("Server did not respond within 15 seconds. Please try again later.");
  };

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    const user_id = localStorage.getItem('user_id');
    const price = Math.floor(Math.random() * 3500) + 1;
    console.log(JSON.stringify({
      ...values,
      user: parseInt(user_id), 
      price: price, 
      status:"Pending",
    }),    )

    try {
      const response = await fetch(`${baseURL}parcels/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          user: user_id, 
          price: price, 
          status:"Pending",
        }),      
      });

      const data = await response.json();

      const timeout = setTimeout(() => {
        handleTimeout();
      }, 15000); // 15 seconds

      if (response.ok) {
        clearTimeout(timeout);
        setIsLoading(false);
        toast.success("Parcel submition is successful.", {
          onClose: () => {
            setTimeout(() => {
              navigate("/Dashboard");
            }, 4000); 
          },
        });
      } else if (response.status === 500) {
        toast.error("Internal server error. Please try again later.");
      } else {
        toast.error(`Something went wrong: ${data.detail}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formSchema = yup.object().shape({
    parcel_name: yup.string().required("Parcel name is required"),
    destination: yup.string().required("Destination is required"),
    origin: yup.string().required("Origin is required"),
    weight: yup.number().required("Weight is required"),
  });

  const formik = useFormik({
    initialValues: {
      parcel_name: "",
      destination: "",
      origin: "",
      weight: "",
    },
    validationSchema: formSchema,
    onSubmit: handleFormSubmit,
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="parcel_name" className="block text-gray-100 text-lg mb-2">
                Parcel Name
              </label>
              <input
                id="parcel_name"
                name="parcel_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.parcel_name}
                placeholder="Enter Parcel Name"
                className="w-full px-4 py-2 border border-gray-100rounded-lg focus:outline-none focus:ring focus:ring-green-600 text-lg"
              />
              {formik.touched.parcel_name && formik.errors.parcel_name && (
                <p className="text-red-500">{formik.errors.parcel_name}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="origin" className="block text-gray-100 text-lg mb-2">
                Origin
              </label>
              <input
                id="origin"
                name="origin"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.origin}
                placeholder="Enter Origin"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
              />
              {formik.touched.origin && formik.errors.origin && (
                <p className="text-red-500">{formik.errors.origin}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="destination" className="block text-gray-100 text-lg mb-2">
                Destination
              </label>
                  <input
                id="destination"
                name="destination"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.destination}
                placeholder="Enter Destination"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
              />
              {formik.touched.destination && formik.errors.destination && (
                <p className="text-red-500">{formik.errors.destination}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-gray-100 text-lg mb-2">
                Weight (kg)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.weight}
                placeholder="Enter Weight in kilograms"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-100 text-lg"
              />
              {formik.touched.weight && formik.errors.weight && (
                <p className="text-red-500">{formik.errors.weight}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-900 text-lg"
            >
              Send Parcel
            </button>
          </form>
          {isLoading && (
        <div className="overlay">
          <GridLoaderSpinner />
        </div>
      )}
      <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SendParcel;
