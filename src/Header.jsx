import React from 'react'
import bag from './img/logo.png'
import girl from './img/girl.png'
import girlbg from './img/girlbg.png'
import teleg from './img/Cta.png'

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">

          <div className="navbar">
            <a href="#" className='nav-logo'><img src={bag} alt="" /></a>

            <ul className='navbar-ul'>
              <li><a href="#" className="navbar-a">home</a></li>
              <li><a href="#" className="navbar-a">feature</a></li>
              <li><a href="#" className="navbar-a">About</a></li>
              <li><a href="#" className="navbar-a">product</a></li>
              <li><a href="#" ><button className='navbar-btn'>shop now</button></a></li>
            </ul>
          </div>

          <div className="header-main">

           <div className="header-first-side">
           <p className='header-p1'>Look Stylish Be Stylish.</p>
            <h1 className='header-h1'>Look Stylish <br /> Be Stylish</h1>
            <p className='header-p2'>Before starting this business you should have ideas <br /> about the market and products to Compete with the <br /> Existing Businesses.</p>
            <button className='header-btn2'>join shop</button>
            <img className='teleg' src={teleg} alt="" />
           </div>

           <div className="header-second-side">

             <img className='header-girl' src={girl} alt="" />
           </div>

          </div>

        </div>
      </div>
    </div>
  )
}
