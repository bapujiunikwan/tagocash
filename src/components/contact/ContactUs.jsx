import React from 'react'
import { contacts, blue_background } from '../../assets'

const ContactUs = () => {
  return (
    <div className="contact_section position-relative">  
          {/* <img className='position-absolute top-0 left-0' src={blue_background} width={"300px"} height={"175px"} alt="" />       */}   
      <div className='container'>
      <div className='d-md-flex align-items-center py-md-5 pb-3'>
      <p className='d-block d-md-none pt-md-4 pt-3'>&lt; Back</p>
        <div className='left_sided_contact margin_top pb-md-5 contact_block'>
            <div>
                <img className='d-md-block d-none contacts_size' src={contacts} height={"338px"} width={"350px"} alt="" />
            </div>
            <p className='d-none d-md-block sub_text contact_subtext my-3'>Please feel free to reach out and let our team assist you.</p>
            </div>
            
        
        <div className="form_section margin_top">
        <div>
                <h3 className='hero_title contact_title mb-md-3'>Contact us</h3>
                <p className='d-block d-md-none sub_text contact_subtext mb-3'>Please feel free to reach out and let our team assist you.</p>
                
            </div>
        <div class="mb-4">
          <input type="text" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput1" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput2" placeholder="Enter Email" />
        </div>
        <div class="mb-4">
          <input type="tel" class="form-control rounded-5 px-3 py-2" id="exampleFormControlInput3" placeholder="Enter Phone number" />
        </div>
        <div class="mb-4">
          <textarea class="form-control rounded-5 px-3 py-3" id="exampleFormControlTextarea4" rows="3" placeholder='Enter Message'></textarea>
      </div>
      <div class="form-check mb-4">
      <input class="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
      I would like to <strong>subscribe</strong> and await new information 
      </label>
      </div>
      <div className='submit_btn'>
        <button type="button" class="btn btn-primary rounded-5 px-5 submit_btn">Submit</button>
      </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default ContactUs
