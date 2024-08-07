import React from 'react';
import Logo from '../assets/AAI_Logo.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <div class="container-fluid">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt="logo" id='header_logo'/>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 mb-md-0 justify-content-center">
          <li class='nav-item dropdown' id='menuItem'>
            <a href="#" class="nav-link dropdown-toggle px-2 link-secondary" id="navbarDropdownMenuLink">
              Insure
            </a>
            <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <li>
                <a class='dropdown-item' href='#'>test</a>
              </li>
            </ul>
          </li>
          <li class='nav-item' id='menuItem'>
            <a href="#" class="nav-link px-2 link-secondary">
              Invest
            </a>
          </li>
          <li class='nav-item' id='menuItem'>
            <a href="#" class="nav-link px-2 link-dark">
              About AAI
            </a>
          </li>
          <li class='nav-item' id='menuItem'>
            <a href="#" class="nav-link px-2 link-dark">
              Careers
            </a>
          </li>
          <li class='nav-item' id='menuItem'>
            <a href="#" class="nav-link px-2 link-dark">
              Contact Us
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
        </div>
      </header>
    </div>
  );
}
