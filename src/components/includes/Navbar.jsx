import React from 'react'
import { tagocash_logo } from '../../assets'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 shadow-sm bg-white z-3">
  <div className="container">
    <a className="navbar-brand" href="/">
        <img src={tagocash_logo} width={"218px"} height={"43px"} alt="" />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div style={{textAlign:"center"}} className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item me-md-5">
          <a className="nav-link fs-6 fw-normal text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link fs-6 fw-normal text-dark" href="/blogs">Blogs</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link fs-6 fw-normal text-dark" href="/contact">Contact</a>
        </li> 
        <li className="nav-item me-md-5">
          <a className="nav-link fs-6 fw-normal text-dark" href="/faq">FAQ's</a>
        </li> 
      </ul>
      
      <div className="my-2 me-3 btn btn-primary rounded-5 px-5 py-2">
        <a href='/signup' className='fs-6 text-decoration-none text-white fw-normal'>Sign Up</a>
      </div>
      <br />
      <div className="border btn border-primary rounded-5 px-4 py-2">
        <a href='/tagowallet' className='fs-6 text-decoration-none fw-normal'>Open TagoWallet </a>
      </div>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
