import React from "react";
import {
  app_store_cta,
  google_play_cta,
  currencyanimation,
} from "../../assets";
import Lottie from "react-lottie";
import heroLottie from "../../assets/lottieFiles/hero.json";

const HeroSection = () => {
  const globeOptions = {
    loop: true,
    autoplay: true,
    animationData: heroLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-lg-between justify-content-center margin_top">
        <div className="mt-5">
          <h1 className="hero_title text-center text-md-start">
            Everywhere you go, <span className="hero_title_tago">Tago!</span>
          </h1>
          <h3 className="hero_subtitle subtitle_small mt-3 text-center text-md-start">
            TagoCash is your digital cash wallet.
            <br />
            <span className="sub_text hero_subtext">
              Take it with you whereever you go!
            </span>
          </h3>

          <div className="d-lg-none d-block text-center mb-3">
            <Lottie options={globeOptions} height={280} width={266} />
          </div>
          <div className="d-md-flex d-md-none align-items-center margin_top my-5 gap-2">
            <h3 className="sub_title globally_title text-center text-md-start">
              Available globally in 40+ currencies
            </h3>
            <div className="currency_animation_block">
              <img
                className="currencyanimation_image_size"
                src={currencyanimation}
                alt="currencies"
                width={"849px"}
                height={"64px"}
              />
            </div>
          </div>
          {/* <div className="d-md-none d-block text-center mb-4 footer_subtext">
            Download now , on
          </div> */}
          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-md-5 mb-md-0 mb-5">
            <a className="text-decoration-none" href="">
              <img
                src={google_play_cta}
                width={"166px"}
                height={"47px"}
                alt=""
              />
            </a>

            <a className="text-decoration-none" href="">
              <img src={app_store_cta} width={"153px"} height={"47px"} alt="" />
            </a>
          </div>
        </div>

        <div className="d-lg-block d-none">
          <Lottie options={globeOptions} height={365} width={474} />
        </div>
      </div>

      <div className="d-none d-md-flex flex-lg-row flex-column align-items-center justify-content-between margin_top mb-5 gap-5">
        <h3 className="sub_title globally_title text-center text-md-start">
          Available globally in 40+ currencies
        </h3>
        <div className="currency_animation_block">
          <img
            className="currencyanimation_image_size"
            src={currencyanimation}
            alt="currencies"
            width={"650px"}
            height={"45px"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
