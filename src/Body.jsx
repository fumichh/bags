import React from 'react'
import bag1 from './img/bag1.png'
import bag2 from './img/bag2.png'
import bag3 from './img/bag3.png'
import bag4 from './img/bag4.png'
import bagwithbg from './img/bagwithbg.png'


export default function Body() {
    return (
        <div>

            <div className="body">
                <div className="container">
                    <div className="body-main">
                        <ul className='body-ul'>
                            <li><a href="#" className="body-a">water resistant</a></li>
                            <li><a href="#" className="body-a">charging system</a></li>
                            <li><a href="#" className="body-a">artificial leather</a></li>
                            <li><a href="#" className="body-a">modern clothes</a></li>
                        </ul>
                    </div>

                    <div className='body-bags'>
                        <img className='body-bag' src={bag1} alt="" />
                        <img className='body-bag' src={bag2} alt="" />
                        <img className='body-bag' src={bag3} alt="" />
                        <img className='body-bag' src={bag4} alt="" />
                    </div>


                    <div className="body-about">

                        <div className="body-side1">
                            <img className='body-photo' src={bagwithbg} alt="" />
                        </div>

                        <div className="body-side2">
                            <p className='body-p'>Creative bag only for you.</p>
                            <p className='body-p2'>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit <br /> sed do eiusmod.</p>
                            <p className="body-p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam.</p>
                            <button className='body-btn'>see more</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
