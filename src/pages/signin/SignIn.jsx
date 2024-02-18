import React, { useState } from 'react'
import './SignIn.scss'
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { email, groupfood, logo, password, profil } from '../../assets'
const SignIn = () => {

  const [openEyes, setOpenEyes] = useState('')
  const [opentext, setOpenText] = useState(true)
  return (
    <div className='Signin'>
      <div className="signin">
        <div className="signnow">
          <div className="llogoo">
            <img src={logo} alt="" />
          </div>
          <div className="divinp">
            <div className='forinputs'>
              <h1>Sign In To eatly</h1>
              <div className='email'>
                <img src={email} alt="" />
                <input type="email" placeholder='EMAIL...' />
              </div>
              {opentext ? <div className='email'>
                <img src={password} alt="" />
                <input onChange={(e) => openEyes(e.target.value)} type="password" placeholder='PASSWORD...' />
                <LiaEyeSolid onClick={() => setOpenText(!opentext)} className='eyes' />
              </div> : <div className='email'>
                <img src={password} alt="" />
                <input onChange={(e) => openEyes(e.target.value)} type="text" placeholder='PASSWORD...' />
                <LiaEyeSlashSolid onClick={() => setOpenText(!opentext)} className='eyes' />
              </div>}
              <button>SIGN IN</button>
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

export default SignIn