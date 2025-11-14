import React from 'react'
import './Hero.css'
import hero_image from '../Assets/Model.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEWCOMER SALE</h2>
                <div>
                    <p>new</p>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
                
            </div>
        </div>
    )
}
