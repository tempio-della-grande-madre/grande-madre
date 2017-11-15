import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/logo.svg';

export default function Header({ headerName }) {
  return <div id="header">
    <div className="logo">
      <Link to="/">
        <img src={logo}></img>
      </Link>
    </div>
    <div className="heading">
      <div>
        <span className="title">
          {headerName}
        </span>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <span>
            Cosa facciamo
          </span>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              Statuto
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <span>
            Chi siamo
          </span>
        </li>
      </ul>
    </div>
  </div>;
};
