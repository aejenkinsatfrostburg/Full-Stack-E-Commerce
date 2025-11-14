import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers Through Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='YourEmail@Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
