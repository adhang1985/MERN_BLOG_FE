import axios from 'axios';

const URL = "http://localhost:2001/api/v1/blog";

export const getAllBlogs = async() => {
    const response = await axios.get(`${URL}/getAllBlogs`);
    return response.data;
}

export const getBlogById = async(id) => {
    const response = await axios.get(`${URL}/getBlogDetail/${id}`);
    return response.data;
}

export const addBlog = async(obj) => {
    const response = await axios.post(`${URL}/create-blog`,obj);
    return response.data;
}

export const editBlog = async(id,obj) => {
    const response = await axios.put(`${URL}/update-blog/${id}`,obj);
    return response.data;
}

export const deleteBlog = async(id) => {
    const response = await axios.delete(`${URL}/delete-blog/${id}`);
    return response.data;
}

export const getBlogByUser = async(id) => {
    const response = await axios.get(`${URL}/user-blog/${id}`);
    return response.data;
}