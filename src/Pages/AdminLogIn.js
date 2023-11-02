import '../Css/LogInPage.css';
import { useState } from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom"
import GridLoaderSpinner from '../Components/GridLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../axios';

export default function AdminLogInPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
  
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
          /*
          // Commenting out token request
          const tokenResponse = await axiosInstance.post('api/token/', values);
  
          if (tokenResponse.status === 200) {
              const { access, refresh } = tokenResponse.data;
              localStorage.setItem('access_token', access);
              localStorage.setItem('refresh_token', refresh);
              axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + access;
          }
          */
          
          const resp = await axiosInstance.post('admin-login/', values);
  
          const timeout = setTimeout(() => {
              handleTimeout();
          }, 20000); 
  
          if (resp.status === 200) {
              clearTimeout(timeout); 
              const { username, admin_id, is_staff } = resp.data;
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
              let errorData = resp.data;
              if (resp.status === 400) {
                  toast.error("Bad request.");
              } else if (resp.status === 500) {
                  toast.error("Internal server error. Please try again later.");
              } else {
                  toast.error(errorData.message);
              }
          }
      } catch (error) {
          console.error("Error obtaining tokens:", error);
          toast.error("Error obtaining tokens. Please try again later.");
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