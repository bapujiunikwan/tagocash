import React from "react";
import { tick_mark } from "../../assets";

function SignUp() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h3 className="membership_title">TagoCash Membership Plan</h3>
        <p className="fasst_feature_description lh-sm">
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
              Minimum balance of $30 in wallet
            </p>
          </div>
          <div className="card-body">
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                Free 1 payment per month (send) and $0.50 per payment
                thereafter.{" "}
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                <span className="fw-bold">Unlimited</span> free to receive
                TagoCash from Tago users.
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                <span className="fw-bold">1.5% fee</span> to withdraw TagoCash
                to US Dollar cash or Euro cash
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                Unlimited withdrawal of TagoCash into local currency at
                <span className="fw-bold">3 to 5%</span> conversion rate
              </p>
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
            <div className="plan_duration">
              <p className="download_app_subtext fs-6 py-1">Annual Plan</p>
            </div>
            <div className="text-white">
              <span className="fasst_title">$11 </span>
              <span className="fs-6">/ Annually</span>
            </div>
            <p className="download_app_subtext mt-2">
              No Minimum balance required
            </p>
          </div>
          <div className="card-body">
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                FUnlimited free payments with TagoCash (send TagoCash)
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                <span className="fw-bold">Unlimited</span> free to receive
                TagoCash from Tago users.
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                <span className="fw-bold">1% fee</span> to withdraw TagoCash to
                US Dollar cash or Euro cash
              </p>
            </div>
            <div className="d-flex gap-2 align-items-start">
              <img
                className="mt-1"
                src={tick_mark}
                width={"23px"}
                height={"23px"}
                alt=""
              />
              <p className="footer_subtext">
                Unlimited withdrawal of TagoCash into local currency at
                <span className="fw-bold">2 to 4%</span> conversion rate
              </p>
            </div>
            <div className="text-center mt-4">
              <button type="button" class="btn button_color text-white rounded-5 px-4">
                Sign up now !
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* begin mobile */}
      <div id="PlanscarouselIndicators" class="carousel slide d-md-none d-block" data-bs-touch="true" data-bs-ride="carousel" data-bs-interval="90000">
        <div class="carousel-indicators plans_carousel_indicators">
          <button
            type="button"
            data-bs-target="#PlanscarouselIndicators"
            data-bs-slide-to="0"
            class="active bg-primary me-3"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="bg-primary me-3"
            type="button"
            data-bs-target="#PlanscarouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner mt-3">
          <div class="carousel-item active">
            <div class="card shadow border-0 cards mb-5">
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
                  Minimum balance of $30 in wallet
                </p>
              </div>
              <div className="card-body">
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    Free 1 payment per month (send) and $0.50 per payment
                    thereafter.{" "}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    <span className="fw-bold">Unlimited</span> free to receive
                    TagoCash from Tago users.
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    <span className="fw-bold">1.5% fee</span> to withdraw
                    TagoCash to US Dollar cash or Euro cash{" "}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    Unlimited withdrawal of TagoCash into local currency at
                    <span className="fw-bold">3 to 5%</span> conversion rate
                  </p>
                </div>
                <div className="text-center mt-4">
                  <button type="button" class="btn btn-primary rounded-5 px-4">
                    Sign up now !
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card shadow border-0 cards mb-5">
              <div className="annual_plan text-center p-3">
                <h3 className="plan_title">Tago Hero</h3>
                <div className="plan_duration">
                  <p className="download_app_subtext fs-6 py-1">Annual Plan</p>
                </div>
                <div className="text-white">
                  <span className="fasst_title">$11 </span>
                  <span className="fs-6">/ Annually</span>
                </div>
                <p className="download_app_subtext mt-2">
                  No Minimum balance required
                </p>
              </div>
              <div className="card-body">
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    FUnlimited free payments with TagoCash (send TagoCash){" "}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    <span className="fw-bold">Unlimited</span> free to receive
                    TagoCash from Tago users.
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    <span className="fw-bold">1% fee</span> to withdraw TagoCash
                    to US Dollar cash or Euro cash{" "}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-start">
                  <img
                    className="mt-1"
                    src={tick_mark}
                    width={"23px"}
                    height={"23px"}
                    alt=""
                  />
                  <p className="footer_subtext">
                    Unlimited withdrawal of TagoCash into local currency at{" "}
                    <span className="fw-bold">2 to 4%</span> conversion rate
                  </p>
                </div>
                <div className="text-center mt-4">
                  <button type="button" class="btn btn-primary rounded-5 px-4">
                    Sign up now !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end mobile */}
    </div>
  );
}

export default SignUp;
