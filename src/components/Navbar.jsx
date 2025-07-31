'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">NextJSApp</Link>

        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="services-dropdown">
            <span onClick={toggleServicesMenu}>
              Services ▾
            </span>
            <ul className={`submenu ${isServicesOpen ? 'show' : ''}`}>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <ul className="nested-submenu">
                <li><Link href="/services/web-development/mern">MERN</Link></li>
                <li><Link href="/services/web-development/mean">MEAN</Link></li>
                <li><Link href="/services/web-development/dotnet">.NET</Link></li>
              </ul>
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/consulting">Consulting</Link></li>
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
