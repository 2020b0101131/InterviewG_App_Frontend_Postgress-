import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor: 'gray'}}>
        {/* <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div> */}
{/* Remove the container if you want to extend the Footer to full width. */}
<div className="container-fluid ">
  {/* Footer */}
  <footer className="text-center text-white" style={{backgroundColor: '#000000'}}>
    {/* Grid container */}
    <div className="container ">
      {/* Section: Links */}
      <section className="mt-5">
        {/* Grid row*/}
        <div className="row text-center d-flex justify-content-center pt-5">
          {/* Grid column */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">About us</a>
            </h6>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Products</a>
            </h6>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Awards</a>
            </h6>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Help</a>
            </h6>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white">Contact</a>
            </h6>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row*/}
      </section>
      {/* Section: Links */}
      <hr className="my-5" />
      {/* Section: Text */}
      <section className="mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
            InterviewG envisions a world where hiring is seamless and insightful. Our mission is to empower interviewers with innovative tools, fostering better connections and unlocking the potential of talent.
            </p>
          </div>
        </div>
      </section>
      {/* Section: Text */}
      {/* Section: Social */}
      <section className="text-center mb-5">
        <a href className="text-white me-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-google" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-instagram" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-linkedin" />
        </a>
        <a href className="text-white me-4">
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    Copyright © InterviewG 2022
      
      
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>
{/* End of .container */}

    </div>
  )
}

export default Footer