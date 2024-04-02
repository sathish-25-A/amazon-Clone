import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <Breadcrumb title="Sign Up" />
            <Container class1='login-wrapper py-5 home-wrapper-2'>

                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Sign Up</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <Custominput type="text" name="name" placeholder="Name" />
                                <Custominput type="email" name="email" placeholder="Email" />
                                <Custominput type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number" />
                                <Custominput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <div>
                                    <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Sign Up</button>

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

export default Signup;