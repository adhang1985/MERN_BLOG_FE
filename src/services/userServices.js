import axios from 'axios';

const URL = "http://localhost:2001/api/v1/user";

export const signup = async(obj) => {
    const response = axios.post(`${URL}/register`,obj);
    return response.data;
}

export const signin = async(obj) => {
    const response = axios.post(`${URL}/login`,obj);
    return response.data;
}

export const getUsers = async() => {
    const response = axios.get(`${URL}/getAllUsers`);
    return response.data;
}