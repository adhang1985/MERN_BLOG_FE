import styled from '@emotion/styled';
import { Box, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogCard from '../Components/BlogCard';
import { getAllBlogs } from '../services/blogServices';

const Item = styled(Paper)(() => ({
  backgroundColor: "#eee",
  padding: "0px",
  color: "#000",
}));

const Blogs = () => {

  const [data,setData] = useState([]);

  const getBlogsData = async() => {
    try {
      const response = await getAllBlogs();
      console.log(response);
      setData(response.blogs);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
      getBlogsData();
  },[])

  return (
    <Container>
      <h2>List of blogs</h2>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        {
          data && data.map((blog) => {
            return <>
              <Grid item xs={12} sm={6} lg={4}>
                <Item><BlogCard id={blog._id} title={blog.title} description={blog.description} image={blog.image} isUser={false}/></Item>
              </Grid>
            </>
          })
        }
        
      </Grid>
    </Box>
    </Container>
  )
}

export default Blogs
