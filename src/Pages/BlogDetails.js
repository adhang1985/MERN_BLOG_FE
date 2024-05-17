import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog, getBlogById } from '../services/blogServices';

const BlogDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    title : "",
      description:"",
      image:""
  });

  const getBlogDetail = async() => {
    try {
        const response = await getBlogById(id);
        setInputs({
          title:response.blog.title,
          description : response.blog.description,
          image: response.blog.image
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
      getBlogDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  const handleChange = (e) => {
      const {name,value} = e.target;
      setInputs({...inputs,[name]:value});
  }

  const handleSubmit = async(e) => {
     e.preventDefault();
     console.log(inputs);
     try {
      const response = await editBlog(id,inputs);
      if(response.success){
        toast.success(response.message);
        navigate('/myBlogs');
      }
      else{
        toast.error(response.message);
      }
     } catch (error) {
        toast.error(error.message);
     }
  }

  return (
    <>
    <ToastContainer/>
      <form onSubmit={handleSubmit}> 
      <Box
          width={"50%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Update Blog
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
           <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </form>
    </>
  )
}

export default BlogDetails
