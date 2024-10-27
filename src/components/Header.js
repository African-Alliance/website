import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/AAI_Logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const closeButtonRef = useRef(null);

  const toggleDropdown = (index) => {
    setExpandedDropdown(expandedDropdown === index ? null : index);
  };

  // Close the off-canvas
  const handleCloseOffcanvas = () => {
    if (closeButtonRef.current) {
      closeButtonRef.current.click(); // Trigger a click on the close button
    }
  };

  return (
    <nav id='navbar' className="navbar navbar-expand-md bg-body-tertiary" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" id="header_logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end d-md-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ref={closeButtonRef}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" onClick={handleCloseOffcanvas} to="/">
                  HOME
                </Link>
              </li>

              {/* PRODUCT Dropdown */}
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown(0)}
                  role="button"
                  aria-expanded={expandedDropdown === 0}
                >
                  PRODUCT
                  <FontAwesomeIcon icon={expandedDropdown === 0 ? faMinus : faPlus} className="ms-2" />
                </a>
                <ul
                  className={`dropdown-menu ${expandedDropdown === 0 ? 'show' : 'd-none'}`}
                >
                  <li><Link className="dropdown-item" to="/children-education" onClick={handleCloseOffcanvas}>CHILDREN EDUCATION</Link></li>
                  <li><Link className="dropdown-item" to="/money-appreciation" onClick={handleCloseOffcanvas}>MONEY APPRECIATION</Link></li>
                  <li><Link className="dropdown-item" to="/smart-kid-education" onClick={handleCloseOffcanvas}>SMART KID EDUCATIONAL</Link></li>
                  <li><Link className="dropdown-item" to="/alliance-investment-plus" onClick={handleCloseOffcanvas}>INVESTMENT PLUS</Link></li>
                  <li><Link className="dropdown-item" to="/investment-special" onClick={handleCloseOffcanvas}>INVESTMENT PLUS SPECIAL</Link></li>
                  <li><Link className="dropdown-item" to="/group-investment" onClick={handleCloseOffcanvas}>GROUP INCOME INVESTMENT</Link></li>
                  <li><Link className="dropdown-item" to="/income-investment" onClick={handleCloseOffcanvas}>INCOME INVESTMENT</Link></li>
                </ul>
              </li>

              {/* SELF SERVICE Dropdown */}
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown(1)}
                  role="button"
                  aria-expanded={expandedDropdown === 1}
                >
                  SELF SERVICE
                  <FontAwesomeIcon icon={expandedDropdown === 1 ? faMinus : faPlus} className="ms-2" />
                </a>
                <ul
                  className={`dropdown-menu ${expandedDropdown === 1 ? 'show' : 'd-none'}`}
                >
                  <li><Link className="dropdown-item" to="/premium-payment" onClick={handleCloseOffcanvas}>PREMIUM PAYMENT</Link></li>
                  <li><Link className="dropdown-item" to="/verify-annuity" onClick={handleCloseOffcanvas}>VERIFY ANNUITY</Link></li>
                  <li><Link className="dropdown-item" to="/calculate-premium" onClick={handleCloseOffcanvas}>CALCULATE PREMIUM</Link></li>
                  <li><Link className="dropdown-item" to="/download-form" onClick={handleCloseOffcanvas}>DOWNLOAD FORM</Link></li>
                </ul>
              </li>

              {/* ABOUT US Dropdown */}
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  onClick={() => toggleDropdown(2)}
                  role="button"
                  aria-expanded={expandedDropdown === 2}
                >
                  ABOUT US
                  <FontAwesomeIcon icon={expandedDropdown === 2 ? faMinus : faPlus} className="ms-2" />
                </a>
                <ul
                  className={`dropdown-menu ${expandedDropdown === 2 ? 'show' : 'd-none'}`}
                >
                  <li><Link className="dropdown-item" to="/who-we-are" onClick={handleCloseOffcanvas}>WHO WE ARE</Link></li>
                  <li><Link className="dropdown-item" to="/management" onClick={handleCloseOffcanvas}>MANAGEMENT TEAM</Link></li>
                  <li><Link className="dropdown-item" to="/our-board" onClick={handleCloseOffcanvas}>BOARD OF DIRECTORS</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleCloseOffcanvas}>CONTACT US</Link>
              </li>
            </ul>

          </div>
        </div>
        {/* SCREEN >= 768PX */}
        <div className='d-none d-md-flex'>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                PRODUCT
                
              </a>
              <ul
                className={`dropdown-menu `}
              >
                <li><Link className="dropdown-item" to="/children-education" onClick={handleCloseOffcanvas}>CHILDREN EDUCATION</Link></li>
                <li><Link className="dropdown-item" to="/money-appreciation" onClick={handleCloseOffcanvas}>MONEY APPRECIATION</Link></li>
                <li><Link className="dropdown-item" to="/smart-kid-education" onClick={handleCloseOffcanvas}>SMART KID EDUCATIONAL</Link></li>
                <li><Link className="dropdown-item" to="/alliance-investment-plus" onClick={handleCloseOffcanvas}>INVESTMENT PLUS</Link></li>
                <li><Link className="dropdown-item" to="/investment-special" onClick={handleCloseOffcanvas}>INVESTMENT PLUS SPECIAL</Link></li>
                <li><Link className="dropdown-item" to="/group-investment" onClick={handleCloseOffcanvas}>GROUP INCOME INVESTMENT</Link></li>
                <li><Link className="dropdown-item" to="/income-investment" onClick={handleCloseOffcanvas}>INCOME INVESTMENT</Link></li>
              </ul>
            </li>

            {/* SELF SERVICE Dropdown */}
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                SELF-SERVICE
              </a>
              <ul
                className={`dropdown-menu `}
              >
                <li><Link className="dropdown-item" to="/premium-payment" >PREMIUM PAYMENT</Link></li>
                <li><Link className="dropdown-item" to="/verify-annuity" >VERIFY ANNUITY</Link></li>
                <li><Link className="dropdown-item" to="/calculate-premium" >CALCULATE PREMIUM</Link></li>
                <li><Link className="dropdown-item" to="/download-form" >DOWNLOAD FORM</Link></li>
              </ul>
            </li>

            {/* ABOUT US Dropdown */}
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                ABOUT US
              </a>
              <ul
                className={`dropdown-menu `}
              >
                <li><Link className="dropdown-item" to="/who-we-are" >WHO WE ARE</Link></li>
                <li><Link className="dropdown-item" to="/management" >MANAGEMENT TEAM</Link></li>
                <li><Link className="dropdown-item" to="/our-board" >BOARD OF DIRECTORS</Link></li>
              </ul>
            </li>

            <li className="nav-item contact-us-link">
              <Link className="nav-link" style={{color: 'white'}} to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
