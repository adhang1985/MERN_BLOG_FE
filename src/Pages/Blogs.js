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
  const [searchVal,setSearchVal] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const getBlogsData = async() => {
    try {
      const response = await getAllBlogs();
      console.log(response);
      setData(response.blogs);
    } catch (error) {
      console.log(error.message);
    }
  }


  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    if(searchVal !== ""){
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchVal.toLowerCase());
      })
      setFilteredResults(filteredData);
    }
    else{
      setFilteredResults(data);
    }
  }

  useEffect(() => {
      getBlogsData();
  },[])

  return (
    <Container>
      <h2>List of blogs</h2>
      <input type='text' name='search' placeholder='Search here' value={searchVal} onChange={handleSearch}/>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: 20 }}>
      <Grid container spacing={2} >
        {
          searchVal.length > 1 ? 
          (
            filteredResults.map((blog) => {
              return <>
                <Grid item xs={12} sm={6} lg={4}>
                  <Item><BlogCard id={blog._id} title={blog.title} description={blog.description} image={blog.image} isUser={false}/></Item>
                </Grid>
              </>
            })
          )
          :
          (
            data.map((blog) => {
              return <>
                <Grid item xs={12} sm={6} lg={4}>
                  <Item><BlogCard id={blog._id} title={blog.title} description={blog.description} image={blog.image} isUser={false}/></Item>
                </Grid>
              </>
            })
          )
        }
        
      </Grid>
    </Box>
    </Container>
  )
}

export default Blogs
