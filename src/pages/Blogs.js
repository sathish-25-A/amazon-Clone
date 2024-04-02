import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

const Blogs = () => {
  return (
   <>
   <Meta title={"Blogs"} />
            <Breadcrumb title="Blogs" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
              <div className="row">
                  <div className="col-3">
                  <div className="filter-card mb-3">
                                    <h3 className="filter-title">
                                        Find By Categories
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
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <div className="col-6 mb-3">
                      <BlogCard />
                      </div>
                      <div className="col-6 mb-3">
                      <BlogCard />
                      </div>
                      <div className="col-6 mb-3">
                      <BlogCard />
                      </div>
                      <div className="col-6 mb-3">
                      <BlogCard />
                      </div>
                    </div>
                  </div>
                  </div>

                </Container>
             
   </>
  )
}

export default Blogs;