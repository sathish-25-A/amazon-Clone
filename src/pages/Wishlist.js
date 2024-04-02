import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
    <Meta title={"Wishlist"} />
            <Breadcrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src='img/pr9.jpg'className="img-fluid w-100" alt='shirt'/>

                                </div>
                                <div className='py-3'>
                                <h5 className='title'>White T-Shirt</h5>
                                <h6 className='price'>699</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src='img/pr4.jpg'className="img-fluid w-100" alt='shirt'/>

                                </div>
                                <div className='py-3'>
                                <h5 className='title'>Green Full Hand T-Shirt</h5>
                                <h6 className='price'>900</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src='img/pr3.jpg'className="img-fluid w-100" alt='shirt'/>

                                </div>
                                <div className='py-3'>
                                <h5 className='title'>Blue Women T-Shirt</h5>
                                <h6 className='price'>850</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                            <img src='img/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className="wishlist-card-image">
                                    <img src='img/pr8.jpg'className="img-fluid w-100" alt='shirt'/>

                                </div>
                                <div className='py-3'>
                                <h5 className='title'>Women Winter Dress</h5>
                                <h6 className='price'>1999</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </Container>
    </>
  )
}

export default Wishlist;