const siteTitle = 'Tempio della grande madre';

module.exports = {
  'pathPrefix': `/`,
  'siteMetadata': {
    'title': siteTitle,
    'author': siteTitle,
  },
  'plugins': [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      'resolve': `gatsby-source-filesystem`,
      'options': {
        'path': `${__dirname}/src/pages`,
        'name': 'pages',
      }
    },
    {
      'resolve': 'gatsby-transformer-remark',
      'options': {
        'plugins': [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      'resolve': 'gatsby-plugin-manifest',
      'options': {
        'name': siteTitle,
        'description': siteTitle,
        'short_name': siteTitle,
        'background_color': 'green',
        'theme_color': '#002635',
        'orientation': 'portrait',
        'display': 'minimal-ui'
      }
    }
  ]
};
