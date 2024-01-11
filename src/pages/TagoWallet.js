import React, { useState } from "react";
import { blue_background } from "../assets";
import Lottie from "react-lottie";
import walletLottie from "../assets/lottieFiles/wallet.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const TagoWallet = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formKey, setFormKey] = useState(0);

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

  const walletOptions = {
    loop: true,
    autoplay: true,
    animationData: walletLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="newsletter_page position-relative">
      <div className="d-block d-md-none blue_background">
        <img
          className="position-absolute top-0 left-0"
          src={blue_background}
          width={"85%"}
          height={"275px"}
          alt=""
        />
      </div>
      <div className="container position-relative pb-5">
        <a href="/" className="text-decoration-none text-black">
          <p className="d-block d-md-none pt-4">&lt; Back</p>
        </a>
        <div className="d-md-flex py-md-5">
          <div className="img_block margin_top pb-md-5">
            <div className="d-md-block d-none">
              <Lottie options={walletOptions} height={375} width={425} />
            </div>
          </div>
          <div className="subscribe_block margin_top pb-5">
            <div className="ms-2 mt-3">
              <h3 className="hero_title contact_title">Coming soon !</h3>
              <p className="sub_text contact_subtext mb-3">
                Subscribe to our newsletter and be the first to know
              </p>
            </div>
            <div class="my-4">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                class="form-control rounded-5 px-3 input_bg py-2 bg-secondary bg-opacity-10 border-0"
                id="nameFormControlInput"
                placeholder="Enter Name *"
              />
              {!isNameValid && <p className="text-danger pt-2">{nameError}</p>}
            </div>
            <div class="mb-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                class="form-control rounded-5 bg-secondary bg-opacity-10 px-3 py-2 border-0"
                id="emailFormControlInput"
                placeholder="Enter Email *"
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
                disabled={!isNameValid || !isEmailValid || !isPhoneNumberValid}
                class="btn button_color text-white rounded-5 px-5 py-2 mb-md-5"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagoWallet;
