import React from "react";
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
        <div class="container">
          <div class="logo">
            logo
          </div>
          <div class="desktopmenu">
            desktop menu
            <ul>
              <li class='menuItem'>
                <div class='subMenu'>
                  <ul class='subMenuItem'>

                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="search">
            search
          </div>
        </div>
    </header>
  );
};