import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-dark' data-bs-theme="dark">
      <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
    <div className="col mb-3">
    
      <p className="text-body-secondary">© 2024</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3"> 
      <h3 style={{color:'white',marginBottom:'10px'}}>Our services</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#hero" className="nav-link p-0 text-body-secondary">Software & Service</a></li>
        <li className="nav-item mb-2"><a href="#hero" className="nav-link p-0 text-body-secondary">E-Learning</a></li>
        <li className="nav-item mb-2"><a href="#hero" className="nav-link p-0 text-body-secondary">Media and branding</a></li>
        <li className="nav-item mb-2"><a href="#hero" className="nav-link p-0 text-body-secondary">Digital Marketing</a></li>
        <li className="nav-item mb-2"><a href="#hero" className="nav-link p-0 text-body-secondary">Career growth</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h3 style={{color:'white',marginBottom:'10px'}}>Overview</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#about" className="nav-link p-0 text-body-secondary">About company</a></li>
        <li className="nav-item mb-2"><a href="#internship" className="nav-link p-0 text-body-secondary">Internships</a></li>
        <li className="nav-item mb-2"><a href="#services" className="nav-link p-0 text-body-secondary">Services</a></li>#hero
      </ul>
    </div>

    <div className="col mb-3">
      <h3 style={{color:'white',marginBottom:'10px'}}>contact us</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Coimbatore south, Tamilnadu</a></li>
        <li className="nav-item mb-2"><a href="mailto:info@hoolix.com" className="nav-link p-0 text-body-secondary">contact.nexusinfo@gmail.com</a></li>
        <li className="nav-item mb-2"><a href="tel:+918778993293" className="nav-link p-0 text-body-secondary">+91 8778993293</a></li>
       <a href='/Feedback'>
        <button
                type="button"
                className="btn btn-light btn-sm px-4 me-md-4 m-top-4"
              >
                Give Feedback
              </button>
              </a>
      </ul>
    </div>
  </footer>
</div>

    </div>
    </>
  )
}

export default Footer
