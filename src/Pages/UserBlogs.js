/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogCard from '../Components/BlogCard';
import styled from '@emotion/styled';
import { getBlogByUser } from '../services/blogServices';

const Item = styled(Paper)(() => ({
  backgroundColor: "#eee",
  padding: "0px",
  color: "#000",
}));

const UserBlogs = () => {

  const [data,setData] = useState([]);
  const id = localStorage.getItem('userId');

  const getBlogsData = async() => {
    try {
      const response = await getBlogByUser(id);
      console.log(response);
      setData(response.userBlog.blogs);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
      getBlogsData();
  },[])

  return (
    <>
      <Container>
      <h2>List of blogs</h2>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        {
          data && data.map((blog) => {
            return <>
              <Grid item xs={12} sm={6} lg={4}>
                <Item><BlogCard id={blog._id} title={blog.title} description={blog.description} image={blog.image} isUser={blog.user === id}/></Item>
              </Grid>
            </>
          })
        }
        {
          data.length === 0 && <Typography mt={2}>You don't have any blog</Typography>
        }
        
      </Grid>
    </Box>
    </Container>
    </>
  )
}

export default UserBlogs
