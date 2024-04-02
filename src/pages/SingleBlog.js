import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../img/bb1.jpg";
import Container from '../components/Container';



const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog"} />
            <Breadcrumb title="Dynamic Blog" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                  <div className="col-12">
                    <div className="single-blog-card">
                      <Link to="/blogs" className="d-flex align-items-center gap-10">
                      <HiOutlineArrowLeft className="fs-4" /> GO Back  To Blogs</Link>
                      <h3 className="title">
                        World Is Full Of Fashion
                      </h3>
                      <img src={blog} className='img-fluid w-100  my-4' alt="blog" />
                      <p>Fashion blogs have been around since the early 2000s, and so have fashion bloggers. But today, 
                        blogging is a whole new ball game. While fashion blogs are at an all-time high, we can’t argue against 
                        the fact that social media platforms like Instagram remain the single largest 
                        forum to redirect traffic toward fashion blogs.But we are not complaining because that has made our lives twice as easy.
                         It is a hashtag game out there, and that is how weneck-deep into people’s profiles.
                          We are engrossed, enamored, and even lose a few days while browsing one hashtag after another.
                        </p>
                    </div>
                  </div>

                </div>
              

            </Container>
    </>
  )
}

export default SingleBlog;