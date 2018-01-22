import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { description } from '../../package.json'

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/home" }}}) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length === 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-container">
              <Helmet title={`${description} - ${post.frontmatter.title}`} />
              <div className="blog-post">
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
