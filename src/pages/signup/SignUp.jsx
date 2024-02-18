import React, { useState } from 'react'
import './SignUp.scss'
import { email, groupfood, logo, password, profil } from '../../assets'
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  const [openEye, setOpenEyes] = useState('')
  const [opentexts, setOpenTex] = useState(true)
  return (
    <div className='Signin'>
      <div className="signin">
        <div className="signnow">
          <div className="llogoo">
            <img src={logo} alt="" />
          </div>
          <div className="divinp">
            <div className='forinputs'>
              <h1>Sign Up To eatly</h1>
              <div className='email'>
                <img src={profil} alt="" />
                <input type="text" placeholder='FULL NAME...' />
              </div>
              <div className='email'>
                <img src={email} alt="" />
                <input type="email" placeholder='EMAIL...' />
              </div>
              {opentexts ? <div className='email'>
                <img src={password} alt="" />
                <input onChange={(e) => openEye(e.target.value)} type="password" placeholder='PASSWORD...' />
                <LiaEyeSolid onClick={() => setOpenTex(!opentexts)} className='eyes' />
              </div> : <div className='email'>
                <img src={password} alt="" />
                <input onChange={(e) => openEye(e.target.value)} type="text" placeholder='PASSWORD...' />
                <LiaEyeSlashSolid onClick={() => setOpenTex(!opentexts)} className='eyes' />
              </div>}
              <NavLink to='/signin'><button>SIGN UP</button></NavLink>
              <h4>Create A New Account? <span>Sign Up</span></h4>
            </div>
            <div className='forlinkss'>
              <p>Privacy Policy</p>
              <p>Copyright 2022</p>
            </div>
          </div>
        </div>
        <div className="signnoww">
          <img src={groupfood} alt="" />
          <h1>Find Foods With Love </h1>
          <p>Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes <br /> Including Asian, Chinese, Italians And Many More. Our Dashboard Helps <br /> You To Manage Orders And Money.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp