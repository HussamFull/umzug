import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // useEffect للتحكم في شريط التنقل عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // دالة للتحكم في قائمة الجوال
  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <Link to={"/"}> U T G <span></span></Link>
          </h1>
          <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileNavActive ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">Portfolio</a>
              </li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i 
              className={`bi bi-list mobile-nav-toggle ${mobileNavActive ? 'bi-x' : ''}`}
              onClick={handleMobileNavToggle}
            />
          </nav>
          <a href="#about" className="get-started-btn scrollto">Buchen Sie bei uns</a>
        </div>
      </header>
    </>
  );
}