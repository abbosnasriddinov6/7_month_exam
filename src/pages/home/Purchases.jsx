import React from 'react'
import './Purchases.scss'
import { food1, food2, food3, icon1, icon2, rating1, rating2 } from '../../assets'
const Purchases = () => {
    return (
        <div className='Purchases'>
            <div className="container">
                <div className="purchase">
                    <div className='littlecards'>
                        <h1>Control <span>Purchases</span> <br /> Via Dashboard</h1>
                        <div className='display'>
                            <div className='littlecard1'>
                                <div className='forimg'>
                                    <img src={food1} alt="" />
                                </div>
                                <div className='fortext'>
                                    <h4>Chicken Hell</h4>
                                    <h5>On The Way</h5>
                                </div>
                                <div className='fortime'>
                                    <p>3:09 PM</p>
                                </div>
                            </div>
                            <div className='littlecard1'>
                                <div className='forimg'>
                                    <img src={food2} alt="" />
                                </div>
                                <div className='fortext'>
                                    <h4>Swe Dish</h4>
                                    <h5>Delivered</h5>
                                </div>
                                <div className='fortimeyes'>
                                    <p>Yesterday</p>
                                </div>
                            </div>
                            <div className='littlecard1'>
                                <div className='forimg'>
                                    <img src={food3} alt="" />
                                </div>
                                <div className='fortext'>
                                    <h4>Fish Hell Veg</h4>
                                    <h5 className='cancel'>Cancelled</h5>
                                </div>
                                <div className='fortimeyes'>
                                    <p>Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mediumcards'>
                        <div className='mediumcard'>
                            <div className='main'>
                                <h3>Purchases</h3>
                                <select>
                                    <option value="This month">This month</option>
                                    <option value="Next month">Next month</option>
                                </select>
                            </div>
                            <div className='beautifulcards'>
                                <div className='beauty'>
                                    <div className='expense'>
                                        <div className='icon1'>
                                            <img src={icon1} alt="" />
                                        </div>
                                        <div className='usage'>
                                            <h3>Expense</h3>
                                            <p>Increased By 10%</p>
                                        </div>
                                        <div className='dollor'>
                                            <h3>$409.00</h3>
                                        </div>
                                    </div>
                                    <div className='rating'>
                                        <img src={rating1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='beautifulcards'>
                                <div className='beauty padding'>
                                    <div className='expense'>
                                        <div className='icon1'>
                                            <img src={icon2} alt="" />
                                        </div>
                                        <div className='usage'>
                                            <h3>Vocher Usage</h3>
                                            <p>Increased By 5%</p>
                                        </div>
                                        <div className='dollor'>
                                            <h3>$45.78</h3>
                                        </div>
                                    </div>
                                    <div className='rating3'>
                                        <img src={rating2} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Purchases