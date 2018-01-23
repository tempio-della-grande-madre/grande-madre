import React from 'react';
import Link from 'gatsby-link';

import font from '../helpers/font';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    font();
  }

  render() {
    return <div id="main">
      <div className="title">
        {this.props.headerName}
      </div>
      {this.props.children()}
    </div>;
  }
}
