import React from 'react';
import './stylesheets/Footer.css';
import github from '../images/github.svg';

const Footer = () => (
  <section className="footer">
    Copyright 2022
    <a href="myaserkhan">myaserkhan</a>
    <a href="johnkioko">johnkioko</a>
    <img className="footerImg" src={github} alt="github-logo" />
  </section>
);

export default Footer;
