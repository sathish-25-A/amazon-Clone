import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import Color from "../components/Color";
import Container from '../components/Container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Product"} />
            <Breadcrumb title="Compare Product" />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src='img/wqa.jpg' alt='shirt' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">New Braned T-Shirt In Polo.</h5>
                                    <h6 className="price mb-3 mt-3">699</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Polo</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>T-Shirt</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availablity:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="product-card-image">
                                    <img src='img/wqa.jpg' alt='shirt' />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">New Braned T-Shirt In Polo.</h5>
                                    <h6 className="price mb-3 mt-3">699</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Polo</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>T-Shirt</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availablity:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

            </Container>
        </>
    )
}

export default CompareProduct;