import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './app-config/apollo/apollo.client';
import routeConfigs from './app-config/routes/route.config';
import Header from './features/header-navigation/header-navigation.component';
import MainContent from './features/main-content/main-content.component';

const rootContainer = document.getElementById('add-app-root');

render(
  <ApolloProvider client={client}>
    <Router>
      <>
        <Header />
        <MainContent routeConfigs={routeConfigs} />
      </>
    </Router>
  </ApolloProvider>,
  rootContainer,
);
