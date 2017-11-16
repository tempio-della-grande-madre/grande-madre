import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/logo.svg';
import font from '../helpers/font';

import menu from '../pages/menu.json';

const buildSubMenu = items => items.map(elm => <li key={elm.name} className="sub-menu-item">
    <div>
      <Link to={elm.path}>
        {elm.name}
      </Link>
    </div>
  </li>);

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.showSubMenu = this.showSubMenu.bind(this);
  }

  componentDidMount() {
    font();
  }

  showSubMenu(name) {
    const valueToStore = {};
    valueToStore[name] = !this.state[name];

    const newState = Object.assign(this.state, valueToStore);
    this.setState(newState);
  }

  render() {
    let thisMenu = [];

    for (let i = 0; i < menu.length; i += 1) {
      const aMenuItem = menu[i]

      thisMenu.push(<li key={aMenuItem.name} className="menu-item">
        <div onMouseEnter={this.showSubMenu.bind(this, aMenuItem.name)}>
          <Link to={aMenuItem.path}>
            {aMenuItem.name}
          </Link>
        </div>
        { (() => {
            if (aMenuItem.subMenu &&
              aMenuItem.subMenu.length) {

              return <ul className={`sub-menu ${this.state[aMenuItem.name] ? 'show' : ''}`}>
                {buildSubMenu(aMenuItem.subMenu)}
              </ul>
            }
          })()
        }
      </li>);
    }

    return <div id="header">
      <div className="logo">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div className="heading">
        <div>
          <span className="title">
            {this.props.headerName}
          </span>
        </div>
        <ul className="menu">
          {thisMenu}
        </ul>
      </div>
    </div>;
  }
}
