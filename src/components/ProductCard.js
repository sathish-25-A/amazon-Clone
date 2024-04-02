import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../img/wish.svg";
import dress from "../img/mw1.jpg";
import dress1 from "../img/mw2.avif.jpg";
import prodcompare from "../img/prodcompare.svg";
import view from "../img/view.svg";
import addcart from "../img/add-cart.svg";



const ProductCard = (props) => {
    const { grid } = props;
    console.log(grid);
    let location = useLocation();
    return (
        <>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"
                } `}>
                <Link to="/single-product" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt="wishlist" />
                        </button >
                    </div>
                    <div className="product-image">
                        <img src={dress} className="img-fluid" alt="product images" />
                        <img src={dress1} className="img-fluid" alt="product images" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">H&M</h6>
                        <h5 className="product-title">
                            Mens T-Shirt
                        </h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            is a contemporary clothing store in the heart of downtown that offers chic and stylish clothing for both men and women.
                            From romantic lace and flowy maxi dresses to edgy leather jackets and timeless trench coats,
                            this store has something for everyone.
                        </p>
                        <p className="price">599/-</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"
                } `}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={dress} className="img-fluid" alt="product images" />
                        <img src={dress1} className="img-fluid" alt="product images" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">H&M</h6>
                        <h5 className="product-title">
                            Mens T-Shirt
                        </h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            is your one-stop shop for designer pieces at an affordable price.
                            With an ever-changing selection of clothes for men, women, and children,
                            you’ll find something for any occasion.
                        </p>
                        <p className="price">599/-</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={prodcompare} alt="compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="view" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="addcart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
};

export default ProductCard;