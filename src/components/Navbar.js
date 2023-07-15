import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo/logo.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > homeSection.offsetTop && !scrolled) {
        setScrolled(true);
      } else if (scrollTop <= homeSection.offsetTop && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.getAttribute('href').substring(1); // Get the target ID from the clicked link
    const targetElement = document.getElementById(targetId); // Get the target element using the ID
    const offset = document.querySelector('.navbar').offsetHeight; // Get the height of the navbar
    const top = targetElement.offsetTop - offset; // Calculate the scroll position with offset
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
    setMenuOpen(false); // Close the menu after clicking a link
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top${menuOpen ? ' show' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="logo" height="40px" />
          </a>
          <button
            className={`navbar-toggler${menuOpen ? ' collapsed' : ''}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleMenuClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center${menuOpen ? ' show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={handleClick}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery" onClick={handleClick}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button id="demoBtn" className="btn btn-primary">
            Book Demo Class
          </button>
        </div>
      </nav>
    </header>
  );
}
