import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../services/userServices';
import { authActions } from '../Redux/store';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input,setInput] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setInput({...input,[name]:value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await signin(input);
            if(response.success){
                dispatch(authActions.login());
            localStorage.setItem("userId",response.info._id);
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
   <>
        <form>
            <Box maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}>
                  <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase" }}
                        padding={3}
                        textAlign="center"
                    >
                        Login
                    </Typography>
                    <TextField
                        placeholder="email"
                        value={input.email}
                        name="email"
                        margin="normal"
                        type={"email"}
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        placeholder="password"
                        value={input.password}
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
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={() => navigate("/register")}
                        sx={{ borderRadius: 3, marginTop: 3 }}
                    >
                        Not a user ? Please Register
                    </Button>
            </Box>
        </form>
   </>
  )
}

export default Login