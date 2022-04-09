/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@styles/app.css';
import Layout from '@containers/Layout';
import Router from '@router';

// eslint-disable-next-line react/function-component-definition
const App = () => (
  <BrowserRouter>
    <Layout>
        <Router />
    </Layout>
  </BrowserRouter>
);

export default App;
