import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authActions } from '../Redux/store'

const Navbar = () => {
    let isLogin = useSelector(state => state.isLogin);
    isLogin = isLogin || localStorage.getItem('userId');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
      dispatch(authActions.logout());
      localStorage.removeItem("userId");
      navigate('/login');
    }
  return (
    <>
      <AppBar position='sticky'>
          <Toolbar>
             <Typography variant='h4'>
                  My Blog App
             </Typography>
             <Box display={'flex'} marginLeft="auto">
             <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/blogs">Blogs</Button>
                  {
                    isLogin ?
                    <>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/addBlog">Create Blog</Button>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/myBlogs">My Blogs</Button>
                        <Button sx={{margin:1,color:'white'}} onClick={logout}>Logout</Button>
                    </>
                    :
                    <>
                        
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/login">Login</Button>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/register">Register</Button>
                    </>
                  }
             </Box>
          </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar