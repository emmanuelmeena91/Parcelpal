import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'https://parcelpalserver.onrender.com/'

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
           ?  'Bearer ' + localStorage.getItem('access_token')  // Added a space after 'JWT'
           : null, // Set to null if access_token is not available
        'Content-Type': 'application/json',
        Accept: 'application/json'   
    },
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (typeof error.response === 'undefined') {
            toast.error(
                'A server/network error occured.' +
                     'Looks like CORS might be the problem' +
                    'Sorry about this - we will get it fixed shortly'
            );
            return Promise.reject(error)
        }

        if (
            error.response.status === 401 &&
            originalRequest.url === baseURL + 'api/token/refresh'
        ) {
            window.location.href = '/login/';
            return Promise.reject(error)
        }

        if (
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 && 
            error.response.statusText === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh_token')

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp)

                if(tokenParts.exp > now) {
                    return axiosInstance
                    .post('api/token/refresh/', {refresh: refreshToken})
                    .then((response) => {
                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);

                        axiosInstance.defaults.headers['Authorization'] = 
                           'Bearer ' + response.data.access;
                        originalRequest.headers['Authorization'] = 
                           'Bearer ' + response.data.access;

                        return axiosInstance(originalRequest)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                } else {
                    console.log('Refresh token is expired', tokenParts.exp, now);
                    window.location.href = '/login/';
                }
            } else {
                console.log('Refresh token is not available.');
                window.location.href = '/login/'
            }
        }

        return Promise.reject(error);
    }
);
