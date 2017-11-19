import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/logo.svg';
import font from '../helpers/font';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    font();
  }

  render() {
    return <div id="header">
      <Link to="/" className="logo">
        <img src={logo}></img>
      </Link>

      <div>
        <span className="title">
          {this.props.headerName}
        </span>
      </div>
    </div>;
  }
}
