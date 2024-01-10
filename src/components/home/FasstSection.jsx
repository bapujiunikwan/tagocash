import React from "react";
import {
  fasst,
  fasst_tagocash_logo,
  fast,
  affordable,
  safe,
  secure,
  transparent,
} from "../../assets";

const FasstSection = () => {
  return (  
      <div className="hero_section">
        <div className="container">
          <div className="d-flex flex-md-row flex-column-reverse align-items-center gap-3">
            <div>
              <img
                className="fasst_mobile"
                src={fasst}
                width={"799px"}
                height={"416px"}
                alt=""
              />
            </div>

            <div>
              <div className="d-flex align-items-center gap-2">
                <h3 className="sub_title why_tago_title">Why</h3>
                <img
                  className="fasst_tagocash_logo mt-md-2"
                  src={fasst_tagocash_logo}
                  width={"275px"}
                  height={"50px"}
                  alt=""
                />
                <span className="sub_title why_tago_title">?</span>
              </div>
              <h3 className="sub_title why_tago_title">Because cash is king... </h3>
            </div>
          </div>

          <div className="pb-5 margin_top">
            <div className="d-md-flex d-none gap-3 justify-content-center">
              <img className="fasst_logo_size"
                src={fasst_tagocash_logo}
                width={"358px"}
                height={"71px"}
                alt=""
              />
              <h3 className="cash_king_title fasst_title">is F.A.S.S.T</h3>
            </div>

            <div className="d-md-flex fasst_tab mt-5">
              <div className="d-flex gap-2 mb-xl-0 mb-md-4">
                <div className="ms-2 ms-md-0 me-md-5 fasst_feature">
                  <div className="d-flex gap-3">
                    <div className="svg_background d-flex align-items-center justify-content-center">
                      <img src={fast} width={"28px"} height={"28px"} alt="" />
                    </div>
                    <h3 className="hero_subtitle footer_title">Fast</h3>
                  </div>
                  <p className="fasst_feature_description fasst_fast_text_width pt-2">
                    Near real-time transaction
                  </p>
                </div>

                <div className="ms-md-3 me-md-5 fasst_feature">
                  <div className="d-flex gap-3">
                    <div className="svg_background d-flex align-items-center justify-content-center">
                      <img
                        src={affordable}
                        width={"22px"}
                        height={"22px"}
                        alt=""
                      />
                    </div>
                    <h3 className="hero_subtitle footer_title">Affordable</h3>
                  </div>
                  <p className="fasst_feature_description fasst_affordable_text_width pt-2">
                    $0 to 1% transfer fee available
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2 mt-4 mt-md-0 mb-xl-0 mb-md-4">
                <div className="ms-2 me-md-5 fasst_feature">
                  <div className="d-flex gap-3">
                    <div className="svg_background d-flex align-items-center justify-content-center">
                      <img src={safe} width={"25px"} height={"25px"} alt="" />
                    </div>
                    <h3 className="hero_subtitle footer_title">Safe</h3>
                  </div>
                  <p className="fasst_feature_description fasst_safe_text_width pt-2">
                    Only accessible to you
                  </p>
                </div>

                <div className="ms-md-2 me-md-5 fasst_feature">
                  <div className="d-flex gap-3">
                    <div className="svg_background d-flex align-items-center justify-content-center">
                      <img src={secure} width={"24px"} height={"24px"} alt="" />
                    </div>
                    <h3 className="hero_subtitle footer_title">Secure</h3>
                  </div>
                  <p className="fasst_feature_description fasst_secure_text_width pt-2">
                    Bank-grade security technology
                  </p>
                </div>
              </div>
              <div className="ms-md-3 ms-2 me-md-5">
                <div className="d-flex gap-3">
                  <div className="svg_background d-flex align-items-center justify-content-center">
                    <img
                      src={transparent}
                      width={"30px"}
                      height={"30px"}
                      alt=""
                    />
                  </div>
                  <h3 className="hero_subtitle footer_title">Transparent</h3>
                </div>
                <p className="fasst_feature_description fasst_secure_text_width pt-2">
                  No hidden fees, <br /> You pay what you see
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FasstSection;
