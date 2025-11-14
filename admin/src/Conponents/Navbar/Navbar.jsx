import React from 'react'
import './Navbar.css'
import navlogo from '../../Assets/Admin_Logo.png'
import navProfile from '../../Assets/IconPack/Shopicons_Regular_Account.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className="profile-logo"/>
    </div>
  )
}

export default Navbar