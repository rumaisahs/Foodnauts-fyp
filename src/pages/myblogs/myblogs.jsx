import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import React from 'react'
import Blog from '../../components/blog/blog'

function myblogs() {
  return (
    <div>
    <Navbar/>
    <h1 className='my-3'><icon className="bi-chat-square-dots pe-2"/>Blogs</h1>

    <Blog/>
    <Footer/> </div>
  )
}

export default myblogs