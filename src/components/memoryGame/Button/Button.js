import React from 'react';
import './Button.css';

const Button = ({ closeModal }) => {
  return (
    <ul onClick={() => closeModal()} className='navmenu'>
      <li>
        <a href='#'>Play Again</a>
      </li>
    </ul>
  );
};

export default Button;
