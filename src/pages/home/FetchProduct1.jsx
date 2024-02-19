import React, { useEffect, useState } from 'react'
import './FetchProduct1.scss'
import useProduct1 from '../../app/useProduct'
import { add, star, stars } from '../../assets';
import Loader from '../../components/loader/Loader';
const FetchProduct1 = () => {
  const { loading, product1, error, getProducts } =
    useProduct1();
  const [title, setTitle] = useState('');
  const [change, setChange] = useState(false);
  useEffect(() => {
    getProducts();
  }, [change]);
  return (
    <div className='FetchProduct1'>
      <div className="container">
        <div className="fetchproduct">
          <div className='our'>
            <h1>Our Top <span>Dishes</span></h1>
          </div>
          <div className='fetchnow'>
            {loading ? <h1><Loader/></h1> : null}
            {error ? <h1>{error}</h1> : null}
            {product1.length > 0 ? (
              <ul>
                {product1.map((products) => (
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
                      <h4>$12.99 <img src={add} alt="" /> </h4>
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
  )
}

export default FetchProduct1