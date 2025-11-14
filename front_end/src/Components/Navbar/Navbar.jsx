import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Graffiti Streetwear logo.png';
import cart_icon from '../IconPack/Shopicons_Regular_Cart3.png';
import account_icon from '../IconPack/Shopicons_Regular_Account.png';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from '../IconPack/Shopicons_Regular_Menu.png'

export const Navbar = () => {

  const [menu, setMenu] = useState('none');
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const categories = ["hoodies", "sneakers", "shirts", "sweatpants", "hats"];

  return (
    <div className='navbar'>

      {/* Logo */}
      <div className="nav-logo" onClick={() => { setMenu("main"); navigate("/"); }}>
        <img src={logo} alt="Graffiti Streetwear" />
      </div>

      {/* Menu */}
      <div className="nav-menu-container">
        <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" />
        <ul ref={menuRef} className="nav-menu">
          {categories.map(cat => (
            <li key={cat} onClick={() => {
              setMenu(cat); navigate(`/${cat}`);
              if (menuRef.current.classList.contains('nav-menu-visible')) {
                menuRef.current.classList.remove('nav-menu-visible');
                document.querySelector('.nav-dropdown')?.classList.remove('open');
              }
            }}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
              {menu === cat && <hr />}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="navbar-icons">

        {/* Account/Login or Logout */}
        {localStorage.getItem('auth-token') ? (
          <div
            className="icon-with-text"
            onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}
          >
            <img src={account_icon} alt="Logout" />
            <p>Logout</p>
          </div>
        ) : (
          <div
            className="icon-with-text"
            onClick={() => {
              setMenu("login");
              navigate("/login");
            }}
          >
            <img src={account_icon} alt="Login" />
            <p>Login</p>
          </div>
        )}

        {/* Cart */}
        <div
          className="cart-container"
          onClick={() => {
            setMenu("cart");
            navigate("/cart");
          }}
        >
          <img src={cart_icon} alt="Cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

      </div>


    </div>
  );
};
