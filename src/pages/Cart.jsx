import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from '../images/watch.jpg'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai';
import Container from '../components/Container'
const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title='Cart' />
            <Container class1="cart-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">

                        <div className="card-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>product</h4>
                            <h4 className='cart-col-2'>price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="card-data py-3 mb-22 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' alt="product img" />
                                </div>
                                <div className='w-75'>
                                    <p>Title</p>
                                    <p>Size:paragraph</p>
                                    <p>Color:next</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type="number" name="" min={1} max={100} id="" />
                                </div>
                                <div>
                                    <AiFillDelete className='text-danger fs-5' />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to='/product' className='button'>Continue to Shopping</Link>
                            <div className='d-flex flex-column align-content-end'>
                                <h4>SubTotal: $100</h4>
                                <p>Taxes and shipping calculated at checkout</p>
                                <Link to='/checkout' className='button'>CheckOut</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
        </>
    )
}

export default Cart
