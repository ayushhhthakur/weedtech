import React from 'react';

export default function Home() {
  const handleClick = () => {
    const aboutElement = document.getElementById('about');
    window.scrollTo({
      top: aboutElement.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div id='home' className='home'>
      <div className='home-content'>
        <h1 className='home-title'>
          WELCOME To WeedTech
        </h1>
        <p className='home-description'>
          We provide innovative solutions to drive your business forward. With our expertise and dedication, we deliver outstanding results tailored to your specific needs. Our team of professionals is committed to delivering excellence and exceeding your expectations.
        </p>
        <p className='home-subdescription'>
          Explore our services and discover how we can help you achieve your goals.
        </p>
        <button className='home-btn' onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}
