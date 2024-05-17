import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Blogs from './Pages/Blogs'
import BlogDetails from './Pages/BlogDetails'
import CreateBlog from './Pages/CreateBlog'
import Register from './Pages/Register'
import UserBlogs from './Pages/UserBlogs'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Blogs/>}/> 
         <Route path='/blogs' element={<Blogs/>}/> 
         <Route path='/blogDetails/:id' element={<BlogDetails/>}/>
         <Route path='/addBlog' element={<CreateBlog/>}/>
         <Route path='/myBlogs' element={<UserBlogs/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App