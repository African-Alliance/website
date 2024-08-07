import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/AAI_Logo.png';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-1 border-bottom">
      <div className="container wrapperStyle">
        <Link
          to="/"
          class="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt="logo" id="header_logo" />
        </Link>

        <div class="menuMobileStyle">
          <div>
            <ul>
              <li class="menuItemStyle">
                <Link class="menuLinkStyle">Health</Link>
                <div class="subMenuStyle">
                  <div class="menuItemStyle">
                    <span class="menuLinkStyle subMenuTitle">
                      Health Insurance
                    </span>
                    <ul>
                      <li class="menuItemStyle">
                        <Link class="menuLinkStyle">Health Plans</Link>
                      </li>
                      <li class="menuItemStyle">
                        <Link class="menuLinkStyle">EasyCare</Link>
                      </li>
                      <li class="menuItemStyle">
                        <Link class="menuLinkStyle">
                          International Health Plan
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="menuDesktopStyle">
          <ul
            class="nav col-12 col-md-auto mb-2 mb-md-0 justify-content-center"
            id="navLinks"
          >
            <li class="nav-item" id="menuItem">
              <Link to="#" class="nav-link firstLevelLink">
                Product and Services
              </Link>
              <div class="subMenuStyle">
                <div class="subNavBlock">
                  <span class="subMenuTitle subNavMenuTitle">Insure</span>
                  <ul class="subItemsWraper subNavItemsWraper">
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="/children-education">
                        Children Education Plan (CEP)
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="/money-appreciation">
                        Money Appreciation Plan (MAP)
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="/smart-kid-education">
                        Alliance Smart Kid Educational Plan (ASK)
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="subNavBlock">
                  <span class="subMenuTitle subNavMenuTitle">Invest</span>
                  <ul class="subItemsWraper subNavItemsWraper">
                    <li class="subMenuItemStyle">
                      <Link
                        class="subMenuLinkStyle"
                        to="alliance-investment-plus"
                      >
                        Alliance Investment Plus Plan (AIP)
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Group Alliance Income Investment Plan (GAIIP)
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Alliance Income Investment Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="nav-item" id="menuItem">
              <Link to="#" class="nav-link firstLevelLink">
                About AAI
              </Link>
              <div class="subMenuStyle">
                <div class="subNavBlock">
                  <span class="subMenuTitle subNavMenuTitle">About Us</span>
                  <ul class="subItemsWraper subNavItemsWraper">
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Who We Are
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Mission & Vision
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Our Values
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="subNavBlock">
                  <span class="subMenuTitle subNavMenuTitle">Our Team</span>
                  <ul class="subItemsWraper subNavItemsWraper">
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Our Board
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Our Management Team
                      </Link>
                    </li>
                    <li class="subMenuItemStyle">
                      <Link class="subMenuLinkStyle" to="#">
                        Alliance Income Investment Plan
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="nav-item" id="menuItem">
              <Link to="#" class="nav-link firstLevelLink">
                Careers
              </Link>
            </li>
            <li class="nav-item" id="menuItem">
              <Link to="#" class="nav-link firstLevelLink">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div class="menuButtonStyle">
          <FontAwesomeIcon icon={faBars} size='2x' />
        </div>
      </div>
    </header>
  );
}
