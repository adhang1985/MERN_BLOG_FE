import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addBlog } from '../services/blogServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {

  const id = localStorage.getItem('userId');
  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
      title : "",
      description:"",
      image:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setInputs({...inputs,[name]:value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const obj = {
      ...inputs,userId:id
    }
    try {
      const response = await addBlog(obj);
      if(response.success){
          toast.success(response.message);
          navigate('/blogs');
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
            Create A Blog
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
            SUBMIT
          </Button>
        </Box>
      </form>
    </>
  )
}

export default CreateBlog
