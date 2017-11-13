import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';

import '../style/index.css';

export default function TemplateWrapper({ children }) {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
        {children()}
      </div>
    </div>
  );
};
