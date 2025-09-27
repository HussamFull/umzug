import React, { useState } from 'react'; // لم نعد نحتاج useEffect
import { Link } from 'react-router-dom';


export default function Navbar() {
  // **1. إزالة حالة التمرير (scrolled) والـ useEffect الخاص بها**
  // const [scrolled, setScrolled] = useState(false); // تم إزالتها
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // **تم إزالة useEffect للتحكم في شريط التنقل عند التمرير بالكامل**

  // دالة للتحكم في قائمة الجوال
  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      {/* **2. إزالة التغيير المشروط (scrolled ? 'header-scrolled' : '')** */}
      <header id="header" className="fixed-top header-scrolled"> 
        {/* يمكنك إضافة 'header-scrolled' هنا بشكل دائم للحفاظ على اللون */}
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <Link to={"/"}> 
<img src="/assets/img/utg-logo.png" alt="UTG Logo" className="img-fluid" />

</Link>
          </h1>
          <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileNavActive ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><Link to={""} className="nav-link scrollto active" href="#hero">Home</Link></li>
              <li><Link to={"About"} className="nav-link scrollto" href="#about">About</Link></li>

              <li><Link to={"Services"} className="nav-link scrollto" href="#services">Services</Link></li>

              <li>
                <Link to={"Portfolio"} className="nav-link scrollto" href="#portfolio">Portfolio</Link>
              </li>
              <li><Link to={"Team"} className="nav-link scrollto" href="#team">Team</Link></li>
              <li><Link to={"Contact"} className="nav-link scrollto" href="#contact">Contact</Link></li>
            </ul>
            <i 
              className={`bi bi-list mobile-nav-toggle ${mobileNavActive ? 'bi-x' : ''}`}
              onClick={handleMobileNavToggle}
            />
          </nav>
          <a href="https://wa.me/message/7TEJZNO3QI2RM1" className="get-started-btn scrollto">Kontaktieren Sie uns</a>
        

        </div>
      </header>
    </>
  );
}