import React from 'react'
import './CardRow.css'


const CardRow = () => {
  return (
    <>
        <section className="CardRow">
            <div className="container">
            <div className="CardRow__wrapper">
                
                <div className="CardRow-img">
                 <img src="/CardRow-1.png" alt="" />
                </div>

            
                        <div className="CardRow-box">
                    <h1>Branding & Design system</h1>
                    <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
                    </p>
                    <img className='block' src="/right.svg" alt="" />
                    <img className='none' src="/down.svg" alt="" />
                </div>
                
                </div>
            </div>
        </section>
    </>
  )
}

export default CardRow