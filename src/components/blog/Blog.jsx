import React from 'react'
import Back from '../common/back/Back'
import BlogCard from './BlockCard'

import './blog.css'

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard></BlogCard>
        </div>
      </section>
    </>
  )
}

export default Blog
