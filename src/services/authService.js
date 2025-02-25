import axios from 'axios';

const API_URL = "http://localhost:5000/api/auth/";

export const register = async (userData) => {
    return await axios.post(API_URL + "register", userData);
};

export const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


