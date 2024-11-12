import React from 'react'
import "./Card.css"


const Card = () => {
  return (
    <>
        <section className="card">
          <div className="container">
            <div className="card__wrapper">

              <div className="card-text">

                <h1>Building digital products, brands & experience</h1>
                <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                <button className="btn">Contact Us</button>
              </div>

              <div className="card-img">
              <img src="/card-1.png" alt="" />
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Card