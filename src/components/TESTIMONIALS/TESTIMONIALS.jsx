import React from 'react'
import './TESTIMONIALS.css'


const TESTIMONIALS = () => {
  return (
    <>
       <section className='TESTIMONIALS'>
        <div className="container">
            <div className="TESTIMONIALS__wrapper">

                    <div className="TESTIMONIALS-TEXT">

                        <p>TESTIMONIALS</p>
                        <h1>Read What Other have to Say</h1>

                    </div>

                <div className="TESTIMONIALS-cards cards">

                    <div className="TESTIMONIALS-card card">

                        <div className="avatar">
                                <img src="TESTIMONIALS-1.svg" alt="" />
                                <h4> Andrew Rathore</h4>
                        </div>

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>

                    </div>      

                           <div className="TESTIMONIALS-card">

                        <div className="avatar">
                                <img src="TESTIMONIALS-2.svg" alt="" />
                                <h4> Vera Duncan</h4>
                        </div>

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>

                    </div>

                           <div className="TESTIMONIALS-card">

                        <div className="avatar">
                                <img src="TESTIMONIALS-3.svg" alt="" />
                                <h4> Mark Smith</h4>
                        </div>

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>

                    </div>



                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default TESTIMONIALS