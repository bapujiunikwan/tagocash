import React from "react";
import { blog_1, blog_2, blog_3 } from "../../assets";

const Blogs = () => {
  return (
    <div className="blog_section margin_top mb-5">
      <div className="container">
      <a href="/" className="text-decoration-none text-black">
        <p className="my-4 d-block d-md-none">&lt; Back</p>
        </a>
        <div>
          <h3 className="hero_title">
            <span className="hero_title_tago">Tago </span>Blogs
          </h3>
          <p className="sub_text blogs_subtext">
            Read more and make better choices for your Financial future
          </p>
        </div>

        <div className="mb-2 d-md-none d-block text-center">
          <p className="blog_type_text featured_article_text fs-2 p-2">
            Featured Article
          </p>
        </div>

        
          <h5 className="card-title hero_subtitle card_title d-md-none d-block">
            Simplifying payment methods code in our new API version
          </h5>
        
        <div>
          <p className="blog_type_text blogs_page_subtext mt-3 d-md-none d-block">
            20th Oct 2023
          </p>
        </div>

        <div className="d-lg-flex gap-5 featured_block_gap my-md-5">
          <div>
            <img
              className="blog_img_size"
              src={blog_1}
              width={"580px"}
              height={"435px"}
              alt=""
            />
          </div>
          <div className="subscribe_block">
            <div className="card-body rounded shadow py-md-4 px-md-5 p-3">
              <div className="featured_article mb-4 d-none d-md-block">
                <p className="blog_type_text featured_article_text p-2">
                  Featured Article
                </p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex gap-3">
                  <p className="blog_type_text blogs_page_subtext">Product</p>
                  <span className="filled_circle_blog bg-primary"></span>
                  <p className="blog_type_text blogs_page_subtext">
                    Engineering
                  </p>
                </div>

                <div>
                  <p className="blog_type_text blogs_page_subtext">
                    7 Min Read
                  </p>
                </div>
              </div>
              <a href="/blogcontent" className="text-decoration-none text-black">
              <h5 className="card-title hero_subtitle card_title d-none d-md-block">
                Simplifying payment methods code in our new API version
              </h5>
              </a>
              <p className="card-text footer_subtext card_text mt-2 mb-md-5">
                You can now configure payment method settings from the
                Dashboard—no code required. We call this integration path
                dynamic payment methods.
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <a
                    className="blog_type_text blogs_page_subtext text-decoration-none"
                    href="/blogcontent"
                  >
                    Read More &nbsp; &gt;
                  </a>
                </div>

                <div>
                  <p className="blog_type_text blogs_page_subtext d-none d-md-block">
                    20th Oct 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-md-5">
          <p className="blog_type_text fs-1">All Blogs</p>
        </div>

        <div className="d-md-flex justify-content-between mb-4 mt-4">
          <div class="card mb-4 mb-md-0 shadow border-0 cards">
            <a href="/blogcontent">
            <img
              src={blog_1}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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

          <div class="card mb-4 mb-md-0 shadow border-0 cards">
          <a href="/blogcontent">
            <img
              src={blog_2}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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

          <div class="card mb-4 mb-md-0 shadow border-0 cards">
          <a href="/blogcontent">
            <img
              src={blog_3}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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

        <div className="d-md-flex justify-content-between my-md-5">
          <div class="card mb-4 mb-md-0 shadow border-0 cards">
            <a href="/blogcontent">
            <img
              src={blog_1}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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

          <div class="card mb-4 mb-md-0 shadow border-0 cards">
          <a href="/blogcontent">
            <img
              src={blog_2}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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

          <div class="card mb-4 mb-md-0 shadow border-0 cards">
          <a href="/blogcontent">
            <img
              src={blog_3}
              className="card-img-top p-2"
              alt=""
              width={"368px"}
              height={"268px"}
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
              <a href="/blogcontent" className="text-decoration-none text-black">
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
    </div>
  );
};

export default Blogs;
