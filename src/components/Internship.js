import React from 'react'


function Internship() {
  return (
    <div id='internship'>
      <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Internship Opportunities</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <div className="bi" width="1em" height="1em" >
      
          </div>
        </div>
        <h3 className="fs-2 text-body-emphasis">Internship for Beginners</h3>
        <p>College students and beginners can apply for this internship (3 Months).</p>
        <a href="/" className="icon-link">
          Apply now
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
       
        </div>
        <h3 className="fs-2 text-body-emphasis">Internship for freshers</h3>
        <p>nternship for freshers and students for career development (1 Month).</p>
        <a href="/" className="icon-link">
          Apply now
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div className="feature col">
      
        <h3 className="fs-2 text-body-emphasis">Entry-Level Software Support Internship</h3>
        <p>Learning and using IT support tools to track and manage user requests.</p>
        <a href="/" className="icon-link">
          Apply now
          <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Internship
