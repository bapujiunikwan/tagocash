import React, {useState} from 'react'
import { blue_background } from '../../assets'
import Lottie from "react-lottie";
import contactUsLottie from "../../assets/lottieFiles/contactUs.json"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    textArea: '',
    checkbox: false,
  });

  const [phoneNumber, setPhone] = useState('')

  const validateNumber = (value, data) => {
    var onlyPhoneNumber = value.slice(data.dialCode.length);
    if (onlyPhoneNumber !== "") {
      setPhone("phnNmbrValidation", true);
    } else {
      setPhone("phnNmbrValidation", false);
    }
    if (data.countryCode === "in") {
      if (onlyPhoneNumber.length === 10) {
        setPhone("phnNmbrValidation", true);
      } else {
        setPhone("phnNmbrValidation", false);
      }
    } else {
    }
    var elem = document.getElementById("phone_number");
    elem.focus();
    setPhone("phoneNumber", value);
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
  
    // Name validation
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Phone number validation
    if (!formData.phoneNumber || !/^\+[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid phone number';
    }
  
    // Text area validation
    if (!formData.textArea || !formData.textArea.trim()) {
      newErrors.textArea = 'Text area cannot be empty';
    }
  
    // Checkbox validation
    if (!formData.checkbox) {
      newErrors.checkbox = 'Checkbox must be checked';
    }
  
    setErrors(newErrors);
  
    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the form
    const isValid = validateForm();
  
    // Debugging: Log the form data and validation status
    console.log('Form Data:', formData);
    console.log('Validation Status:', isValid);
  
    if (isValid) {
      // Perform your form submission logic here
      console.log('Form submitted successfully!', formData);
    } else {
      console.log('Form validation failed');
    }
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  
    // Clear validation error when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };
  
  const contactOptions = {
    loop: true,
    autoplay: true, 
    animationData: contactUsLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="contact_section position-relative">
      <div className='d-block d-md-none blue_background'>
        <img className='position-absolute top-0 left-0' src={blue_background} width={"90%"} height={"300px"} alt="" />
      </div>                
      <div className='container position-relative pb-5'>
      <div className='d-md-flex align-items-center py-md-5 pb-3'>
      <a href="/" className="text-decoration-none text-black">
      <p className='d-block d-md-none pt-md-4 pt-3'>&lt; Back</p>
      </a>
        <div className='left_sided_contact margin_top pb-md-5 contact_block'>
            <div id='contact_lottie'
             className='d-none d-md-block'>
                <Lottie options={contactOptions}
              height={339}
              width={373}
              />
            </div>
            </div>
            
        
        <div className="form_section margin_top">
        <div>
                <h3 className='hero_title contact_title mb-md-1'>Contact us</h3>
                <p className='sub_text contact_subtext mb-4'>Please feel free to reach out and let our team assist you</p>
                
            </div>
        <div class="mb-4">
          <input type="text" name="name"
          value={formData.name}
          onChange={handleChange} class="form-control rounded-5 px-3 py-2 border-0" id="exampleFormControlInput1" placeholder="Enter Name" />
          {errors.name && <span className='text-danger fs-6'>{errors.name}</span>}
        </div>
        <div class="mb-4">
          <input type="email" name="email"
          value={formData.email}
          onChange={handleChange} class="form-control rounded-5 px-3 py-2 border-0" id="exampleFormControlInput2" placeholder="Enter Email" />
          {errors.email && <span className='text-danger fs-6'>{errors.email}</span>}
        </div>
        
        <div>
          <PhoneInput className="mb-4"
            country={"in"}
            value={formData.phoneNumber}
            onChange={(value, country, event, formattedValue) => handleChange(event, value)}
            // value={phoneNumber}
            // onChange={validateNumber}
            enableSearch={true}
            countryCodeEditable={false}
            placeholder={"Enter Phone Number"}
            inputProps={{
              name: "phoneNumber",
              id: "phone_number",
              autoFocus: true
            }}  
          />
          {/* {errors.phoneNumber && <span className='text-danger fs-6'>{errors.phoneNumber}</span>} */}
        </div>
        <div class="mb-4">
          <textarea name="textArea"
          value={formData.textArea}
          onChange={handleChange} class="form-control rounded-5 px-3 py-3 border-0" id="exampleFormControlTextarea4" rows="3" placeholder='Enter Message'></textarea>
          {errors.textArea && <span className='text-danger fs-6'>{errors.textArea}</span>}
      </div>
      <div>
      <div class="form-check d-flex align-items-center mb-4">
      <input class="form-check-input rounded-0 p-2 me-3 pointer" type="checkbox" name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange} id="flexCheckDefault"/>
      <label class="form-check-label contact_subtext fs-6" for="flexCheckDefault">
      I would like to <strong>subscribe</strong> and await new information 
      </label>
      </div>
      {errors.checkbox && <span className='text-danger fs-6'>{errors.checkbox}</span>}
      </div>
      <div className='mb-5'>
        <button onClick={handleSubmit} type="button" class="btn button_color text-white rounded-5 px-5 py-2">Submit</button>
      </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default ContactUs