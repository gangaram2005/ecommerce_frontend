import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'

// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
// import { Link } from 'react-router-dom'
import Container from '../components/Container';
const Singleproduct = () => {

    const [orderedProduct, setorderedProduct] = useState(true)
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"product Name"} />
            <BreadCrumb title='Dynamic Pr. Name' />
            <Container class1="main-product wrapper home-wrapper-2 py-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Product image',
                                            isFluidWidth: true,
                                            src: "https://wwd.com/wp-content/uploads/2023/10/best-watches-for-men-orient.png?w=1000"
                                        },
                                        largeImage: {
                                            src: "https://wwd.com/wp-content/uploads/2023/10/best-watches-for-men-orient.png?w=1000",
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="../../public/images/watch.jpg" alt="" /></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids Watch bulk 10 pack multi colored for Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars count={5} size={24} value='4' edit={false} activeColor="#ffd700" />
                                        <p className="mb-0 t-review">(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type:</h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3> <p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category:</h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags:</h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability:</h3> <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size:</h3>
                                        <div className="flex flex-wrap gap-15">
                                            <sapn className="badge border border-1 bg-white text-dark border-secondary">S</sapn>
                                            <sapn className="badge border border-1 bg-white text-dark border-secondary">M</sapn>
                                            <sapn className="badge border border-1 bg-white text-dark border-secondary">XL</sapn>
                                            <sapn className="badge border border-1 bg-white text-dark border-secondary">XXL</sapn>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <h3 className='product-heading'>Color:</h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row mt-2'>
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div className=''>
                                            <input type="number" style={{ width: '70px' }} min={1} max={100} className='form-control' name="" id="" />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>ADD TO CART</button>
                                            <button className='button signup'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=""><TbGitCompare className='fs-5 me-2'/>Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-coluumn my-3'>
                                        <h3 className='product-heading'>Shipping & Returns:</h3>
                                        <p className='product-data'>Free Shipping and returns available on all order : <br />We ship all Us domestic order within <b>2-3 business days!</b></p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Copy Product link:</h3>
                                        <a href="javascript:void(0);" onClick={()=>{copyToClipboard("https://www.istockphoto.com/photo/wristwatch-gm1359180038-432598990?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwatch&utm_medium=affiliate&utm_source=unsplash&utm_term=watch%3A%3A%3A")}}>
                                        Copy Product Links
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="decription-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti dolor iste dolore voluptatibus ipsa natus amet esse temporibus ullam, earum perspiciatis facere nobis, necessitatibus aut magni excepturi quod quam.
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 id='review'>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars count={5} size={24} value='4' edit={false} activeColor="#ffd700" />
                                            <p className="mb-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a href="#" className='text-dark text-decoration-underline'>write a Review</a>
                                        </div>
                                    )}
                                </div>
                                <div id='review' className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars count={5} size={24} value='4' edit={true} activeColor="#ffd700" />
                                        </div>

                                        <div>
                                            <textarea name="" id="" className='w-100' cols="30" rows="4" placeholder='Comment'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Review</button>
                                        </div>

                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Gagan</h6>
                                            <ReactStars count={5} size={24} value='4' edit={true} activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis odio, commodi quisquam officia facere laborum perferendis sapiente beatae fugit? Ut blanditiis illo rem sint fuga perferendis repellat, molestias laudantium!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">our Popular Products </h3>
                        </div>

                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
            </Container>
        </>
    )
}

export default Singleproduct
