import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}/>
      <BreadCrumb title='Wishlist'/>
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" className='img-fluid cross' alt="cross img" />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className="title">Honor 1 TB</h5>
                            <h6 className="price">$300</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" className='img-fluid cross' alt="cross img" />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className="title">Honor 1 TB</h5>
                            <h6 className="price">$300</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" className='img-fluid cross' alt="cross img" />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                        </div>
                        <div className='py-3 px-3'>
                            <h5 className="title">Honor 1 TB</h5>
                            <h6 className="price">$300</h6>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default Wishlist
