import React from "react";
import { tagocash_logo } from "../../assets";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 shadow-sm bg-white z-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={tagocash_logo} width={"218px"} height={"43px"} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          style={{ textAlign: "center" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item me-md-5">
              <a
                className="nav-link fs-6 fw-normal text-dark"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item me-md-5">
              <a className="nav-link fs-6 fw-normal text-dark" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item me-md-5">
              <a className="nav-link fs-6 fw-normal text-dark" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item me-md-5">
              <a className="nav-link fs-6 fw-normal text-dark" href="/faq">
                FAQ's
              </a>
            </li>
          </ul>

          <a
            href="/signup"
            className="my-2 me-3 btn button_color ms-md-0 ms-3 rounded-5 px-xl-5 py-xl-2 px-lg-3 py-lg-2 px-5 py-2 border-0 outline-0"
          >
            <div className="fs-6 text-decoration-none text-white fw-normal">
              Sign Up
            </div>
          </a>
          <br />
          <a
            href="/tagowallet"
            className="border btn border-primary rounded-5 px-xl-4 py-xl-2 px-lg-3 py-lg-2 px-4 py-2"
          >
            <div className="fs-6 text-primary text-decoration-none fw-normal">
              Open TagoWallet{" "}
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
