import axios from 'axios';

const URL = "http://localhost:2001/api/v1/blog";

export const getAllBlogs = async() => {
    const response = axios.get(`${URL}/getAllBlogs`);
    return response.data;
}

export const getBlogById = async(id) => {
    const response = axios.get(`${URL}/getBlogDetail/${id}`);
    return response.data;
}

export const addBlog = async(obj) => {
    const response = axios.post(`${URL}/create-blog`,obj);
    return response.data;
}

export const editBlog = async(id,obj) => {
    const response = axios.put(`${URL}/update-blog/${id}`,obj);
    return response.data;
}

export const deleteBlog = async(id) => {
    const response = axios.delete(`${URL}/delete-blog/${id}`);
    return response.data;
}

export const getBlogByUser = async(id) => {
    const response = axios.get(`${URL}/user-blog/${id}`);
    return response.data;
}