const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
    , blogPostTemplate = path.resolve(__dirname, 'src', 'templates', 'article.js');

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
     ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
   }`).then(result => {

    if (result.errors) {

      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.map(({ node }) => {

      return createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
