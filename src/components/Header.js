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
          <img src={Logo} alt="logo" id="header_logo" />
        </a>

        <ul class="nav col-12 col-md-auto mb-2 mb-md-0 justify-content-center" id='navLinks'>
          <li class="nav-item" id="menuItem">
            <a href="#" class="nav-link firstLevelLink">Product and Services</a>
            <div class='subMenuStyle'>
              <div class="subNavBlock">
                <span class="subMenuTitle subNavMenuTitle">Insure</span>
                <ul class="subItemsWraper subNavItemsWraper">
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Children Education Plan (CEP)</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Money Appreciation Plan (MAP)</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Alliance Smart Kid Educational Plan (ASK)</a>
                  </li>
                </ul>
              </div>
              <div class="subNavBlock">
                <span class="subMenuTitle subNavMenuTitle">Invest</span>
                <ul class="subItemsWraper subNavItemsWraper">
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Alliance Investment Plus Plan (AIP)</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Group Alliance Income Investment Plan (GAIIP)</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Alliance Income Investment Plan</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item" id="menuItem">
            <a href="#" class="nav-link firstLevelLink">
              About AAI
            </a>
            <div class='subMenuStyle'>
              <div class="subNavBlock">
                <span class="subMenuTitle subNavMenuTitle">About Us</span>
                <ul class="subItemsWraper subNavItemsWraper">
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Who We Are</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Mission & Vision</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Our Values</a>
                  </li>
                </ul>
              </div>
              <div class="subNavBlock">
                <span class="subMenuTitle subNavMenuTitle">Our Team</span>
                <ul class="subItemsWraper subNavItemsWraper">
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Our Board</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Our Management Team</a>
                  </li>
                  <li class="subMenuItemStyle">
                      <a class="subMenuLinkStyle" href="#">Alliance Income Investment Plan</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item" id="menuItem">
            <a href="#" class="nav-link firstLevelLink">
              Careers
            </a>
          </li>
          <li class="nav-item" id="menuItem">
            <a href="#" class="nav-link firstLevelLink">
              Contact Us
            </a>
          </li>
        </ul>


        <div class="col-md-3 text-end"></div>
      </header>
    </div>
  );
}
