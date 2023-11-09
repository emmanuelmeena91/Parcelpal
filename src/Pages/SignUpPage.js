import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridLoaderSpinner from "../Components/GridLoader";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const baseURL = "https://parcelpalserver.onrender.com/";

  const handleTimeout = () => {
    setIsLoading(false);
    toast.error("Server did not respond within 15 seconds. Please try again later.");
  };

  const handleFormSubmit = async (values) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${baseURL}register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      const timeout = setTimeout(() => {
        handleTimeout();
      }, 15000); // 15 seconds

      if (response.ok) {
        clearTimeout(timeout);
        setIsLoading(false);
        toast.success("Registration is successful, Log in to continue", {
          onClose: () => {
            setTimeout(() => {
              navigate("/login");
            }, 4000); // Add a 4-second delay
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
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    phone_number: yup.string().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      phone_number: "",
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
      {/* Main content with sign-up form */}
      <div className="flex flex-col items-center justify-center h-screen bg-opacity-80">
        <h1 className="text-2xl mb-4 text-orange-500">Sign Up</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md bg-orange-500 p-4 rounded shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="first_name">First Name</label>
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
            <label htmlFor="last_name">Last Name</label>
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
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full p-2 border rounded"
              autoComplete="off" // Add this attribute
            />

            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="username">Username</label>
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
            <label htmlFor="password">Password</label>
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
            <label htmlFor="phone_number">Phone Number</label>
            <input
              id="phone_number"
              name="phone_number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <p className="text-red-500">{formik.errors.phone_number}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-300 text-white p-2 rounded cursor-pointer hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 bg-blue-500 border-l">
          Already have an account? <Link to="/login">Login here</Link>
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
