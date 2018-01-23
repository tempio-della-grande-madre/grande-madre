import React from 'react';
import Helmet from 'react-helmet';

import '../scss/index.scss';
import {description} from '../../package.json';
import Navigation from '../components/navigation';
import Main from '../components/main';
import Footer from '../components/footer';

export default function TemplateWrapper({ children }) {
  return <div id="root">
    <Helmet title={description}/>
    <Navigation/>
    <Main headerName={description}>
      {children}
    </Main>
    <Footer/>
  </div>;
};
