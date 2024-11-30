import React from 'react'
import Fade from 'react-reveal/Fade';
import BlogCard from '../cards/BlogCard';

const Blog = () => {
  return (
    <div className="bg-white py-20">
    <div className="max-w-screen-2xl px-10 mx-auto">
      <h1 className="text-center text-4xl lg:text-4xl font-semibold mb-16">
        Insights and Innovation <br />Uncover the latest
      </h1>
      <Fade >
        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-md:gap-y-16">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        
      </div>
        </Fade>  
    </div>
    <div className='flex justify-center my-10'>
        <button className="bg-inherit border border-gray-700 py-2 px-8">View More</button>
  </div>
  </div>
  )
}

export default Blog