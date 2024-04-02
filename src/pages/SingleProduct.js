import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from '../components/Container';

const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: "https://e1.pxfuel.com/desktop-wallpaper/508/163/desktop-wallpaper-tony-stark-group-rdj-tony-stark-android.jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src='https://i.pinimg.com/originals/5f/6c/18/5f6c18445dfa78df2ba84f8f049ea300.jpg' className='img-fluid' alt='img' />
                </div>
                <div>
                  <img src='https://st1.uvnimg.com/dims4/default/4f8118f/2147483647/thumbnail/1024x576/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fr%2Frobert_downey_jr_portada_2019.jpg'
                    className='img-fluid' alt='img' />
                </div>
                <div>
                  <img src='https://e1.pxfuel.com/desktop-wallpaper/646/358/desktop-wallpaper-tony-stark-graphy-robert-downey.jpg'
                    className='img-fluid' alt='img' />
                </div>
                <div>
                  <img src='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/hxjnlwnqpifhtftbcnyz/robert-downey-jr-endgame-line?fimg-ssr-default'
                    className='img-fluid' alt='img' />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                < div className="border-bottom">
                  <h3 className="title">
                    Men In Suits In Four Color
                  </h3>
                </div>
                <div className="border-bottom py-3">
                <p className="price">RS: 5000/-</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                  <a className="review-btn" href="#review">
                  Write a Review
                </a>
                </div>
                <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Mens Suit</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">GUCCI</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Suit</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Charles Tyrwhitt </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Add to Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all over world orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://e1.pxfuel.com/desktop-wallpaper/508/163/desktop-wallpaper-tony-stark-group-rdj-tony-stark-android.jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>

                </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className='bg-white p-3'>
                <h4>Description</h4>
                <p>The Parisian fashion blogger and DIY queen Lisa Gachet started blogging a few years ago,
                  and recently launched a brand that represents something she truly believes in – Do It Yourself Fashion.
                  It’s a fascinating concept of making limited edition clothing that is a reflection of your personality,
                  but affordable. Her brand is unique, and her feed is colorful. Follow her for all of it, and more.</p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="reviews-wrapperpy-5 home-wrapper-3">
        
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-dark text-decoration-underline" href="">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      It's not for short and slim girls, loose near shoulder. But I altered as look wise it's beautiful.
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
    </>
  )
}

export default SingleProduct;