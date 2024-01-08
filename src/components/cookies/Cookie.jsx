import React, { useEffect, useState } from "react";
// import CookieConsent, { Cookies } from "react-cookie-consent";
import { useCookies } from "react-cookie";

const Cookie = ({setButton, showButton}) => {
  const [cookies, setCookie] = useCookies(["tagocash"]);

  const setCookieHandler = () => {
    setCookie("tagocash", "tagocashCookie", { path: "/", maxAge: "10" }); //
    setButton(false);
  };

  const closeHandler = () => {
    setButton(false);
  }

  useEffect(() => {
   
    if (cookies.myAwesomeCookieName4 !== undefined) {
      setButton(false);  
    } else {
      setButton(true);
    }
  }, []);

  return (
    <>
    <div className="cookie_bg position-sticky bottom-0 z-2">
        <div className="container py-3 px-4">
        <div className="d-flex justify-content-between">
          <h3 className="cookie_title">
            Want to help us improve your experience? Accept Cookies.
          </h3>
          <p className="text-dark pointer" onClick={closeHandler}>&#10005;</p>
        </div>
        <div className="d-md-flex justify-content-between">
          <p className="cookie_subtext w-75">
            Enabling these optional cookies helps us provide you with a better,
            more personalized experience, like your preferred language. To learn
            more, see our {" "}
            <a href="" className="text-decoration-none">
               Privacy Policy
            </a>
            . By using the service, you agree to the {" "} 
            <a href="" className="text-decoration-none">

              Terms of Service
            </a>
            .
          </p>
          <div>
          {showButton && (
        <div
          className="d-flex justify-content-center"
          onClick={setCookieHandler}
        >
          <button
            type="button"
            class="btn border-primary text-primary rounded-5 px-4"
          >
            Accept
          </button>
        </div>
      )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cookie;
