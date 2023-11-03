import '../Css/LogInPage.css';
import { useState } from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom"
import GridLoaderSpinner from '../Components/GridLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogInPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const baseURL = 'https://parcelpalserver.onrender.com/'
  
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    
    const handleTimeout = () => {
        setIsLoading(false);
        toast.error("Server did not respond within 20 seconds. Please try again later.");
    };

    const handleFormSubmit = async (values) => {
      setIsLoading(true);
  
      try {
          const response = await fetch(`${baseURL}adminLogin/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
          });
  
          const data = await response.json();
  
          const timeout = setTimeout(() => {
              handleTimeout();
          }, 20000);
  
          if (response.ok) {
              clearTimeout(timeout);
              const { username, admin_id, is_staff } = data;
              localStorage.setItem('username', username);
              localStorage.setItem('admin_id', admin_id);
              localStorage.setItem('is_staff', is_staff);
  
              setIsLoading(false);
              toast.success("Login is successful. Redirecting...", {
                  onClose: () => {
                      navigate("/sendparcel");
                  }
              });
          } else {
              let errorData = data;
              if (response.status === 400) {
                  toast.error("Bad request.");
              } else if (response.status === 500) {
                  toast.error("Internal server error. Please try again later.");
              } else {
                  toast.error(errorData.message);
              }
          }
      } catch (error) {
          console.error("Network error:", error);
          toast.error("Network error. Please try again later.");
      } finally {
          setIsLoading(false);
      }
  };
        
    const formSchema = yup.object().shape({
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: formSchema,
        onSubmit: handleFormSubmit
      });      

  return (
    <>
      <div className="logInBackgroundDiv">
        <div className="logInDiv">
          <h1>Admin Log In</h1>
          <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
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
  
            {/* Password */}
            <label htmlFor="password">Password</label>
            <br />
            <input  
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              autoComplete="off"
            />
            <span className="input-icon" onClick={handleTogglePassword}>
                <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} />
            </span>

            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
            <br />
              <button type="submit">Log In</button>
          </form>
          <p>Don`t have an admin account? <Link to="/admin-signup">Register here</Link></p>
        </div>
      </div>
      {isLoading && (
                <div className="overlay">
                    <GridLoaderSpinner />
                </div>
            )}
      <ToastContainer/>
    </>
  );
}