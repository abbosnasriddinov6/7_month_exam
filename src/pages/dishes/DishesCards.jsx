import React, { useEffect, useState } from 'react'
import useProduct1 from '../../app/useProduct'

import './Dishes.scss'
import { add, star } from '../../assets'
import Loader from '../../components/loader/Loader'
import usenew from '../../app/usenew'


const DishesCards = () => {

    const [newproduct, setnewproduct] = useState([])

    const { loading, product2, error, getProducts2 } =
        useProduct1();
    // const [title, setTitle] = useState(true);
    const [change, setChange] = useState(false);
    useEffect(() => {
        getProducts2();
    }, [change]);


    const { post } = usenew()
    useEffect(() => {
        post(newproduct)
    }, [newproduct])






    return (
        <>



            <div className='FetchProduct2'>
                <div className="container">
                    {/* <div className='search'>
                        <input type="text" placeholder='Search...' />
                    </div> */}
                    <div className="fetchproduct">
                        <div className='ours'>
                            <h1>Our Top <span>Dishes</span></h1>
                        </div>
                        <div className='fetchnow'>
                            {loading ? <h1><Loader /></h1> : null}
                            {error ? <h1>{error}</h1> : null}
                            {product2.length > 0 ? (
                                <ul>
                                    {product2.map((products) => (
                                        <li key={products.id}>
                                            <div className='img1'>
                                                <img src={products.image1} alt="" />
                                            </div>
                                            <div className='img2'>
                                                <img src={products.image2} alt="" />
                                            </div>
                                            <div className='others'>
                                                <h3>{products.title}</h3>
                                                <h2>{products.name}</h2>
                                                <p>24min • <img src={star} alt="" /> 4.8 </p>
                                                <h4>$12.99 <img onClick={(e) => setnewproduct({ ...newproduct, image2: products.image2, title: products.title, name: products.name, dollor: products.dollor })} src={add} alt="" /> </h4>
                                            </div>
                                            <div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DishesCards