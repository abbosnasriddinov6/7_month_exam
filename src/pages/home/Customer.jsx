import React from 'react'
import './Customer.scss'
import { divider, food2, food22, mask, patch, picture, stars } from '../../assets'
const Customer = () => {
    return (
        <div className='Customer'>
            <div className="container">
                <div className="customer">
                    <div className='alexandr'>
                        <div className='say'>
                            <h1><span>Customer</span> Say</h1>
                        </div>
                        <div className='year'>
                            <div className='firstone'>
                                <div className='alex'>
                                    <div className='dev'>
                                        <img className='picture1' src={picture} alt="" />
                                        <img className='picture2' src={patch} alt="asd   " />
                                    </div>
                                    <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                    <img className='img' src={stars} alt="" />
                                </div>
                            </div>
                            <div className='secondone'>
                                <div className='fortwo'>
                                    <div className='online'>
                                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                                        <img className='img' src={stars} alt="" />
                                    </div>
                                    <div className='onlinee'>
                                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort.</p>
                                        <img className='img' src={stars} alt="" />
                                    </div>
                                </div>
                                <div className='forpagi'>
                                    <img src={divider} alt="" />
                                </div>
                            </div>
                        </div>
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
                                <img className='fooood' src={food22} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer