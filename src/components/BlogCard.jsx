import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogCard() {
  return (

      <div className="blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>12 feb,2024</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="description">Lorem ipsum dolor sit amet consectetur in quasi optio ab tempora, iure sint odit ipsum placeat consequatur harum cum! Nam?
            </p>
            <Link to='/blog/:id' className='button'>Readmore</Link>
        </div>
      </div>

  )
}
