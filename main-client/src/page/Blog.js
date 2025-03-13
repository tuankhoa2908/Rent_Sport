import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
    return (
        <>
            <Meta title={"Tin tức"} />
            <BreadCrumb title="Tin tức" />
            <Container class1="blog-wrapper home-wrapper-2 py-5" >

                <div className="col-12">
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

            </Container >
        </>
    )
}

export default Blog;
