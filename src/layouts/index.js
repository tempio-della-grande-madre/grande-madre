import React from 'react';
import Helmet from 'react-helmet';

import '../scss/index.scss';
import {description} from '../../package.json';
import SideBar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

export default function TemplateWrapper({ children }) {
  return <span id="root">
    <Helmet title={description}/>
    <SideBar/>

    <div id="main">
      BODY
    </div>

    <Footer/>
  </span>;
};
