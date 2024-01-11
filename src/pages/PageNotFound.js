import React from "react";
import Lottie from "react-lottie";
import pnfLottie from "../assets/lottieFiles/pnf.json";

const PageNotFound = () => {
  const pnfOptions = {
    loop: true,
    autoplay: true,
    animationData: pnfLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center py-5">
        <div id="pnf_lottie">
          <Lottie options={pnfOptions} height={400} width={747} />
        </div>
        <h3 className="hero_title mb-2">Page Not Found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
