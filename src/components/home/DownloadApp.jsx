import React from "react";
import {
  download_section_logo,
  download_section_logo_mobile,
  google_play_cta,
  app_store_cta,
} from "../../assets";

const DownloadApp = () => {
  return (
    <>
      <div className="d-none d-md-block download_app_section position-relative mt-5">
        <div className="position-absolute end-0 pe-4">
          <img
            src={download_section_logo}
            height={"180px"}
            width={"408px"}
            alt=""
          />
        </div>
        <div className="d-flex gap-3 app_link_position">
          <a className="text-decoration-none" href="">
            <img src={google_play_cta} width={"166px"} height={"47px"} alt="" />
          </a>
          <a className="text-decoration-none" href="">
            <img src={app_store_cta} width={"153px"} height={"47px"} alt="" />
          </a>
        </div>
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="mt-5 ms-3">
              <h3 className="sub_title first_to_know_color">
                Fast. Free. Secure.
              </h3>
              <p className="download_app_subtext first_to_know_color">
                Download the Tagocash App Now!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*begin mobile */}
      <div className="d-block d-md-none download_app_section mt-5 position-relative">
        <img
          className="position-absolute bottom-0 start-50 translate-middle-x"
          src={download_section_logo_mobile}
          height={"120px"}
          width={"303px"}
          alt=""
        />
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="text-center mx-auto">
              <h3 className="sub_title first_to_know_color mt-4">
                Fast. Free. <br /> Secure.
              </h3>
              <p className="download_app_subtext">
                Download the Tagocash App Now!
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3 mt-4 position-relative">
          <a className="text-decoration-none" href="">
            <img src={google_play_cta} width={"166px"} height={"47px"} alt="" />
          </a>
          <a className="text-decoration-none" href="">
            <img src={app_store_cta} width={"166px"} height={"47px"} alt="" />
          </a>
        </div>
      </div>
      {/*end mobile */}
    </>
  );
};

export default DownloadApp;
