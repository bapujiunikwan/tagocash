import React, { useState } from "react";
import { tick_mark, hero_tick } from "../../assets";
import Slider from "react-slick";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formKey, setFormKey] = useState(0); // Key to force remounting PhoneInput

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setIsNameValid(newName.trim() !== "");
    setNameError(newName.trim() !== "" ? "" : "Name cannot be empty");
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
    setEmailError(emailRegex.test(newEmail) ? "" : "Invalid email format");
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setIsPhoneNumberValid(value && value.trim() !== ""); // Basic validation: non-empty
    setPhoneNumberError(
      value && value.trim() !== "" ? "" : "Phone cannot be empty"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsNameValid(name.trim() !== "");
    setIsEmailValid(email.trim() !== "");
    setIsPhoneNumberValid(phoneNumber && phoneNumber.trim() !== "");

    setNameError(name.trim() !== "" ? "" : "Name cannot be empty");
    setEmailError(email.trim() !== "" ? "" : "Email cannot be empty");
    setPhoneNumberError(
      phoneNumber && phoneNumber.trim() !== "" ? "" : "Phone cannot be empty"
    );

    if (isNameValid && isEmailValid && isPhoneNumberValid) {
      console.log("Form submitted:", { name, email, phoneNumber });

      setName("");
      setEmail("");
      setPhoneNumber("");

      setFormKey((prevKey) => prevKey + 1);
    }
  };

  var plansSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="d-xl-flex align-items-center gap">
        <div className="mt-5 text-center text-xl-start">
          <h3 className="membership_title">
            TagoCash <br /> Membership Plan
          </h3>
          <p className="fasst_feature_description lh-base">
            Join the Tago community, Now!
          </p>
        </div>
        <div className="d-none d-md-flex gap-5 justify-content-center mt-5">
          <div class="card shadow border-0 cards">
            <div className="free_plan text-center p-3">
              <h3 className="plan_title">Tago Fan</h3>
              <div className="plan_duration">
                <p className="download_app_subtext fs-6 py-1">
                  Forever Free Plan
                </p>
              </div>
              <div className="text-white">
                <span className="fasst_title">$0 </span>
                <span className="fs-6">/ Annually</span>
              </div>
              <p className="download_app_subtext mt-2">
                Minimum balance of $20 in wallet
              </p>
            </div>
            <div className="card-body">
              <div className="d-flex gap-3 align-items-start">
                <img src={tick_mark} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  <span className="fw-bold">Free</span> to Sign up
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={tick_mark} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  <span className="fw-bold">Unlimited</span> send to any
                  TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={tick_mark} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  <span className="fw-bold">Free unlimited</span> receive from
                  any TagoCash user
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={tick_mark} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Standard 1.5% to withdraw to your bank account or mobile money
                  account
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={tick_mark} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Instant conversion to any local currency -nominal rate vary
                  per country
                </p>
              </div>
              <div>
                <p className="fst-italic blog_type_text text-dark">
                  * Tago Fan with less than $20.00 rolling 30-day balance will
                  be charged $0.50 per sending.
                </p>
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  class="btn button_color text-white rounded-5 px-4"
                >
                  Sign up now !
                </button>
              </div>
            </div>
          </div>

          <div class="card shadow border-0 cards">
            <div className="annual_plan text-center p-3">
              <h3 className="plan_title">Tago Hero</h3>
              <div className="plan_duration my-4">
                <p className="download_app_subtext fs-6 py-1">Annual Plan</p>
              </div>
              <div className="pb-5 pt-3">
                <h4 className="text-white cookie_title">Coming in July 2024</h4>
              </div>
            </div>
            <div className="card-body">
              <p className="footer_subtext pt-1">
                Enjoy perks and freedom like:
              </p>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Higher daily, weekly, monthly limit
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  1% discount on local conversion fees (Saving of more than
                  $100.00 over a year)
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Ability to withdraw into any crypto wallet
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Ability to withdraw as USDT to a crypto wallet
                </p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">First class human support</p>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <img src={hero_tick} width={"23px"} height={"23px"} alt="" />
                <p className="footer_subtext">
                  Preferred email and chat support
                </p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  class="btn border-primary text-primary rounded-5 px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Register to be Notified
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-bottom-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="py-md-4 px-5">
                <h1
                  class="modal-title modal_title text-center text-md-start"
                  id="staticBackdropLabel"
                >
                  Pre - Register to be Notified{" "}
                </h1>
                <h4 className="modal_subtext py-1 text-center text-md-start">
                  Tago Hero Coming in July 2024
                </h4>
              </div>
              <div class="modal-body px-5">
                <div class="mb-4">
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    class="form-control rounded-5 px-3 input_bg py-2 bg-secondary bg-opacity-10 border-0"
                    id="nameFormControlInput"
                    placeholder="Enter Name"
                  />
                  {!isNameValid && (
                    <p className="text-danger pt-2">{nameError}</p>
                  )}
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0"
                    id="emailFormControlInput"
                    placeholder="Enter Email"
                  />
                  {!isEmailValid && (
                    <p className="text-danger pt-2">{emailError}</p>
                  )}
                </div>
                <div>
                  <PhoneInput
                    className="wallet_input_bg"
                    key={formKey}
                    country={"in"}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    countryCodeEditable={false}
                    placeholder={"Enter Phone Number"}
                    inputProps={{
                      id: "phone_number",
                      autoFocus: true,
                    }}
                  />
                  {!isPhoneNumberValid && (
                    <p className="text-danger pt-2">{phoneNumberError}</p>
                  )}
                </div>
                <div className="mb-5 mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={
                      !isNameValid || !isEmailValid || !isPhoneNumberValid
                    }
                    class="btn button_color text-white rounded-5 px-4 py-2 mb-md-5"
                  >
                    Pre-Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* begin mobile */}
      <div className="d-md-none d-block mt-4">
        <Slider {...plansSettings}>
          <div>
            <div class="me-2">
              <div class="card border cards mb-5">
                <div className="free_plan text-center p-3">
                  <h3 className="plan_title">Tago Fan</h3>
                  <div className="plan_duration">
                    <p className="download_app_subtext fs-6 py-1">
                      Forever Free Plan
                    </p>
                  </div>
                  <div className="text-white">
                    <span className="fasst_title">$0 </span>
                    <span className="fs-6">/ Annually</span>
                  </div>
                  <p className="download_app_subtext mt-2">
                    Minimum balance of $20 in wallet
                  </p>
                </div>
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={tick_mark}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      <span className="fw-bold">Free</span> to Sign up
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={tick_mark}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      <span className="fw-bold">Unlimited</span> send to any
                      TagoCash user
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={tick_mark}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      <span className="fw-bold">Free unlimited</span> receive
                      from any TagoCash user
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={tick_mark}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Standard 1.5% to withdraw to your bank account or mobile
                      money account
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={tick_mark}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Instant conversion to any local currency -nominal rate
                      vary per country
                    </p>
                  </div>
                  <div>
                    <p className="fst-italic blog_type_text text-dark">
                      * Tago Fan with less than $20.00 rolling 30-day balance
                      will be charged $0.50 per sending.
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      class="btn button_color text-white rounded-5 px-4"
                    >
                      Sign up now !
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="me-2">
              <div class="card border cards mb-5">
                <div className="annual_plan text-center p-3">
                  <h3 className="plan_title">Tago Hero</h3>
                  <div className="plan_duration my-4">
                    <p className="download_app_subtext fs-6 py-1">
                      Annual Plan
                    </p>
                  </div>
                  <div className="pb-5 pt-3">
                    <h4 className="text-white cookie_title">
                      Coming in July 2024
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <p className="footer_subtext pt-1">
                    Enjoy perks and freedom like:
                  </p>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Higher daily, weekly, monthly limit
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      1% discount on local conversion fees (Saving of more than
                      $100.00 over a year)
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Ability to withdraw into any crypto wallet
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Ability to withdraw as USDT to a crypto wallet
                    </p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">First class human support</p>
                  </div>
                  <div className="d-flex gap-3 align-items-start">
                    <img
                      src={hero_tick}
                      width={"23px"}
                      height={"23px"}
                      alt=""
                    />
                    <p className="footer_subtext">
                      Preferred email and chat support
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="button"
                      class="btn border-primary text-primary rounded-5 px-4"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Register to be Notified
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* end mobile */}
    </div>
  );
}

export default SignUp;
