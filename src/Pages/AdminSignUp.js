import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridLoaderSpinner from "../Components/GridLoader";

export default function AdminSignUpPage() {
  const adminSecretKey = '7sXOHoe6RUJTNqNEEyIORR3pBAmoRCUi';
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const baseURL = 'https://parcelpalserver.onrender.com';

  const handleTimeout = () => {
    setIsLoading(false);
    toast.error("Server did not respond within 15 seconds. Please try again later.");
  };

  const handleFormSubmit = async (values) => {
    const { special_key, ...rest } = values;
    setIsLoading(true);

    if (special_key !== adminSecretKey) {
      toast.error("Access Denied: Invalid special key");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${baseURL}/adminRegister/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rest), // Sending rest of the values without special_key
      });

      const timeout = setTimeout(() => {
        handleTimeout();
      }, 15000);

      if (response.ok) {
        clearTimeout(timeout);
        setIsLoading(false);
        toast.success("Registration is successful, Log in to continue", {
          onClose: () => {
            setTimeout(() => {
              navigate("/Admindashboard");
            }, 4000);
          },
        });
      } else if (response.status === 500) {
        toast.error("Internal server error. Please try again later.");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Network error:", error);

      if (error.response && error.response.status === 400) {
        toast.error("Username or email already exists.");
      } else {
        toast.error("Network error. Please try again later.");
      }
      setIsLoading(false);
    }
  };

  const formSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    special_key: yup.string().required("Access key is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      special_key: "",
    },
    validationSchema: formSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url('https://img.lovepik.com/background/20211022/medium/lovepik-light-effect-atmospheric-gold-powder-background-image_605806949.jpg')`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen bg-opacity-80">
        <h1 className="text-2xl mb-4 text-orange-500">Admin Sign Up</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md bg-orange-500 p-4 rounded shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="first_name" className="text-white">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <p className="text-red-500">{formik.errors.first_name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="text-white">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <p className="text-red-500">{formik.errors.last_name}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500">{formik.errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="special_key" className="text-white">
              Access Key
            </label>
            <input
              id="special_key"
              name="special_key"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.special_key}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.special_key && formik.errors.special_key && (
              <p className="text-red-500">{formik.errors.special_key}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-300 text-white p-2 rounded hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 bg-blue-500 border-l text-white p-2">
          Already have an admin account? <Link to="/adminlogin">Login here</Link>
        </p>
      </div>

      {isLoading && (
        <div className="overlay">
          <GridLoaderSpinner />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
