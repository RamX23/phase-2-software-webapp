import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark p-10" data-bs-theme='dark'>
  <div className="container-fluid d-flex justify-content-between">
    <div>
    <a className="navbar-brand fs-4" href="/">Nexus</a>
    </div>
    <div>
    <div className='d-flex'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse fs-6" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#internship" >Internships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/" to="Feedback">Feedback</Link>
        </li>

              </ul>
              </div>
        
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
