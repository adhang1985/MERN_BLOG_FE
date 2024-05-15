import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();
  return (
    <>
      <AppBar position='sticky'>
          <Toolbar>
             <Typography variant='h4'>
                  My Blog App
             </Typography>
             <Box display={'flex'} marginLeft="auto">
                  
                  {
                    isLogin ?
                    <>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/addBlog">Create Blog</Button>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/myBlogs">My Blogs</Button>
                        <Button sx={{margin:1,color:'white'}}>Logout</Button>
                    </>
                    :
                    <>
                        <Button sx={{margin:1,color:'white'}} LinkComponent={Link} to="/blogs">Blogs</Button>
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