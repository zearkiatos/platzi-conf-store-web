/* eslint-disable react/jsx-fragments */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import initialState from '@mocks/initialState';
import Products from '@components/Products';

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Platzi Conf Store - Products </title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zearkiatos" />
        <meta name="twitter:creator" content="@zearkiatos" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://github.com/zearkiatos.png?size=200"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://github.com/zearkiatos.png?size=200"
        />
        <meta property="og:url" content="https://platzi-conf-store-web.firebaseapp.com/" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </Fragment>
  );
};

export default Home;
