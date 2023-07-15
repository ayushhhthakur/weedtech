import React from 'react';
import aboutImage from '../assets/img/home/weed-tech2.jpg';

export default function About() {
  return (
    <div id='about' className='about'>
      <h2 className='about-title'>About WeedTech</h2>
      <div className='about-content'>
        <div className='about-description'>
          <p>
            WeedTech is a leading technology company specializing in providing cutting-edge solutions for the cannabis industry. With our expertise in both technology and the cannabis sector, we are committed to driving innovation and digital transformation in this rapidly growing industry.
          </p>
        </div>
        <div className='about-image'>
          <img src={aboutImage} alt='About WeedTech' />
        </div>
      </div>
    </div>
  );
}
