import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/userServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange = (e) => {
     const {name,value} = e.target;
     setInputs({...inputs,[name]:value});
  }

  const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(inputs);
      try {
        const response = await signup(inputs);
        console.log(response);
        if(response.success){
           toast.success("Registration completed");
           navigate('/login');
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
    <ToastContainer position='top-center'/>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Register
          </Typography>
          <TextField
            placeholder="username"
            value={inputs.username}
            onChange={handleChange}
            name="username"
            margin="normal"
            type={"text"}
            required
          />
          <TextField
            placeholder="email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange}
          />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/login")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already Registerd ? Please Login
          </Button>
        </Box>
      </form>
    </>
  )
}

export default Register