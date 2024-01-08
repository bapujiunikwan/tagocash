import React from 'react';
import Lottie from "react-lottie";
import pnfLottie from "../assets/lottieFiles/pnf.json"

const PageNotFound = () => {
    const pnfOptions = {
        loop: true,
        autoplay: true, 
        animationData: pnfLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='container'>
        <div className='d-flex flex-column align-items-center py-xl-5 py-3'>
            <div id='pnf_lottie' className='py-md-3'>
            <Lottie options={pnfOptions}
              height={455}
              width={747}
              />
            </div>
            <h3 className='hero_title my-xl-4 my-2'>Page Not Found</h3>
        </div>
      
    </div>
  );
}

export default PageNotFound;
