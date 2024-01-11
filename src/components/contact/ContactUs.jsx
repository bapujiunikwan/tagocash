import React, { useState } from "react";
import { blue_background } from "../../assets";
import Lottie from "react-lottie";
import contactUsLottie from "../../assets/lottieFiles/contactUs.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isCheckedValid, setIsCheckedValid] = useState(true);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isCheckedError, setIsCheckedError] = useState("");

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

  const handlePhoneChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    setIsPhoneNumberValid(newPhoneNumber.trim() !== "");
    setPhoneNumberError(
      newPhoneNumber.trim() !== "" ? "" : "Phone cannot be empty"
    );
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
    setIsMessageValid(newMessage.trim() !== "");
    setMessageError(newMessage.trim() !== "" ? "" : "Message cannot be empty");
  };

  const handleCheckboxChange = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    setIsCheckedValid(newIsChecked);
    setIsCheckedError(newIsChecked ? "" : "You must agree to the terms");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsNameValid(name.trim() !== "");
    setIsEmailValid(email.trim() !== "");
    setIsPhoneNumberValid(phoneNumber.trim() !== "");
    setIsMessageValid(message.trim() !== "");
    setIsCheckedValid(isChecked);

    setNameError(name.trim() !== "" ? "" : "Name cannot be empty");
    setEmailError(email.trim() !== "" ? "" : "Email cannot be empty");
    setPhoneNumberError(
      phoneNumber.trim() !== "" ? "" : "Phone cannot be empty"
    );
    setMessageError(message.trim() !== "" ? "" : "Message cannot be empty");
    setIsCheckedError(isChecked ? "" : "You must agree to the terms");

    if (
      isNameValid &&
      isEmailValid &&
      isPhoneNumberValid &&
      isMessageValid &&
      isCheckedValid
    ) {
      console.log("Form submitted:", {
        name,
        email,
        phoneNumber,
        message,
        isChecked,
      });

      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setIsChecked(false);
    }
  };

  const contactOptions = {
    loop: true,
    autoplay: true,
    animationData: contactUsLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="contact_section position-relative">
      <div className="d-block d-md-none blue_background">
        <img
          className="position-absolute top-0 left-0"
          src={blue_background}
          width={"90%"}
          height={"300px"}
          alt=""
        />
      </div>
      <div className="container position-relative pb-5">
        <div className="d-md-flex align-items-center py-md-5 pb-3">
          <a href="/" className="text-decoration-none text-black">
            <p className="d-block d-md-none pt-md-4 pt-3">&lt; Back</p>
          </a>
          <div className="left_sided_contact margin_top pb-md-5 contact_block">
            <div id="contact_lottie" className="d-none d-md-block">
              <Lottie options={contactOptions} height={339} width={373} />
            </div>
          </div>

          <div className="form_section margin_top">
            <div>
              <h3 className="hero_title contact_title mb-md-1">Contact us</h3>
              <p className="sub_text contact_subtext mb-4">
                Please feel free to reach out and let our team assist you
              </p>
            </div>
            <div class="mb-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                class="form-control rounded-5 px-3 py-2 border-0"
                id="exampleFormControlInput1"
                placeholder="Enter Name*"
              />
              {!isNameValid && <p className="text-danger pt-2">{nameError}</p>}
            </div>
            <div class="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                class="form-control rounded-5 px-3 py-2 border-0"
                id="exampleFormControlInput2"
                placeholder="Enter Email*"
              />
              {!isEmailValid && (
                <p className="text-danger pt-2">{emailError}</p>
              )}
            </div>

            <div>
              <PhoneInput
                country={"in"}
                value={phoneNumber}
                onChange={handlePhoneChange}
                enableSearch={true}
                countryCodeEditable={false}
                placeholder={"Enter Phone Number"}
                inputProps={{
                  name: "phoneNumber",
                  id: "phone_number",
                  autoFocus: true,
                }}
              />
              {!isPhoneNumberValid && (
                <p className="text-danger pt-2">{phoneNumberError}</p>
              )}
            </div>
            <div class="my-4">
              <textarea
                name="textArea"
                value={message}
                onChange={handleMessageChange}
                class="form-control rounded-5 px-3 py-3 border-0"
                id="exampleFormControlTextarea4"
                rows="3"
                placeholder="Enter Message*"
              ></textarea>
              {!isMessageValid && (
                <p className="text-danger pt-2">{messageError}</p>
              )}
            </div>
            <div>
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input rounded-0 p-2 me-3 pointer"
                  type="checkbox"
                  name="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label contact_subtext fs-6"
                  for="flexCheckDefault"
                >
                  I would like to <strong>subscribe</strong> and await new
                  information
                </label>
              </div>
              {!isCheckedValid && (
                <p className="text-danger pt-2">{isCheckedError}</p>
              )}
            </div>
            <div className="mb-5 mt-4">
              <button
                onClick={handleSubmit}
                disabled={
                  !isNameValid ||
                  !isEmailValid ||
                  !isPhoneNumberValid ||
                  !isMessageValid ||
                  !isCheckedValid
                }
                type="button"
                class="btn button_color text-white rounded-5 px-5 py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
