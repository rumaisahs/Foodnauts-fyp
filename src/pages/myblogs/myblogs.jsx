import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import React from 'react'
import Blog from '../../components/blog/blog'

function myblogs() {
  return (
    <div>
    <h1 className='my-3'>My Blogs</h1>

    <Blog/>
    <Footer/> </div>
  )
}

export default myblogs