import React from "react";
import {
  star,
  fasst_tagocash_logo,
  tagocash_different,
  tagocash_different_mobile,
  black_star,
  blue_star,
} from "../../assets";
import { useEffect } from "react";
import $ from "jquery";
import Lottie from "react-lottie";
import recipientLottie from "../../assets/lottieFiles/recipient.json"
import amountLottie from "../../assets/lottieFiles/amount.json"
import confirmPayLottie from "../../assets/lottieFiles/confirm_pay.json"
import Slider from "react-slick";



const PaymentProcess = () => {
  var paymentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const recipientOptions = {
    loop: true,
    autoplay: true, 
    animationData: recipientLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const amountOptions = {
    loop: true,
    autoplay: true, 
    animationData: amountLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const confirmPayOptions = {
    loop: true,
    autoplay: true, 
    animationData: confirmPayLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    // begin payment process desktop
    $("#recipient").addClass("active");
    $("#pay_subtext, #amount_subtext").hide();
    $("#recipient_subtext").show();
    $("#confirm_pay_gif, #amount_gif").hide();
    $("#recipient_gif").show();

    $("#recipient_title, #button1").on("click", function () {
      $("#confirm_pay, #amount").removeClass("active");
      $("#recipient").addClass("active");
      $("#pay_subtext, #amount_subtext").hide();
      $("#recipient_subtext").show();
      $("#confirm_pay_gif, #amount_gif").hide();
      $("#recipient_gif").show();
    });

    $("#amount_title, #button2").on("click", function () {
      $("#confirm_pay, #recipient").removeClass("active");
      $("#amount").addClass("active");
      $("#recipient_subtext, #pay_subtext").hide();
      $("#amount_subtext").show();
      $("#confirm_pay_gif, #recipient_gif").hide();
      $("#amount_gif").show();
    });

    $("#confirm_pay_title, #button3").on("click", function () {
      $("#recipient, #amount").removeClass("active");
      $("#confirm_pay").addClass("active");
      $("#recipient_subtext, #amount_subtext").hide();
      $("#pay_subtext").show();
      $("#amount_gif, #recipient_gif").hide();
      $("#confirm_pay_gif").show();
    });
    // end payment process desktop

    // begin payment process mobile
    $("#amount_block, #pay_block, #amount_gif, #confirm_pay_gif").hide();
    $("#recipient_block, #recipient_gif").show();
    $("#mobile_btn1").addClass('active');
    $("#mobile_btn2, #mobile_btn3").removeClass('active');
    $(".payment_process_title").addClass("tagocash_features_title")


    $("#number_one").on("click", function () { 
      $("#amount_block, #pay_block, #amount_gif, #confirm_pay_gif").hide();
      $("#recipient_block, #recipient_gif").show();
      $("#mobile_btn1").addClass('active');
      $("#mobile_btn2, #mobile_btn3").removeClass('active');
    });

    $("#number_two").on("click", function () { 
      $("#recipient_block, #pay_block,  #recipient_gif, #confirm_pay_gif").hide();
      $("#amount_block, #amount_gif").show();
      $("#mobile_btn2").addClass('active');
      $("#mobile_btn1, #mobile_btn3").removeClass('active');
    });

    $("#number_three").on("click", function () { 
      $("#recipient_block, #amount_block, #amount_gif, #recipient_gif").hide();
      $("#pay_block, #confirm_pay_gif").show();
      $("#mobile_btn3").addClass('active');
      $("#mobile_btn1, #mobile_btn2").removeClass('active');
    });
    // end payment process mobile

    // begin read more section
    const globallyContent = $('#globally_content');
    const safeContent = $('#safe_content');
    const privacyContent = $('#privacy_content');

    const readMoreButton = $('.read_more');
    const readLessButton = $('.read_less');

    // Initial setup
    readLessButton.hide();
    $('.read_less_safe, .read_less_privacy').hide();
    $('#global_blue_star, #safe_blue_star, #privacy_blue_star').hide();

    // Show more content
    readMoreButton.on('click', function () {
      globallyContent.append(' Instantly exchangeable for local consumption. Spend it in dollars, Euro, Pesos, or any of 65+ different currencies.');
      readMoreButton.hide();
      readLessButton.show();
      $('#global_blue_star').show();
      $('#global_black_star').hide();
      $('.global_title').addClass('tagocash_features_title');
    });

    // tagocash is safe
    $('.read_more_safe').on('click', function () {
      safeContent.append('  It is only available to you and requires your biometrics to access. Your TagoCash is not stored or controlled by the Tago Platform. It is only referenced on the wallet controlled by you.');
      $('.read_more_safe, #safe_black_star').hide();
      $('.read_less_safe, #safe_blue_star').show();
      $('.safe_title').addClass('tagocash_features_title');
    });

    // tagocash is private
    $('.read_more_privacy').on('click', function () {
      privacyContent.append(' You do not need to share your address or bank or credit/debit card details with anyone. When you want to give TagoCash to someone, you only need their mobile number and email address.');
      $('.read_more_privacy, #privacy_black_star').hide();
      $('.read_less_privacy, #privacy_blue_star').show();
      $('.privacy_title').addClass('tagocash_features_title');
    });

    // Show less content
    readLessButton.on('click', function () {
      globallyContent.text('TagoCash is the cash of where you happen to be ');
      readMoreButton.show();
      readLessButton.hide();
      $('#global_blue_star').hide();
      $('#global_black_star').show();
      $('.global_title').removeClass('tagocash_features_title');
    });

    // tagocash is safe
    $('.read_less_safe').on('click', function () {
      safeContent.text('TagoCash can not be stolen. ');
      $('.read_more_safe, #safe_black_star').show();
      $('.read_less_safe, #safe_blue_star').hide();
      $('.safe_title').removeClass('tagocash_features_title');
    });
    // tagocash is private
    $('.read_less_privacy').on('click', function () {
      privacyContent.text('Using TagoCash protects your privacy. ');
      $('.read_more_privacy, #privacy_black_star').show();
      $('.read_less_privacy, #privacy_blue_star').hide();
      $('.privacy_title').removeClass('tagocash_features_title');
    });
    // end read more 

    return () => {
      $("#recipient_title, #amount_title, #confirm_pay_title, .read_more_safe, .read_less_safe, .read_more_privacy, .read_less_privacy, #number_one, #number_two, #number_three").off("click");
      readMoreButton.off('click');
      readLessButton.off('click');
    };
  }, []);

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
            <div className="d-flex active" id="recipient">
              <div id="button1" className="number_block mt-4">
                <p className="fw-semibold fs-5">1</p>
              </div>

              <div className="payment_process_card">
                <h3 id="recipient_title" className="hero_subtitle">
                  Choose Recipient
                </h3>
                <p
                  id="recipient_subtext"
                  className="sub_text payment_process_card_text"
                >
                  Find your partner on tagocash app via his phone or email.
                </p>
              </div>
            </div>

            <div className="d-flex mt-4" id="amount">
              <div id="button2" className="number_block mt-4">
                <p className="fw-semibold fs-5">2</p>
              </div>

              <div className="payment_process_card">
                <h3 id="amount_title" className="hero_subtitle">
                  Enter Amount
                </h3>
                <p
                  id="amount_subtext"
                  className="sub_text payment_process_card_text"
                >
                  Enter the amount to send from your wallet balance
                </p>
              </div>
            </div>

            <div className="d-flex mt-4" id="confirm_pay">
              <div id="button3" className="number_block mt-4">
                <p className="fw-semibold fs-5">3</p>
              </div>

              <div className="payment_process_card">
                <h3 id="confirm_pay_title" className="hero_subtitle">
                  Confirm & pay
                </h3>
                <p
                  id="pay_subtext"
                  className="sub_text payment_process_card_text"
                >
                  Money is received by partner in less than 10 seconds!
                </p>
              </div>
            </div>
          </div>

          <div>
            <div id="recipient_gif">
            <Lottie options={recipientOptions}
              height={475}
              width={500}
              />
            </div>

            <div id="amount_gif">
            <Lottie options={amountOptions}
              height={475}
              width={500}
              />
            </div>

            <div id="confirm_pay_gif">
            <Lottie options={confirmPayOptions}
              height={475}
              width={500}
              />
            </div>
          </div>
        </div>

        {/* begin mobile */}
        <div className="d-block d-md-none">
          <div className="numbers_mobile">
            <div className="d-flex justify-content-around mt-4">
              <div id="number_one">
                <p id="mobile_btn1" className="border border-dark rounded-4 px-4 fw-semibold fs-5 active">
                  1
                </p>
              </div>
              <div id="number_two">
                <p id="mobile_btn2" className="border border-dark rounded-4 px-4 fw-semibold fs-5">
                  2
                </p>
              </div>
              <div id="number_three">
                <p id="mobile_btn3" className="border border-dark rounded-4 px-4 fw-semibold fs-5">
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="payment_process_card text-center">
            <div id="recipient_block">
              <h3 className="hero_subtitle subtitle_small payment_process_title">Choose Recipient</h3>
              <p className="sub_text payment_process_card_text simple_steps_text">
                Find your partner on tagocash app via his phone or email.
              </p>
            </div>

            <div id="amount_block">
              <h3 className="hero_subtitle subtitle_small payment_process_title">Enter Amount</h3>
              <p className="sub_text payment_process_card_text simple_steps_text">
              Enter the amount to send from your wallet balance
              </p>
            </div>
            
            <div id="pay_block">
              <h3 className="hero_subtitle subtitle_small payment_process_title">Confirm & pay</h3>
              <p className="sub_text payment_process_card_text simple_steps_text">
              Money is received by partner in less than 10 seconds!
              </p>
            </div>

            
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
                <img className="tagocash_different_dimension"
                  src={tagocash_different}
                  width={"425px"}
                  height={"512px"}
                  alt=""
                />
              </div>

              <div className="mt-5 ms-4">
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <img id="global_black_star"
                      src={black_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <img id="global_blue_star"
                      src={blue_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle global_title">
                      TagoCash is Globally Available
                    </h3>
                  </div>
                  <div id="globally_content" className="sub_text tagocash_features_text">
                    TagoCash is the cash of where you happen to be
                  </div>
                  <p className="read_more ms-5 tagocash_features_title">Read more</p>
                    <p className="ms-5 read_less tagocash_features_title">Read Less</p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img id="safe_black_star"
                      src={black_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <img id="safe_blue_star"
                      src={blue_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle safe_title">TagoCash is Very Safe</h3>
                  </div>
                  <div id="safe_content" className="sub_text tagocash_features_text">
                    TagoCash can not be stolen.
                  </div>
                  <p className="read_more_safe ms-5 tagocash_features_title">Read more</p>
                    <p className="ms-5 read_less_safe tagocash_features_title">Read Less</p>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-2 align-items-center">
                    <img id="privacy_black_star"
                      src={black_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <img id="privacy_blue_star"
                      src={blue_star}
                      alt="star"
                      width={"24px"}
                      height={"24px"}
                    />
                    <h3 className="hero_subtitle privacy_title">TagoCash is Private</h3>
                  </div>
                  <div id="privacy_content" className="sub_text tagocash_features_text">
                    Using TagoCash protects your privacy.
                  </div>
                  <p className="read_more_privacy ms-5 tagocash_features_title">Read more</p>
                    <p className="ms-5 read_less_privacy tagocash_features_title">Read Less</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="d-block d-md-none ps-3">
        <div className="d-flex justify-content-between w-100">
          <div style={{width:"54%"}}>
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
          {/* begin mobile carousel */}
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-touch="true" data-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active bg-primary me-3"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  className="bg-primary me-3"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  className="bg-primary"
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
                      <img
                        src={blue_star}
                        width={"16px"}
                        height={"17px"}
                        alt=""
                      />
                      <h3 className="feature_card_title">Globally Available</h3>
                    </div>
                    <p className="blog_type_text text-dark ps-4">
                      Instantly exchangeable for local consumption. Spend it in
                      dollars, Euro, Pesos, or any of 65+ different currencies.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="feature_cards p-3">
                    <div className="d-flex gap-2">
                      <img
                        src={blue_star}
                        width={"16px"}
                        height={"17px"}
                        alt=""
                      />
                      <h3 className="feature_card_title">Very Safe</h3>
                    </div>
                    <p className="blog_type_text text-dark ps-4">
                      Only available to you and requires biometrics to access.
                      Your TagoCash is not stored or controlled by the Tago
                      Platform.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="feature_cards p-3">
                    <div className="d-flex gap-2">
                      <img
                        src={blue_star}
                        width={"16px"}
                        height={"17px"}
                        alt=""
                      />
                      <h3 className="feature_card_title">Tago is private</h3>
                    </div>
                    <p className="blog_type_text text-dark ps-4">
                      No need to share your bank or card details. To give
                      TagoCash to someone, you only need their mobile number and
                      email address.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="d-md-none d-block mt-4">
              <Slider {...paymentSettings}>
                <div>
                  <div class="mb-2">
                    <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img
                          src={blue_star}
                          width={"16px"}
                          height={"17px"}
                          alt=""
                        />
                        <h3 className="feature_card_title">Globally Available</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">
                        Instantly exchangeable for local consumption. Spend it in
                        dollars, Euro, Pesos, or any of 65+ different currencies.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                <div class="mb-2">
                    <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img
                          src={blue_star}
                          width={"16px"}
                          height={"17px"}
                          alt=""
                        />
                        <h3 className="feature_card_title">Very Safe</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">
                        Only available to you and requires biometrics to access.
                        Your TagoCash is not stored or controlled by the Tago
                        Platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                <div class="mb-2">
                    <div className="feature_cards p-3">
                      <div className="d-flex gap-2">
                        <img
                          src={blue_star}
                          width={"16px"}
                          height={"17px"}
                          alt=""
                        />
                        <h3 className="feature_card_title">Tago is private</h3>
                      </div>
                      <p className="blog_type_text text-dark ps-4">
                        No need to share your bank or card details. To give
                        TagoCash to someone, you only need their mobile number and
                        email address.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          {/* end mobile carousel */}

          </div>

          <div>
            <img
              src={tagocash_different_mobile}
              width={"158px"}
              height={"326px"}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* end mobile */}
    </div>
  );
};

export default PaymentProcess;
