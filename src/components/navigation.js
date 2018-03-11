import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/logo.svg';
import menu from '../pages/menu.json';

const doMenu = elm => {
  const subMenu = (() => {
    if (elm.sections &&
      elm.sections.length > 0) {

      return elm.sections.map(aSection => doMenu(aSection));
    }

    return '';
  })();

  return <li key={elm.name} className="menu-item">
    <div>
      <Link to={elm.path}>
        {elm.name}
      </Link>
    </div>
    {subMenu}
  </li>;
}

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let thisMenu = [];

    for (let i = 0; i < menu.length; i += 1) {
      const aMenuItem = menu[i]
        , menuElement = doMenu(aMenuItem);

      thisMenu.push(menuElement);
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
