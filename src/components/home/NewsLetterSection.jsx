import React from "react";
import { news_letter, news_letter_mobile } from "../../assets";

const NewsLetterSection = () => {
  return (
    <div className="news_letter_section position-relative">
      <div className="container">
        <div className="d-md-flex d-none">
          <div className="ms-2">
            <img
              className="news_letter_size"
              src={news_letter}
              width={"630px"}
              height={"269px"}
              alt=""
            />
          </div>

          <div className="mt-5 d-none d-md-block">
            <div>
              <h3 className="sub_title first_to_know_color">
                Be the first to know!
              </h3>
              <p className="sub_text first_to_know_color">
                Subscribe to our newsletter to stay up to data{" "}
              </p>
            </div>
            <div className="d-flex gap-5 subscribe_block mt-4 subscribe_field_tab">
              <input
                type="email"
                className="form-control outline-none border-0 hover-none rounded-5"
                placeholder="example@xyz.com"
                name=""
                id=""
              />
              <button type="submit" className="btn btn-primary rounded-5 px-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* begin mobile version */}
      <div className="d-block d-md-none">
        <div>
          <img
            className="pb-1 position-relative"
            src={news_letter_mobile}
            width={"320px"}
            height={"200px"}
            alt=""
          />
        </div>
        <div className="newsletter_content_mobile">
          <div className="px-3">
            <h3 className="sub_title first_to_know_color footer_title">
              Be the first to know!
            </h3>
            <p className="sub_text first_to_know_color footer_subtext">
              Subscribe to our newsletter to stay up to data{" "}
            </p>
          </div>
        </div>
        <div className="d-flex gap-5 subscribe_field_mobile">
          <input
            type="email"
            className="form-control outline-none border-0 hover-none rounded-5"
            placeholder="example@xyz.com"
            name=""
            id=""
          />
          <button type="submit" className="btn btn-primary rounded-5 px-3">
            Subscribe
          </button>
        </div>
      </div>
      {/* end mobile version */}
    </div>
  );
};

export default NewsLetterSection;
