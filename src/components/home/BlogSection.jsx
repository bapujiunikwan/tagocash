import React from 'react'
import {blog_1, blog_2, blog_3} from "../../assets"

const BlogSection = () => {
  return (
    <div className='blog_section margin_top mb-5'>
        <div className='container'>
            <div>
                <h3 className='blog_title sub_title mt-5 mb-2'>Stay Updated with our Blog</h3>
            </div>

            <div className="d-none d-md-flex justify-content-between my-4">
                <div class="card shadow border-0 cards">
                    <img src={blog_1} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>

                <div class="card shadow border-0 cards">
                    <img src={blog_2} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>

                <div class="card shadow border-0 cards">
                    <img src={blog_3} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>
            </div>
            {/* begin mobile */}
                {/* data-bs-touch="true" data-bs-ride="carousel" data-bs-interval="90000" */}
            <div id="blogCarouselIndicators" class="carousel slide d-md-none d-block">
                <div class="carousel-indicators blog_carousel_indicators">
                  <button
                    type="button"
                    data-bs-target="#blogCarouselIndicators"
                    data-bs-slide-to="0"
                    class="active bg-primary me-3"
                    aria-current="true"
                    aria-label="Slide blog 1"
                  ></button>
                  <button className="bg-primary me-3"
                    type="button"
                    data-bs-target="#blogCarouselIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide blog 2"
                  ></button>
                  <button className="bg-primary"
                    type="button"
                    data-bs-target="#blogCarouselIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide blog 3"
                  ></button>
                </div>
                <div class="carousel-inner mt-3">
                  <div class="carousel-item active mb-5">
                  <div class="card border cards">
                    <img src={blog_1} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>
                  </div>
                  <div class="carousel-item mb-5">
                  <div class="card border cards">
                    <img src={blog_2} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>
                  </div>
                  <div class="carousel-item mb-5">
                  <div class="card border cards">
                    <img src={blog_3} className="card-img-top p-2" alt="" width={"352px"} height={"258px"} />
                    <div className="card-body">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-3'>
                                <p className='blog_type_text'>Product</p>
                                <span className='filled_circle'></span>
                                <p className='blog_type_text'>Engineering</p>
                            </div>

                            <div>
                            <p className='blog_type_text'>20th Oct 2023</p>
                            </div>
                        </div>
                        <h5 className="card-title download_app_subtext text-black question_blog fw-semibold">Simplifying payment methods code in our new API version</h5>
                        <p className="card-text footer_subtext pb-2">You can now configure payment method settings from the Dashboard—no code required. We call this integration path dynamic payment methods.</p>
                        
                    </div>
                </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#blogCarouselIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#blogCarouselIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
              </div>

              <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            {/* end mobile */}

            <div className='text-center'>
                <a href="/blogs">
                    <button type="button" class="btn btn-primary rounded-5 px-3 py-2 mt-md-3 mt-5 mb-4">View All Blogs</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BlogSection
