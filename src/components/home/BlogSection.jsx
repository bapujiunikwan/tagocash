import React from "react";
import { blog_1, blog_2, blog_3 } from "../../assets";
import Slider from "react-slick";

const BlogSection = () => {
  var blogSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="blog_section margin_top mb-5">
      <div className="container">
        <div>
          <h3 className="blog_title sub_title mt-5 mb-2">
            Stay updated with our blog
          </h3>
        </div>

        <div className="d-none d-md-flex justify-content-between my-4 gap-lg-3">
          <div className="card shadow border-0 cards">
            <a href="/blogcontent">
              <img
                src={blog_1}
                className="card-img-top p-2"
                alt=""
                width={"352px"}
                height={"258px"}
              />
            </a>
            <div className="card-body">
              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <a href="/blogcontent" className="text-decoration-none">
                <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                  Simplifying payment methods code in our new API version
                </h5>
              </a>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>

          <div className="card shadow border-0 cards">
            <a href="/blogcontent">
              <img
                src={blog_2}
                className="card-img-top p-2"
                alt=""
                width={"352px"}
                height={"258px"}
              />
            </a>
            <div className="card-body">
              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <a href="/blogcontent" className="text-decoration-none">
                <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                  Simplifying payment methods code in our new API version
                </h5>
              </a>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>

          <div className="card shadow border-0 cards">
            <a href="/blogcontent">
              <img
                src={blog_3}
                className="card-img-top p-2"
                alt=""
                width={"352px"}
                height={"258px"}
              />
            </a>
            <div className="card-body">
              <div className="d-flex justify-content-between gap-2">
                <div className="d-flex gap-3">
                  <p className="blog_type_text">Product</p>
                  <span className="filled_circle"></span>
                  <p className="blog_type_text">Engineering</p>
                </div>

                <div>
                  <p className="blog_type_text">20th Oct 2023</p>
                </div>
              </div>
              <a href="/blogcontent" className="text-decoration-none">
                <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                  Simplifying payment methods code in our new API version
                </h5>
              </a>
              <p className="card-text footer_subtext pb-2">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
            </div>
          </div>
        </div>

        {/* begin mobile */}
        <div className="d-md-none d-block mt-4">
          <Slider {...blogSettings}>
            <div>
              <div className="mb-4">
                <div className="card cards">
                  <a href="/blogcontent">
                    <img
                      src={blog_1}
                      className="card-img-top p-2"
                      alt=""
                      width={"352px"}
                      height={"258px"}
                    />
                  </a>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">
                        <p className="blog_type_text">Product</p>
                        <span className="filled_circle"></span>
                        <p className="blog_type_text">Engineering</p>
                      </div>

                      <div>
                        <p className="blog_type_text">20th Oct 2023</p>
                      </div>
                    </div>
                    <a href="/blogcontent" className="text-decoration-none">
                      <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                        Simplifying payment methods code in our new API version
                      </h5>
                    </a>
                    <p className="card-text footer_subtext pb-2">
                      You can now configure payment method settings from the
                      Dashboard—no code required. We call this integration path
                      dynamic payment methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="card border cards">
                  <a href="/blogcontent">
                    <img
                      src={blog_2}
                      className="card-img-top p-2"
                      alt=""
                      width={"352px"}
                      height={"258px"}
                    />
                  </a>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">
                        <p className="blog_type_text">Product</p>
                        <span className="filled_circle"></span>
                        <p className="blog_type_text">Engineering</p>
                      </div>

                      <div>
                        <p className="blog_type_text">20th Oct 2023</p>
                      </div>
                    </div>
                    <a href="/blogcontent" className="text-decoration-none">
                      <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                        Simplifying payment methods code in our new API version
                      </h5>
                    </a>
                    <p className="card-text footer_subtext pb-2">
                      You can now configure payment method settings from the
                      Dashboard—no code required. We call this integration path
                      dynamic payment methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="card border cards">
                  <a href="/blogcontent">
                    <img
                      src={blog_3}
                      className="card-img-top p-2"
                      alt=""
                      width={"352px"}
                      height={"258px"}
                    />
                  </a>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">
                        <p className="blog_type_text">Product</p>
                        <span className="filled_circle"></span>
                        <p className="blog_type_text">Engineering</p>
                      </div>

                      <div>
                        <p className="blog_type_text">20th Oct 2023</p>
                      </div>
                    </div>
                    <a href="/blogcontent" className="text-decoration-none">
                      <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">
                        Simplifying payment methods code in our new API version
                      </h5>
                    </a>
                    <p className="card-text footer_subtext pb-2">
                      You can now configure payment method settings from the
                      Dashboard—no code required. We call this integration path
                      dynamic payment methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* end mobile */}

        <div className="text-center">
          <a href="/blogs">
            <button
              type="button"
              className="btn btn-primary rounded-5 px-3 py-2 mt-md-3 mt-5 mb-4"
            >
              View All Blogs
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
