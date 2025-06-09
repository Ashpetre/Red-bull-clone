import React from 'react';
import logo from '../assets/Red Bull Website UI Design Assets/Logo.svg';
import search from './nav-icons/Search.svg';
import cart from './nav-icons/Shopping Cart.svg';
import heart from './nav-icons/Heart.svg';

export default function Nav({ theme }) {
  return (
    <div className='nav-container' style={{ color: theme.textColor }}>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='nav-links'>
        <a href="#">Energy Drinks</a>
        <a href="#">Gallery</a>
        <a href="#">Our Story</a>
        <a href="#">Contact</a>
      </div>
      <div className='nav-icons'>
        <img src={search} alt="Search" />
        <img src={heart} alt="Wishlist" />
        <img src={cart} alt="Cart" />
      </div>
    </div>
  );
}
