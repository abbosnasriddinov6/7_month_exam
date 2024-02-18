import React from 'react'
import './Footer.scss'
import { facebook, inn, instagram, logo, twitter } from '../../assets'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="containers ">
        <div className="footer">
          <img src={logo} alt="" />
          <hr />
          <div className='eatly'>
            <p>© 2023 EATLY All Rights Reserved.</p>
            <div className='social'>
              <img src={instagram} alt="" />
              <img src={inn} alt="" />
              <img className='face' src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer