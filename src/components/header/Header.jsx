import React from 'react'
// import { logo, shop } from '../../assets'
import './Header.scss'
import { bar, food1, logo, shop } from '../../assets'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className='container'>
        <div className="nav-items">
          <div className='left'>
            <img className='logo' src={logo} alt="" />
            <NavLink to='/home'><h3>Home</h3></NavLink>
            <NavLink to='/dishes'><h3>Dishes</h3></NavLink>
          </div>
          <div className="right">
            <NavLink className="basket" to='/shop'><img src={shop} alt="" /></NavLink>
            <button className='button1'><NavLink to='/signin'>Login</NavLink></button>
            <button className='button2'><NavLink to='/'>Sign Up</NavLink></button>
            <img className='hamburger' src={bar} alt="" />
          </div>
        </div>
        <hr />
      </div>
    </nav>
    // <div className='Header'>
    //   <div className="container">
    //     <div className="div">
    //       <div className='Links'>
    //         <img src={logo} alt="" />
    //         <NavLink to='/'><h3>Home</h3></NavLink>
    //         <NavLink to='/dishes'><h3>Dishes</h3></NavLink>
    //       </div>
    //       <div className="Nav">
    //         <NavLink to='/shop'><img src={shop} alt="" /></NavLink>
    //         <button className='button1'>Login</button>
    //         <button className='button2'>Sign Up</button>
    //         <img src={bar} alt="" />
    //       </div>
    //       {/* <div className='Navbar'>
    //         <div className="Logo">
    //         </div>
    //         <div className='bars'>
    //         </div>
    //       </div> */}
    //     </div>
    //     {/* <hr /> */}
    //   </div>
    // </div>
  )
}

export default Header