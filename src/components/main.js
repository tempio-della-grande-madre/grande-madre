import React from 'react';
import Link from 'gatsby-link';

export default function Main({ children }) {
  return <div id="main">
    {children()}
  </div>;
};
