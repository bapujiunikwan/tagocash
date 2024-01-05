import React from "react";
import {
  fasst_tagocash_logo,
  mobile_payment,
  money_gram,
  coinstar,
  bank,
} from "../../assets";

const MoreWithTagoCash = () => {
  return (
    <div className="container margin_top">
      <div class="more_with_tago_features grid-container my-5">
        <div className="row">
          <div class="col-5">
            <h2 className="hero_title get_more_title mt-3">Get more with </h2>
            <img
              src={fasst_tagocash_logo}
              width={"288px"}
              height={"57px"}
              alt=""
            />
          </div>
          <div class="col-7 rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex justify-content-center get_more_feature_padding">
              <div>
                <img
                  src={coinstar}
                  width={"89px"}
                  height={"81px"}
                  alt=""
                  className="me-4"
                />
              </div>
              <div>
                <p className="fasst_feature_description get_more_subtext coinstar_text mt-2">
                  Withdraw local cash from 40,000+ coinstar ATM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="item1 rounded-3 get_more_feature_padding get_feature_box">
          <div className="d-flex flex-column get_more_feature_padding">
            <div>
              <img
                src={bank}
                width={"100px"}
                height={"100px"}
                alt=""
                className="mb-3"
              />
            </div>
            <div>
              <p className="fasst_feature_description get_more_subtext linked_bank_text ms-3">
                Instant transfer to and from linked bank accounts
              </p>
            </div>
          </div>
        </div>

        <div className="row gap-4 mt-3">
          <div class="col rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex">
              <div>
                <img
                  src={mobile_payment}
                  width={"92px"}
                  height={"92px"}
                  alt=""
                  className="mx-4 mt-2"
                />
              </div>
              <div>
                <p className="fasst_feature_description get_more_subtext cards_text py-2">
                  Instant Transfer to and from any mobile money account
                </p>
              </div>
            </div>
          </div>
          <div class="col rounded-3 get_more_feature_padding get_feature_box">
            <div className="d-flex justify-content-center mt-2">
              <div>
                <img
                  src={money_gram}
                  width={"79px"}
                  height={"78px"}
                  alt=""
                  className="ms-3 me-5 mt-2"
                />
              </div>
              <div>
                <p className="fasst_feature_description get_more_subtext money_gram_text">
                  Withdraw or deposit local currency cash from 21,000+ MoneyGram
                  store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="more_with_tago_small">
        <h3 className="text-center get_more_title my-5">
          Get more with <img
              src={fasst_tagocash_logo}
              width={"150px"}
              height={"30px"}
              alt=""
            />
        </h3>
        <div className="d-flex gap-2">
          <div>
            <div className="d-flex align-items-center mobile_card cards_bg p-2">
              <div>
                <p className="footer_subtext text-end me-1">
                  Instant Transfer to and from any mobile money account
                </p>
              </div>
              <div>
                <img
                  src={mobile_payment}
                  width={"50px"}
                  height={"50px"}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center bank_accout_card cards_bg p-2">
              <div>
                <img src={bank} width={"45px"} height={"45px"} alt="" />
              </div>
              <div>
                <p className="footer_subtext ms-1">
                  Instant transfer to and from linked bank accounts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 mt-2">
          <div>
            <div className="d-flex align-items-center store_card cards_bg p-2">
              <div>
                <p className="footer_subtext text-end me-2">
                Withdraw or deposit currency from 21,000+ store
                </p>
              </div>
              <div>
                <img
                  src={money_gram}
                  width={"50px"}
                  height={"40px"}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center atm_card cards_bg p-2">
              <div>
                <img
                  src={coinstar}
                  width={"50px"}
                  height={"50px"}
                  alt=""
                />
              </div>
              <div>
                <p className="footer_subtext ms-2 ps-1">
                Withdraw local cash  at 40,000+ Coinstar ATM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWithTagoCash;
