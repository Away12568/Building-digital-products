import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">

                    <div className="footer-link">

                        <div className="DigitalAgency Footer-card ">

                        <div className="start">
                        <h1>Digital Agency</h1>
                        </div>

                        <div className="end">
                        <a href="">Building digital products, 
                        brands & experience</a>
                        </div>

                        </div>

                        

                        <div className="Resources Footer-card ">

                        <div className="start">
                        <h1>Resources</h1>
                        </div>

                        <div className="end">
                        <a href="">Guides</a>
                        <a href="">Blog</a>
                        <a href="">Cuistomer Stories</a>
                        <a href="">Glossery</a>
                        </div>
                        </div>



                        <div className="Company Footer-card  ">
                            
                        <div className="start">
                        <h1>Company</h1>
                        </div>

                        <div className="end">
                        <a href="">About Us</a>
                        <a href="">Careers</a>
                        <a href="">Partners</a>
                        <a href="">Contact Us</a>
                        </div>

                        </div>




                        <div className="SocialMedia Footer-card ">

                         <div className="start">   
                        <h1>SocialMedia</h1>
                        </div>

                        <div className="end">
                        <a href="">LinkedIn</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                        </div>
                        </div>

                    </div>

                    <p>© Matheus. Todos os direitos reservados</p>

                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer