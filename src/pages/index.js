import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { description } from '../../package.json'

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {path: {eq: "/home" }}) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default function Index({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div className="blog-post-container">
      <Helmet title={`${description} - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
};
