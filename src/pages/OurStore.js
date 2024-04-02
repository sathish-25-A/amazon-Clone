import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from '../components/Container';


const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <Breadcrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="col-9">
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Shop By Categories
                                    </h3>
                                    <div>
                                        <ul>
                                            <li>Shirt</li>
                                            <li>Pant</li>
                                            <li>T-shirt</li>
                                            <li>Shorts</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Filter By
                                    </h3>
                                    <div>
                                        <h5 className="sub-title">
                                            Avaliablity
                                        </h5>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id=""
                                                />
                                                <label className="form-check-label" htmlFor="">
                                                    In Stock (1)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id=""
                                                />
                                                <label className="form-check-label" htmlFor="">
                                                    Out of Stock(0)
                                                </label>
                                            </div>
                                        </div>
                                        <h5 className="sub-title">Price</h5>
                                        <div className="d-flex align-items-center gap-10">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="From"
                                                />
                                                <label htmlFor="floatingInput">From</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput1"
                                                    placeholder="To"
                                                />
                                                <label htmlFor="floatingInput1">To</label>
                                            </div>
                                        </div>
                                        <h5 className="sub-title">Colors</h5>
                                        <div>
                                            <Color />
                                        </div>
                                        <h5 className="sub-title">Size</h5>
                                        <div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="color-1"
                                                />
                                                <label className="form-check-label" htmlFor="color-1">
                                                    S (2)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="color-2"
                                                />
                                                <label className="form-check-label" htmlFor="color-2">
                                                    M (2)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Product Tags
                                    </h3>
                                    <div>
                                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                SLIP
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                V-LINE
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                HOODIE
                                            </span>
                                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                                JACKET
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Random Product
                                    </h3>
                                    <div>
                                        <div className="random-products mb-3 d-flex">
                                            <div className="w-50">
                                                <img src="img/ra4.jpg" className="img-fluid" alt="random" />
                                            </div>
                                            <div className="w-50">
                                                <h5>
                                                    Blue Full Hand Shirt
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>999</b>
                                            </div>
                                        </div>
                                        <div className="random-products d-flex">
                                            <div className="w-50">
                                                <img src="img/ra2.jpg" className="img-fluid" alt="random" />
                                            </div>
                                            <div className="w-50">
                                                <h5>
                                                    White Full Hand T-Shirt
                                                </h5>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>699</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                                        <select name="" className="form-control form-select" id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">
                                                Alphabetically, Z-A
                                            </option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img
                                                onClick={() => {
                                                    setGrid(3);

                                                }}
                                                src="img/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(4);

                                                }}
                                                src="img/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="img/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />

                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="img/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                
            </Container>
        </>
    )
}

export default OurStore;