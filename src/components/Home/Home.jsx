import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
        <section id='header' className='d-flex align-items-center  ' >
            <div className="container">
              <div className="row  ">
              <div className="col-md-6 order-1 order-lg-2 header-img">
                      <img src="../images/accelerator.svg" alt="" className='img-fluid animated' />

                  </div>
                  <div className="col-md-6   pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                      <h1>
                        Grow your business <br /> with <span className='bold brand-name'>Xstream</span>
                      </h1>
                      <h2 className='my-3'>
                        We are a team of talented developer in every tech field  
                      </h2>
                      <h3 className='my-3 '>
                          <NavLink to="/services" className='btn-get-started'> Get Started !</NavLink>
                      </h3>
                  </div>

  
              </div>
            </div>

        </section>
    
    </>
  )
}

export default Home