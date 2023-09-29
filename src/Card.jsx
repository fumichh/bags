import React from 'react'
import boy from './img/boy.png'
import logo1 from './img/logo1.png'
import logo2 from './img/logo2.png'
import logo3 from './img/logo3.png'
import logo4 from './img/logo4.png'

export default function Card() {
    return (
        <div>

            <div className="card">
                <div className="container">

                    <div className="card-big">

                        <div className="card-block1">
                            <img src={boy} alt="" />
                        </div>

                        <div className="card-block2">

                            <h1 className='card-h1'>Lorem ipsum dolor sit amet <br />  adipiscing elit.</h1>

                            <form className='card-form' action="">
                                <input className='card-name' type="name" placeholder='name' />
                                <input className='card-email' type="email" placeholder='email' />
                            </form>

                            <input className='card-address' type="address" placeholder='Address' />

                            <div className="card-for-check">
                                <input className='card-check' type="checkbox" />
                                <label className='card-label' htmlFor="label">Lorem ipsum dolor sit amet.</label>
                                <button className='card-btn'>join now</button>
                            </div>

                        </div>
                    </div>

                    <div className="after-card">
                            <a href=""><img src={logo1} alt="" /></a>
                            <a href=""><img src={logo2} alt="" /></a>
                            <a href=""><img src={logo3} alt="" /></a>
                            <a href=""><img src={logo4} alt="" /></a>

                        </div>


                </div>
            </div>
        </div>
    )
}
