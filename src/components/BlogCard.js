import React from 'react'
import { Link } from 'react-router-dom';


const BlogCard = () => {
    return (
        
            <div className="blog-card">
                <div className="card-image">
                    <img src="img/bb1.jpg" className="img-fluid w-100" alt="blog" />
                </div>
                <div className="blog-contect">
                    <p className="date">1 Dec, 2023</p>
                    <h5 className="title">
                        A beautiful Sunday Morning Renaissance
                    </h5>
                    <p className="desc">If you’re invited to a bridal or baby shower this season, 
                    a pretty wrap floral dress like this one would be absolutely perfect.</p>
                    <Link to="/blog" className="button">Read More</Link>
                </div>
            </div>
       
        
    )
}

export default BlogCard;