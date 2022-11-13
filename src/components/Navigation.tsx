import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import '../styles/navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div></div>
      <ul className="links">
        <li className='linkItems'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#menu'>Menu</a>
          <a href='#awards'>Awards</a>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
