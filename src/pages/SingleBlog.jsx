import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi';
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title='Dynamic Blog Name' />
        <Container class1="blog-wrapper home-erapper-2 py-5">
            <div className="row">
                <div className="col-12"> 
                    <div className="single-blog-card">
                        <Link to='/blog' className='d-flex align-items-center gap-10'>
                          <HiOutlineArrowLeft className='fs-5'/> Go back to blogs
                        </Link>
                        <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                        <img src={blog} className="img-fluid w-100 my-4" alt="Single blog img" />
                        <p>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, asperiores, aspernatur sunt beatae harum molestiae deserunt quod explicabo cumque minus natus placeat ea autem distinctio amet veniam hic facere earum. sit amet consectetur adipisicing elit. Quisquam totam odio suscipit tenetur. Ipsum eos dolores, molestiae, saepe facilis praesentium ea dicta dolorem magni ad, laboriosam perferendis esse debitis repellat?
                        </p>
                    </div>                   
                </div>
            </div>
      </Container>
    </>
  )
}

export default SingleBlog
