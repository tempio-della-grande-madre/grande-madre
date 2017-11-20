import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/logo.svg';
import menu from '../pages/menu.json';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let thisMenu = [];

    for (let i = 0; i < menu.length; i += 1) {
      const aMenuItem = menu[i]

      thisMenu.push(<li key={aMenuItem.name} className="menu-item">
        <div>
          <Link to={aMenuItem.path}>
            {aMenuItem.name}
          </Link>
        </div>
      </li>);
    }

    return <div id="navigation">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo}></img>
        </Link>
      </div>
      <ul className="menu">
        {thisMenu}
      </ul>
    </div>;
  }
}
