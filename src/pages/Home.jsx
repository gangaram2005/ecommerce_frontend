import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';


const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <h1>Home page</h1>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="Main Banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>Iphone 15 pro max</h5>
                <p>From $1400 <br /> or $120/mo.</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Ipad s13+ Pro.</h5>
                  <p>From $999 <br /> or $41/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>From $1400 <br /> or $120/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>From $1400 <br /> or $120/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="Main Banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>From $1400 <br /> or $120/mo.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-2'>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>

              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10  Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3 cscol">
            <div className="famous-card position-relative">
              <img src="images/famous-01.jpg" className='img-fluid maincls' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watch series 7</h6>
                <p>From $39 or $16 for 24 mo.</p>
              </div>
            </div>
          </div>

          <div className="col-3 cscol">
            <div className="famous-card position-relative">
              <img src="images/famous-02.png" className='img-fluid maincls' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio display</h5>
                <h6 className='text-dark'>600 nits of Brightness</h6>
                <p className='text-dark'>15.6 inch OLED display</p>
              </div>
            </div>
          </div>

          <div className="col-3 cscol">
            <div className="famous-card position-relative">
              <img src="images/famous-03.jpg" className='img-fluid maincls' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Smartphone</h5>
                <h6 className='text-dark'>Iphone 15 pro max</h6>
                <p className='text-dark'>Now in Green from $1200 or $120/mo for 12 mo.  Footnote</p>
              </div>
            </div>
          </div>

          <div className="col-3 cscol">
            <div className="famous-card position-relative">
              <img src="images/famous-04.jpg" className='img-fluid maincls' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Home speaker</h5>
                <h6 className='text-dark'>Room Filling Sound</h6>
                <p className='text-dark'>From $699 or $116/mo for 12 mo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Special Product</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>

              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blog</h3>
            </div>

          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}

export default Home
