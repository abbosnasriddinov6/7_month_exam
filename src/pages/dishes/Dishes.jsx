import React, { useState } from 'react'
import './Dishes.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { minus, plus } from '../../assets'
const Dishes = () => {
  const [openWord, setOpenWord] = useState(true)
  const [openWords, setOpenWords] = useState(false)
  const [openit, setOpenIt] = useState(true)
  const [openits, setOpenIts] = useState(true)
  return (
    <>
      <Header />
      <div className='Dishes'>
        <div className="container">
          <div className="dishes">
            <div className="Questions">
              <h1>Frequently Asked <br /> <span>Questions.</span></h1>
            </div>
            <div className='table'>
              {openWords ? <div className='how'>
                <h2>How long does delivery take?</h2>
                <img onClick={() => setOpenWords(!openWords)} src={plus} alt="" />
              </div> :
                <div className='transition'>
                  <div className='how'>
                    <h2>How long does delivery take?</h2>
                    <img onClick={() => setOpenWords(!openWords)} src={minus} alt="" />
                  </div>
                  <div className='howw'>
                    <p className='text2'>You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</p>
                    <hr />
                  </div>
                </div>
              }

              {openWord ? <div className='how'>
                <h2>How Does It Work ?</h2>
                <img onClick={() => setOpenWord(!openWord)} src={plus} alt="" />
              </div> :
                <div className='transition'>
                  <div className='how'>
                    <h2>How Does It Work ?</h2>
                    <img onClick={() => setOpenWord(!openWord)} src={minus} alt="" />
                  </div>
                  <div className='howw'>
                    <p className='text2'>You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</p>
                    <hr />
                  </div>
                </div>
              }
              {openit ? <div className='how'>
                <h2>How does your food delivery service work?</h2>
                <img onClick={() => setOpenIt(!openit)} src={plus} alt="" />
              </div> :
                <div className='transition'>
                  <div className='how'>
                    <h2>How does your food delivery service work?</h2>
                    <img onClick={() => setOpenIt(!openit)} src={minus} alt="" />
                  </div>
                  <div className='howw'>
                    <p className='text2'>You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</p>
                    <hr />
                  </div>
                </div>
              }
              {openits ? <div className='how'>
                <h2>Do you offer discounts or promotions?</h2>
                <img onClick={() => setOpenIts(!openits)} src={plus} alt="" />
              </div> :
                <div className='transition'>
                  <div className='how'>
                    <h2>Do you offer discounts or promotions?</h2>
                    <img onClick={() => setOpenIts(!openits)} src={minus} alt="" />
                  </div>
                  <div className='howw'>
                    <p className='text2'>You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?</p>
                    <hr />
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}



export default Dishes