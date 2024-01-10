import React from "react";
import { tick_mark, hero_tick } from "../../assets";
import Slider from "react-slick";

function SignUp() {
  var plansSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="d-xl-flex align-items-center gap">
        <div className="mt-5 text-center text-xl-start">
          <h3 className="membership_title">TagoCash <br /> Membership Plan</h3>
          <p className="fasst_feature_description lh-base">
            Join the Tago community, Now!
          </p>
        </div>
        <div className="d-none d-md-flex gap-5 justify-content-center mt-5">
          <div class="card shadow border-0 cards">
            <div className="free_plan text-center p-3">
              <h3 className="plan_title">Tago Fan</h3>
              <div className="plan_duration">
                <p className="download_app_subtext fs-6 py-1">
                  Forever Free Plan
                </p>
              </div>
              <div className="text-white">
                <span className="fasst_title">$0 </span>
                <span className="fs-6">/ Annually</span>
              </div>
              <p className="download_app_subtext mt-2">
                Minimum balance of $20 in wallet
              </p>
            </div>
            <div className="card-body">
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                <span className="fw-bold">Free</span> to Sign up
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                  <span className="fw-bold">Unlimited</span> send to any TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                  <span className="fw-bold">Free unlimited</span> receive from any TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Standard 1.5% to withdraw to your bank account or mobile money account
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                
  Instant conversion to any local currency -nominal rate vary per country 
                </p>
              </div>
              <div>
                <p className="fst-italic blog_type_text text-dark">* Tago Fan with less than $20.00 rolling 30-day balance will be charged $0.50 per sending.</p>
              </div>
              <div className="text-center mt-4">
                <button type="button" class="btn button_color text-white rounded-5 px-4">
                  Sign up now !
                </button>
              </div>
            </div>
          </div>

          <div class="card shadow border-0 cards">
            <div className="annual_plan text-center p-3">
              <h3 className="plan_title">Tago Hero</h3>
              <div className="plan_duration my-4">
                <p className="download_app_subtext fs-6 py-1">Annual Plan</p>
              </div>
              <div className="pb-5 mb-3">
                <h4 className="text-white cookie_title">Coming in July 2024</h4>
              </div>
            </div>
            <div className="card-body">
              <p className="footer_subtext pt-1">
  Enjoy perks and freedom like:</p>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Higher daily, weekly, monthly limit
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                1% discount on local conversion fees (Saving of more than $100.00 over a year)
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Ability to withdraw into any crypto wallet 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                
  Ability to withdraw as USDT to a crypto wallet 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext"> 
                First class human support 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext"> 
                Preferred email and chat support 
                </p>
              </div>
              <div className="text-center mt-4">
                <button type="button" class="btn border-primary text-primary rounded-5 px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Register to be Notified 
                </button>
              </div>
            </div>
          </div>
        </div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="py-md-4 px-5">
      <h1 class="modal-title modal_title text-center text-md-start" id="staticBackdropLabel">Pre - Register to be Notified </h1>
        <h4 className="modal_subtext py-1 text-center text-md-start">Tago Hero Coming in July 2024</h4>
        </div>
      <div class="modal-body px-5">
      <div class="mb-4">
          <input type="text" class="form-control rounded-5 px-3 input_bg py-2 bg-secondary bg-opacity-10 border-0" id="nameFormControlInput" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0" id="emailFormControlInput" placeholder="Enter Email" />
        </div>
        <div class="mb-4">
          <input type="tel" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0" id="phoneFormControlInput" placeholder="Enter Phone number" />
        </div>
        <div className='mb-5'>
          <button type="button" class="btn button_color text-white rounded-5 px-4 py-2 mb-md-5">Pre-Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* begin mobile */}
        <div className="d-md-none d-block mt-4">
          <Slider {...plansSettings}>
            <div>
            <div class="me-2">
            <div class="card border cards mb-5">
            <div className="free_plan text-center p-3">
              <h3 className="plan_title">Tago Fan</h3>
              <div className="plan_duration">
                <p className="download_app_subtext fs-6 py-1">
                  Forever Free Plan
                </p>
              </div>
              <div className="text-white">
                <span className="fasst_title">$0 </span>
                <span className="fs-6">/ Annually</span>
              </div>
              <p className="download_app_subtext mt-2">
                Minimum balance of $20 in wallet
              </p>
            </div>
            <div className="card-body">
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                <span className="fw-bold">Free</span> to Sign up
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                  <span className="fw-bold">Unlimited</span> send to any TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                  <span className="fw-bold">Free unlimited</span> receive from any TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Standard 1.5% to withdraw to your bank account or mobile money account
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={tick_mark}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                
  Instant conversion to any local currency -nominal rate vary per country 
                </p>
              </div>
              <div>
                <p className="fst-italic blog_type_text text-dark">* Tago Fan with less than $20.00 rolling 30-day balance will be charged $0.50 per sending.</p>
              </div>
              <div className="text-center mt-4">
                <button type="button" class="btn button_color text-white rounded-5 px-4">
                  Sign up now !
                </button>
              </div>
            </div>
            </div>
          </div>
            </div>
            <div>
            <div class="me-2">
            <div class="card border cards mb-5">
            <div className="annual_plan text-center p-3">
              <h3 className="plan_title">Tago Hero</h3>
              <div className="plan_duration my-4">
                <p className="download_app_subtext fs-6 py-1">Annual Plan</p>
              </div>
              <div className="pb-5 mb-3">
                <h4 className="text-white cookie_title">Coming in July 2024</h4>
              </div>
            </div>
            <div className="card-body">
              <p className="footer_subtext pt-1">
  Enjoy perks and freedom like:</p>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Higher daily, weekly, monthly limit
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                1% discount on local conversion fees (Saving of more than $100.00 over a year)
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                Ability to withdraw into any crypto wallet 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext">
                
              Ability to withdraw as USDT to a crypto wallet 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext"> 
                First class human support 
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={hero_tick}
                  width={"23px"}
                  height={"23px"}
                  alt=""
                />
                <p className="footer_subtext"> 
                Preferred email and chat support 
                </p>
              </div>
              <div className="text-center mt-4">
                <button type="button" class="btn border-primary text-primary rounded-5 px-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Register to be Notified 
                </button>
              </div>
            </div>
            </div>
          </div>
            </div>

          </Slider>
        </div>
      {/* end mobile */}
    </div>
  );
}

export default SignUp;
