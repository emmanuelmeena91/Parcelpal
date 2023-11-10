import { useState } from "react";
import '../Css/SignUpPage.css';
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
    <>
      <div className="signUpBackgroundDiv">
        <div className="signUpDiv">
          <h1>Admin Sign Up</h1>
          <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
            {/* First Name */}
            <label htmlFor="first_name">First Name</label>
            <br />
            <input
              id="first_name"
              name="first_name"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              autoComplete="off"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div style={{ color: 'red' }}>{formik.errors.first_name}</div>
            ) : null}
            <br />
  
            {/* Last Name */}
            <label htmlFor="last_name">Last Name</label>
            <br />
            <input
              id="last_name"
              name="last_name"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              autoComplete="off"
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div style={{ color: 'red' }}>{formik.errors.last_name}</div>
            ) : null}
            <br />
  
            {/* Email */}
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
            <br />
  
            {/* Username */}
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              autoComplete="off"
            />
            {formik.touched.username && formik.errors.username ? (
              <div style={{ color: 'red' }}>{formik.errors.username}</div>
            ) : null}
            <br />
  
            {/* Password */}
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
            <br />

            {/* Secret Key */}
            <label htmlFor="special_key">Access Key</label>
            <br />
            <input
              id="special_keyl"
              name="special_key"
              onChange={formik.handleChange}
              value={formik.values.special_key}
              autoComplete="off"
            />
            {formik.touched.special_key && formik.errors.special_key ? (
              <div style={{ color: 'red' }}>{formik.errors.special_key}</div>
            ) : null}
            <br />
  
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an admin account? <Link to="/adminlogin">Login here</Link></p>
        </div>
      </div>
      {isLoading && (
                <div className="overlay">
                    <GridLoaderSpinner />
                </div>
            )}
      <ToastContainer />
    </>
  );
}
