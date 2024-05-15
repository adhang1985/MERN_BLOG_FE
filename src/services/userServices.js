import axios from 'axios';

const URL = "http://localhost:2001/api/v1/user";

export const signup = async(obj) => {
    const response = await axios.post(`${URL}/register`,obj);
    return response.data;
}

export const signin = async(obj) => {
    const response = await axios.post(`${URL}/login`,obj);
    return response.data;
}

export const getUsers = async() => {
    const response = await axios.get(`${URL}/getAllUsers`);
    return response.data;
}