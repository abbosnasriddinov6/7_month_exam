import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Shopp.scss'
import { food22, minuss, pluss } from '../../assets'
import usenew from '../../app/usenew'
import Loader from '../../components/loader/Loader'
import { NavLink, Navigate } from 'react-router-dom'
const Shopp = ({users}) => {
 
    const { product3, getnewproducts, error, loading } = usenew()
    useEffect(() => {
        getnewproducts()
    }, [product3])
    if (!users) {
        return <Navigate to="/" replace />;
        console.log(users);
    }
    return (
        <>
            <Header />
            <div className='Shopp'>
                <div className="container">
                    <div className='abbos'>
                        <div className="shop">
                            <div className='hell1'>
                                <ul>
                                    {product3.map((products) => (
                                        <li key={products.id}>

                                            <div className='img2'>
                                                <img src={products.image2} alt="" />
                                            </div>
                                            <div className='others'>
                                                <h2>{products.name}</h2>
                                                <h2>{products.dollor}</h2>

                                            </div>
                                            <div className='katta'>
                                                <div className='minusandplus'>
                                                    <img src={minuss} alt="" />
                                                    <p>03</p>
                                                    <img src={pluss} alt="" />
                                                </div>
                                                <div className='dolors'>
                                                    <h3>$38.97</h3>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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