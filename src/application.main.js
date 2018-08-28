import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import client from './app-config/apollo/apollo.client';
import DynamicImport from './utils/dynamic-import/dynamic-import.component';
import routeConfig from './app-config/routes/route.config';
import Header from './features/header-navigation/header-navigation.component';
import MainContent from './features/main-content/main-content.component';

const rootContainer = document.getElementById('add-app-root');

render(
  <ApolloProvider client={client}>
    <Router>
      <>
        <Header />
        <MainContent routeConfig={routeConfig}>
          {
            (routes) => {
              routes.map(route => (
                <Route
                  {...route.props}
                  render={props => (
                    <DynamicImport load={() => route.component}>
                      {
                      Component => (
                        Component === null
                          ? <><h1>Loading...</h1></>
                          : <Component {...props} />
                      )
                    }
                    </DynamicImport>
                  )}
                />
              ));
            }
          }
        </MainContent>
      </>
    </Router>
  </ApolloProvider>,
  rootContainer,
);


//
// {/*
//   <Header />
//   <Body>
//     <SideNav position={"left"}></SideNav>
//     <SideNav position={"right"}></SideNav>
//     <MainContent>
//       <Router></Router>
//     </MainContent>
//   </Body>
//   <Footer />
// */}