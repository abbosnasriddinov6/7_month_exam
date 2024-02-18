import React from 'react'
import './Home.scss'
import { arrow, bookmark, maskgroup, star, tel } from '../../assets'
const Hero = () => {
  return (
    <>
      <div className='Heroo'>
        <div className="container">
          <div className="phone">
            <div className='phones'>
              <img src={tel} alt="" />
            </div>
            <div className='texts'>
              <h1>
                Premium <span>Quality</span> For Your Health
              </h1>
              <ul>
                <li>Premium quality food is made with ingredients that <br /> are packed with essential vitamins, minerals.</li>
                <li>These foods promote overall wellness by support <br /> healthy digestion and boosting immunity</li>
              </ul>
              <button>Download
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className='Chicken'>
        <div className="container">
          <div className="chicken">
            <div className="cardone">
              <div className='image1'>
                <img src={maskgroup} alt="" />
              </div>
              <div className='star'>
                <div className='King'>
                  <h2>The Chicken King</h2>
                </div>
                <div className='starboy'>
                  <p>24min •</p>
                  <img src={star} alt="" />
                  <p>4.8</p>
                </div>
                <div className='bookmark'>
                  <img src={bookmark} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero