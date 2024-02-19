import React from 'react'
import './Home.scss'

import Header from '../../components/header/Header'
import Heroo from '../home/Heroo'
import { Hero, Vector4, Vector6, Vector7, Vector8, hero } from '../../assets'
import Purchases from './Purchases'
import Customer from './Customer'
import Footer from '../../components/footer/Footer'
import FetchProduct1 from './FetchProduct1'
const Home = () => {
  return (
    <>
      <Header />
      <div className='Home'>
        <div className="container">
          <div className="home">
            <div className='first'>
              <div className='hrandh4'>
                <hr />
                <h4>OVER 1000 USERS</h4>
              </div>
              <h1>Enjoy Foods All
                Over The <span>World</span></h1>
              <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus.</span></p>
              <button>Get Started</button>
            </div>
            <div className='second'>
              <img className='rasm w-[920px]' src={Hero} alt="" />
            </div>
          </div>
        </div>
        <div className='klar'>
          <div className='svg'>
            <img src={Vector7} alt="" />
            <img src={Vector4} alt="" />
          </div>
          <div className='followers'>
            <div className='K10'>
              <h2>10K+</h2>
              <span>
                <p>Satisfied Costumers </p>
                <p>All Great Over The World </p>
              </span>
            </div>
            <div className='Millions'>
              <h2>4M</h2>
              <span>
                <p>Healthy Dishes Sold</p>
                <p>Including Milk Shakes Smooth</p>
              </span>
            </div>
            <div className='foiz'>
              <h2>99.99%</h2>
              <span>
                <p>Reliable Customer Support</p>
                <p>  We Provide Great Experiences</p>
              </span>
            </div>
          </div>
          <div className='svg'>
            <img src={Vector6} alt="" />
            <img src={Vector8} alt="" />
          </div>
        </div>
      </div>
      <Heroo />
      <FetchProduct1 />
      <Purchases />
      <Customer />
      <Footer />
    </>
  )
}

export default Home