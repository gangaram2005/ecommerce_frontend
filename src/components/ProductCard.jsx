import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import productcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import watch2 from '../images/watch1.avif'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

export default function ProductCard(props) {
    const { grid } = props
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/product/:id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="Wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} alt="watch img" className='img-fluid'/>
                        <img src={watch2} alt="watch img" className='img-fluid'/>
                    </div>
                    <div className="product-details">
                        <h6 className='brand'>Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk pack multi color for student
                        </h5>
                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid ===12 ? "d-block":"d-none"}`}>This is a product description sit amet consectetur adipisicing elit. Ducimus facere placeat, beatae est nobis deserunt eius minima saepe, inventore nesciunt, unde cum amet natus perspiciatis aut totam qui! Molestias, aut?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={productcompare} alt="Compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="View" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="View" />
                            </button>

                        </div>
                    </div>
                </Link>
            </div>

            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wishlist} alt="Wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="Product img" />
                        <img src={watch2} className='img-fluid' alt="Product img" />
                    </div>
                    <div className="product-details">
                        <h6 className='brand'>Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk pack multi color for student
                        </h5>
                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid ===12 ? "d-block":"d-none"}`}>This is a product description sit amet consectetur adipisicing elit. Ducimus facere placeat, beatae est nobis deserunt eius minima saepe, inventore nesciunt, unde cum amet natus perspiciatis aut totam qui! Molestias, aut?
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={productcompare} alt="Compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="View" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="Card img" />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
