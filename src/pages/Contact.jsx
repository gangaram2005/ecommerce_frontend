import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineCiCircle, AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title='Contact Us'/>
      <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112501.24395863601!2d81.64673865926827!3d28.21752311292234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39986510239b6e5d%3A0x91c6439c29287732!2z4KSV4KWL4KS54KSy4KSq4KWB4KSw!5e0!3m2!1sne!2snp!4v1707539386043!5m2!1sne!2snp"
            width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            
            </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                {/* form page */}
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" name="" className="form-control" placeholder='Name'/>
                      </div>
                      <div>
                        <input type="email" name="" className="form-control" placeholder='Email'/>
                      </div>
                      <div>
                        <input type="tel" name="" className="form-control" placeholder='Mobile Number' />
                      </div>
                      <div>
                        <textarea name="" id="" className='w-100' cols="30" rows="4" placeholder='Comment'></textarea>
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>

                    </form>
                </div>
                {/* Get in touch with us */}
                <div>
                  <h3 className="contact-title mb-4">Get in touch wiht us</h3>
                  <div>
                    <ul className="ps-0 ">
                      <li className='mb-0 d-flex d-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address>
                          Telecom road, kohalpur-11,Banke District, Lumbini Provience
                        </address>
                      </li>
                      <li className='mb-0 d-flex d-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+977 9824517498">+977 9824517498</a>
                      </li>
                      <li className='mb-0 d-flex d-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:gangaramjaisi09@gmail.com">gangaramjaisi09@gmail.com</a>
                      </li>
                      <li className='mb-0 d-flex d-15 align-items-center'>
                        <AiOutlineCiCircle className='fs-5'/>
                        <p className='mb-0'>{new Date().toLocaleTimeString()}</p>
                        {/* <p className='mb-0'>{setInterval( ()=>{new Date().toLocaleTimeString()},1000)}</p> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact
