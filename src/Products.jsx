import React from 'react'
import bag11 from './img/bag11.png'
import bag12 from './img/bag12.png'
import bag13 from './img/bag13.png'
import bag14 from './img/bag14.png'
import bag15 from './img/bag15.png'
import bag16 from './img/bag16.png'
import bag17 from './img/bag17.png'
import bag18 from './img/bag18.png'
export default function Products() {
    return (
        <div>


            <div className="product">
                <div className="container">

                    <div className="product-texts">
                        <h1 className="product-h1">our available product</h1>
                        <p className="product-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>

                    <div className="product-img">

                        <div className="product-1">
                            <img src={bag11} alt="" />
                        </div>

                        <div className="product-2">
                            <img src={bag12} alt="" />
                        </div>
                        <div className="product-3">
                            <img src={bag13} alt="" />
                        </div>
                        <div className="product-4">
                            <img src={bag14} alt="" />
                        </div>

                    </div>

                    <div className="product-img2">

                        <div className="product-5">
                            <img src={bag15} alt="" />
                        </div>
                        <div className="product-6">
                            <img src={bag16} alt="" />
                        </div>
                        <div className="product-7">
                            <img src={bag17} alt="" />
                        </div>
                        <div className="product-8">
                            <img src={bag18} alt="" />
                        </div>

                    </div>

                   <div className="product-for-btn">
                   <button className='product-btn'>see more </button>
                   </div>


                </div>
            </div>

        </div>
    )
}
