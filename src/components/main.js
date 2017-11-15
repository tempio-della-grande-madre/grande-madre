import React from 'react';
import Link from 'gatsby-link';

export default function Main({ children }) {
  console.info(children)
  return <div id="main">
    {children()}
  </div>;
};
