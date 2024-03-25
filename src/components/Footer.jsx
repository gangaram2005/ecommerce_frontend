import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub, BsYoutube,BsInstagram } from 'react-icons/bs';
import newsletter from '../images/newsletter.png'
export default function Footer() {
    return (
        <>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top d-flex gap-30 align-items-center">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" class="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'> ward no:11 <br />Kohalpur, Banke <br />Nepal
                                </address>
                                <a href="tel:+977 9824517498" className='mt-3 d-block mb-2 text-whte'>+977 9824517498
                                </a>
                                <a href="mailto" className='mt-4 d-block mb-2 text-white'>example@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <Link className='text-white' href="">
                                        <BsLinkedin className='fs-4'/>
                                    </Link>
                                    <Link className='text-white' href="">
                                        <BsInstagram className='fs-4'/>
                                    </Link>
                                    <Link className='text-white' href="">
                                        <BsGithub className='fs-4'/>
                                    </Link>
                                    <Link className='text-white' href="">
                                        <BsYoutube className='fs-4'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='/pricacy-policy' className='text-white py-2 mb-1'>Privacy Policy </Link>
                                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms and Conditions</Link>
                                <Link to='/blog' className='text-white py-2 mb-1'>Blog</Link>

                            </div>                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Headphone</Link>
                                <Link className='text-white py-2 mb-1'>Tablet</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Ganga Ram Jaisi</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
