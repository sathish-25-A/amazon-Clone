import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"} />
            <Breadcrumb title="Forgot Password" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Rest Your Password</h3>
                            <p className="text-center mt-2 my-2">We Will Send You An Email To Rest A Password</p>
                            <form action="" className="d-flex flex-column gap-15">
                            <Custominput type="email" name="email" placeholder="Email" />
                                <div>  
                                    <div className=' mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>submit</button>
                                        <Link to="/login">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            

            </Container>
    </>
  )
}

export default Forgotpassword;