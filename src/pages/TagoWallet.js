import React from 'react'
import { subscribe_animation } from '../assets'

const TagoWallet = () => {
  return (
    <div className="newsletter_page">
      <div className='container'>
      <p className='d-block d-md-none my-4'>&lt; Back</p>
      <div className='d-md-flex py-5'>
        <div className='img_block margin_top pb-md-5'>
            <div>
                <img src={subscribe_animation} width={"425px"} height={"375px"} alt="" className='rounded post_box_size d-md-block d-none' />
            </div>
        </div>
        <div className="subscribe_block margin_top">
        <div className='ms-2 mt-3'>
                <h3 className='hero_title contact_title'>Coming soon !</h3>
                <p className='sub_text contact_subtext'>Subscribe to our newsletter and be the first to know. </p>
        </div>
        <div class="my-4">
          <input type="text" class="form-control rounded-5 px-3 input_bg py-2 bg-secondary bg-opacity-10" id="exampleFormControlInput1" placeholder="Enter Name" />
        </div>
        <div class="mb-4">
          <input type="email" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2" id="exampleFormControlInput2" placeholder="Enter Email" />
        </div>
        <div class="mb-4">
          <input type="tel" class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2" id="exampleFormControlInput3" placeholder="Enter Phone number" />
        </div>
        <div className='submit_btn'>
          <button type="button" class="btn btn-primary rounded-5 px-4">Subscribe</button>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TagoWallet
