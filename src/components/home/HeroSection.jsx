import React from "react";
import {app_store, google_play, hero, currencyanimation_image, hero_mobile } from "../../assets";

const HeroSection = () => {
  return (
      <div className="container">
        <div className="d-flex gap margin_top">
          <div className="mt-5">
            <h1 className="hero_title text-center text-md-start">
              Everywhere you go, <span className="hero_title_tago">Tago!</span>
            </h1>
            <h3 className="hero_subtitle subtitle_small mt-3 text-center text-md-start">
             TagoCash, is your cash stored in digital wallet.<br />
              <span className="sub_text hero_subtext">
              Take it with you where ever you go!
              </span>
            </h3>

            <div className="d-lg-none d-block text-center mb-3">
              <img src={hero_mobile} width={"266px"} height={"280px"} alt="" />
            </div>
            <div className="d-md-none d-block text-center mb-4 footer_subtext">
            Download now , on 
            </div>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-md-5 mb-md-0 mb-5">
            <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">App Store</p>
                        <img src={app_store} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
                    
                    <a className="text-decoration-none" href="">
                      <div className="d-flex align-items-center justify-content-center app_link gap-2">
                        <p className="footer_subtext text-white my-2 p-1">Google Play</p>
                        <img src={google_play} width={"23px"} height={"23px"}  alt="" />
                      </div>
                    </a>
            </div>
          </div>

          <div className="ms-5 d-lg-block d-none">
            <img src={hero} alt="hero image" width={"474px"} height={"365px"} />
          </div>
        </div>

        <div className="d-md-flex align-items-center margin_top mb-5 gap-3">
          <h3 className="sub_title globally_title text-center text-md-start">Available Globally in 
          40+ currencies</h3>
          <div className="currency_animation_block">
            <img className="currencyanimation_image_size" src={currencyanimation_image} alt="currencies" width={"849px"} height={"64px"} />
          </div>
        </div>
      </div>
   
  );
};

export default HeroSection;
