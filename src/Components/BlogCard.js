import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../services/blogServices';

const BlogCard = (props) => {

  const {id,title,description,image,isUser} = props;
  const navigate = useNavigate();

  const removeBlog = async() => {
    try {
      await deleteBlog(id);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        {
          isUser && 
          <CardActions>
            <Button size="small" onClick={() => navigate(`/blogDetails/${id}`)}>Edit</Button>
            <Button size="small" onClick={removeBlog}>Delete</Button>
          </CardActions>
        }
    </Card>
    </>
  )
}

export default BlogCard