import React from 'react'
import {blue_background } from '../assets'
import Lottie from "react-lottie";
import walletLottie from "../assets/lottieFiles/wallet.json"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TagoWallet = () => {
  const walletOptions = {
    loop: true,
    autoplay: true, 
    animationData: walletLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="newsletter_page position-relative">
      <div className='d-block d-md-none blue_background'>
        <img className='position-absolute top-0 left-0' src={blue_background} width={"85%"} height={"275px"}  alt="" />
      </div> 
      <div className='container position-relative pb-5'>
      <a href="/" className="text-decoration-none text-black">
      <p className='d-block d-md-none pt-4'>&lt; Back</p>
      </a>
      <div className='d-md-flex py-md-5'>
        <div className='img_block margin_top pb-md-5'>
            <div className='d-md-block d-none'>
              
                <Lottie options={walletOptions}
              height={375}
              width={425}
              />
            </div>
        </div>
        <div className="subscribe_block margin_top pb-5">
        <div className='ms-2 mt-3'>
                <h3 className='hero_title contact_title'>Coming soon !</h3>
                <p className='sub_text contact_subtext mb-3'>Subscribe to our newsletter and be the first to know</p>
        </div>
        <div class="my-4">
          <input type="text" class="form-control rounded-5 px-3 input_bg py-2 bg-secondary bg-opacity-10 border-0" id="nameFormControlInput" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0" id="emailFormControlInput" placeholder="Enter Email" />
        </div>
        {/* <div class="mb-4">
          <input type="tel" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0" id="phoneFormControlInput" placeholder="Enter Phone number" />
        </div> */}
        <PhoneInput className="mb-4 wallet_input_bg"
            country={"in"}
            // value={phoneNumber}
            // onChange={validateNumber}
            enableSearch={true}
            countryCodeEditable={false}
            placeholder={"Enter Phone Number"}
            inputProps={{
              id: "phone_number",
              autoFocus: true
            }}
          />
        <div className='mb-5'>
          <button type="button" class="btn button_color text-white rounded-5 px-5 py-2 mb-md-5">Subscribe</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TagoWallet
