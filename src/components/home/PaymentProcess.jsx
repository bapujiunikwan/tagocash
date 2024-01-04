import React from "react";
import {
  star,
  choose_recipient,
  fasst_tagocash_logo,
  tagocash_different,
  tagocash_different_mobile,
  pointer_star,
} from "../../assets";

const PaymentProcess = () => {
  return (
    <div className="payment_process_section position-relative">
      <div className="d-none d-md-block position-absolute top-0 end-0">
        <img src={star} alt="star" width={"258px"} height={"266px"} />
      </div>
      <div className="container">
        <div className="text-center text-md-start">
          <h3 className="sub_title padding_top get_more_title">
            Paying someone, made easier!
          </h3>
          <p className="sub_text simple_steps_text">
            With TagoCash, paying someone is as easy as paying with cash. <br />
            Complete your payment in 3 simple steps:
          </p>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-md-block d-none ps-5 mt-5">
            <div className="d-flex">
              <div className="number_block active mt-4">
                <p className="fw-bold fs-5">1</p>
              </div>

              <div className="payment_process_card">
                <h3 className="hero_subtitle tagocash_features_title">
                  Choose Recipient
                </h3>
                <p className="sub_text payment_process_card_text">
                  Find your partner on tagocash app via his phone or email.
                </p>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="number_block mt-4">
                <p className="fw-bold fs-5">2</p>
              </div>

              <h3 className="hero_subtitle ms-5 mt-4">Enter Amount </h3>
            </div>

            <div className="d-flex mt-4">
              <div className="number_block mt-4">
                <p className="fw-bold fs-5">3</p>
              </div>

              <h3 className="hero_subtitle ms-5 mt-4">Confirm & pay</h3>
            </div>
          </div>

          <div>
            <img
              className="choose_recipient_size"
              src={choose_recipient}
              width={"475px"}
              height={"500px"}
              alt=""
            />
          </div>
        </div>

        {/* begin mobile */}
        <div className="d-block d-md-none">
          <div className="numbers_mobile">
            <div className="d-flex justify-content-around mt-4">
              <div>
                <p className="border border-dark rounded-4 px-4 fw-bold fs-5 bg-primary">
                  1
                </p>
              </div>
              <div>
                <p className="border border-dark rounded-4 px-4 fw-bold fs-5">
                  2
                </p>
              </div>
              <div>
                <p className="border border-dark rounded-4 px-4 fw-bold fs-5">
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="payment_process_card text-center">
            <h3 className="hero_subtitle subtitle_small">
              Choose Recipient
            </h3>
            <p className="sub_text payment_process_card_text simple_steps_text">
              Find your partner on tagocash app via his phone or email.
            </p>
          </div>
        </div>
        {/* end mobile */}

        <div className="tagocash_better_section mt-5">
          <div className="d-none d-md-flex gap-2 justify-content-center align-items-center">
            <img
              className="fasst_tagocash_logo"
              src={fasst_tagocash_logo}
              width={"254px"}
              height={"50px"}
              alt=""
            />
            <h3 className="sub_title footer_title">
              is the same as Cash, but better!
            </h3>
          </div>

          <div className="margin_top">
            <div className="d-none d-md-flex justify-content-around">
              <div className="position-relative">
                <img
                  src={tagocash_different}
                  width={"425px"}
                  height={"512px"}
                  alt=""
                />
              </div>

              <div className="mt-5 ms-4">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle">
                      TagoCash is Globally Available
                    </h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                    TagoCash is the cash of where you happen to be
                  </p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle">TagoCash is Very Safe</h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                    TagoCash can not be stolen.
                  </p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img
                      src={pointer_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle">TagoCash is Private</h3>
                  </div>
                  <p className="sub_text tagocash_features_text">
                    Using TagoCash protects your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="d-block d-md-none ps-3">
            <div className="d-flex justify-content-between">
            <div>
              <div className="d-md-flex gap-2 justify-content-center align-items-center mt-2">
                <img
                  className="fasst_tagocash_logo"
                  src={fasst_tagocash_logo}
                  width={"254px"}
                  height={"50px"}
                  alt=""
                />
                <h3 className="sub_title footer_title">
                  is the same as Cash, but better!
                </h3>
              </div>

              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active bg-primary me-3"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button className="bg-primary me-3"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button className="bg-primary"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner mt-3">
                  <div class="carousel-item active">
                    <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img src={pointer_star} width={"16px"} height={"17px"} alt="" />
                        <h3 className="feature_card_title">Globally Available</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">Instantly exchangeable for local consumption. Spend it in dollars, Euro, Pesos, or any of 65+ different currencies.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                  <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img src={pointer_star} width={"16px"} height={"17px"} alt="" />
                        <h3 className="feature_card_title">Very Safe</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">Only available to you and requires biometrics to access. Your TagoCash is not stored or controlled by the Tago Platform.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                  <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img src={pointer_star} width={"16px"} height={"17px"} alt="" />
                        <h3 className="feature_card_title">Tago is private</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">No need to share your bank or card details. To give TagoCash to someone, you only need their mobile number and email address.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src={tagocash_different_mobile} width={"158px"} height={"326px"} alt="" />
            </div>
            </div>
          </div>
          {/* end mobile */}
    </div>
  );
};

export default PaymentProcess;
