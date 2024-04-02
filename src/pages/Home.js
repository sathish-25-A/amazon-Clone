import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from "../utils/Data";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img src="img/mn4.jpg"
                className="img-fluid rounded-3"
                alt="main-banner" />
              <div className="main-banner-content position-absolute">
                <h4>Styles For Men</h4>
                <h5>T-shirt</h5>
                <p>From RS699 To RS2000</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img src="img/wom2.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Women</h5>
                  <p>Start At 599/-</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="img/wom1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>T-Shirt </h5>
                  <p>Start At 550/- </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="img/mn1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>BEST OFFER</h4>
                  <h5>T-SHIRT</h5>
                  <p>Start At 599/-</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="img/mn3.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>CASUAL</h4>
                  <h5>SEMI FORMAL</h5>
                  <p>Start At 2500/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.img} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Hoodie</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/st1.jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kotty</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="img/ko1.jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Shirt</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="img/ms1.jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Sera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/sera.jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>AASK</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/ws1 (1).jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>White Shirt</h6>
                    <p>18 Items</p>
                  </div>
                  <img src="img/ms2 (1).jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Antheaa</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/ws3 (1).jpg" alt="men" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>T-Shirt</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="img/s1 (2).jpg" alt="men" />
                </div>
              </div>
            </div>
          </div>

      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
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
      <Container  class1="famous-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="img/pq1.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>New Fashion</h5>
                  <h6>Women Dress</h6>
                  <p>From 799 To 2999</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="img/pq2.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">New Fashion</h5>
                  <h6 className="text-success">Men Dress</h6>
                  <p className="text-success">From 799 To 2999</p>
                </div>
              </div>

            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="img/ph.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>New Fashion</h5>
                  <h6>women Dress</h6>
                  <p>From 799 To 2999</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="img/ph2.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-warning'>New Fashion</h5>
                  <h6 className='text-warning'>Men Dress</h6>
                  <p className='text-warning'>From 799 To 2999</p>
                </div>
              </div>
            </div>
          </div>

      </Container>
      <Container  class1="special-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">special products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />


          </div>

      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

      </Container>
      <Container  class1="marque-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="img/br1 (8).png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br2.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br3.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br4.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br5.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br6.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="img/br7.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>

      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Latest Blogs</h3>
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

      </Container>
    </>
  )
}

export default Home;