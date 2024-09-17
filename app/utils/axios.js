// app/utils/axios.js

import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://trend-mart-api.onrender.com/', // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
        // Add other global headers here if needed
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token'); // Get the token from the cookie named 'token'
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// GET request
export const getRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.get(url, { params, headers });
        return response.data;
    } catch (error) {
        console.error('GET request error:', error);
        throw error.response ? error.response.data : error;
    }
};

// POST request
export const postRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await axiosInstance.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error('POST request error:', error);
        throw error.response ? error.response.data : error;
    }
};

// DELETE request
export const deleteRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await axiosInstance.delete(url, { data, headers });
        return response.data;
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error.response ? error.response.data : error;
    }
};

// app/utils/axios.js

// import axios from 'axios';
// import Cookies from 'js-cookie';

// const axiosInstance = axios.create({
//     baseURL: 'https://your-external-api.com',
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// const getRequest = async (url, params = {}, headers = {}) => {
//     const token = Cookies.get('token');
//     const response = await axiosInstance.get(url, {
//         params,
//         headers: { ...headers, Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };

// const postRequest = async (url, data = {}, headers = {}) => {
//     const token = Cookies.get('token');
//     const response = await axiosInstance.post(url, data, {
//         headers: { ...headers, Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };

// const deleteRequest = async (url, data = {}, headers = {}) => {
//     const token = Cookies.get('token');
//     const response = await axiosInstance.delete(url, {
//         data,
//         headers: { ...headers, Authorization: `Bearer ${token}` },
//     });
//     return response.data;
// };

// export { getRequest, postRequest, deleteRequest };

