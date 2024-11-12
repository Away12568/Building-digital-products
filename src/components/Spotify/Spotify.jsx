import React from 'react'
import "./Spotify.css"


const Spotify = () => {
  return (
    <>
        <section className="spotify">
            <div className="container">
                <div className="spotify__wrapper">
                    <p>Trusted by 4,000+ companies</p>
                    <div className="cards-spotify">
                     
                           <div className="card-spotify">
                        <img src="/spotify-1.svg" alt="" />
                        </div>

                        <div className="card-spotify">
                        <img src="/spotify-2.svg" alt="" />
                        </div>

                        <div className="card-spotify">
                        <img src="/spotify-3.svg" alt="" />
                        </div>

                        <div className="card-spotify">
                        <img src="/spotify-4.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Spotify