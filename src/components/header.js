import React from 'react';
import Link from 'gatsby-link';

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
      <span className="title">
        {this.props.headerName}
      </span>
    </div>;
  }
}
