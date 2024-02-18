import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Shopp.scss'
import { food22 } from '../../assets'
const Shopp = () => {
    return (
        <>
            <Header />
            <div className='Shopp'>
                <div className="container">
                    <div className='abbos'>
                        <div className="shop">
                            <div className='hell1'></div>
                            <div className='hell2'>
                                <div className='payment'>
                                    <div className='subtal'>
                                        <p>Subtotal</p>
                                        <p>$58.96</p>
                                    </div>
                                    <hr />
                                    <div className='deliver'>
                                        <p>Delivery</p>
                                        <p>$3.59</p>
                                    </div>
                                    <hr />
                                    <div className='total'>
                                        <h4>Total</h4>
                                        <h4>$62.55</h4>
                                    </div>
                                    <button>Review Payment</button>
                                </div>
                                <div className='get'>
                                    <div className='getnow'>
                                        <div className='subscribe'>
                                            <h1>GET 50%</h1>
                                            <div className='enter'>
                                                <p> Enter Your Email Address</p>
                                                <button>SUBSCRIBE</button>
                                            </div>
                                        </div>
                                        <div className='food'>
                                            <img src={food22} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopp