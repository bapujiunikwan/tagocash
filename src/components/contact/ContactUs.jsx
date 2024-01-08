import React from 'react'
import { blue_background } from '../../assets'
import Lottie from "react-lottie";
import contactUsLottie from "../../assets/lottieFiles/contactUs.json"

const ContactUs = () => {
  const contactOptions = {
    loop: true,
    autoplay: true, 
    animationData: contactUsLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="contact_section position-relative">
      <div className='d-block d-md-none blue_background'>
        <img className='position-absolute top-0 left-0' src={blue_background} width={"90%"} height={"140px"} alt="" />
      </div>                
      <div className='container position-relative pb-5'>
      <div className='d-md-flex align-items-center py-md-5 pb-3'>
      <a href="/" className="text-decoration-none text-black">
      <p className='d-block d-md-none pt-md-4 pt-3'>&lt; Back</p>
      </a>
        <div className='left_sided_contact margin_top pb-md-5 contact_block'>
            <div id='contact_lottie'
             className='d-none d-md-block'>
                <Lottie options={contactOptions}
              height={339}
              width={373}
              />
            </div>
            </div>
            
        
        <div className="form_section margin_top">
        <div>
                <h3 className='hero_title contact_title mb-md-1'>Contact us</h3>
                <p className='sub_text contact_subtext mb-4'>Please feel free to reach out and let our team assist you.</p>
                
            </div>
        <div class="mb-4">
          <input type="text" class="form-control rounded-5 px-3 py-2 border-0" id="exampleFormControlInput1" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 px-3 py-2 border-0" id="exampleFormControlInput2" placeholder="Enter Email" />
        </div>
        <div class="mb-4">
          <input type="tel" class="form-control rounded-5 px-3 py-2 border-0" id="exampleFormControlInput3" placeholder="Enter Phone number" />
        </div>
        <div class="mb-4">
          <textarea class="form-control rounded-5 px-3 py-3 border-0" id="exampleFormControlTextarea4" rows="3" placeholder='Enter Message'></textarea>
      </div>
      <div class="form-check d-flex align-items-center mb-4">
      <input class="form-check-input rounded-0 p-2 me-3" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label mt-1 contact_subtext" for="flexCheckDefault">
      I would like to <strong>subscribe</strong> and await new information 
      </label>
      </div>
      <div className='mb-5'>
        <button type="button" class="btn button_color text-white rounded-5 px-5 py-2">Submit</button>
      </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default ContactUs
