import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Alex Headphones Todos os direitos reservados</p>
      <p className="icons">
        <a href="https://www.instagram.com/alex.maceedo/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/alex-macedo-610860235/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  )
}

export default Footer

