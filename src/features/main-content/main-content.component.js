import React from 'react';
import { Route } from 'react-router-dom';
import DynamicImport from '../../common/dynamic-import/dynamic-import.component';
import Home from '../../pages/home/home.page';
// import RegistrationPage from '../../pages/user/registration/registration.page';

const MainContent = () => (
    <>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/user/registration"
        render={props => (
          <DynamicImport load={() => import('./../../pages/user/registration/registration.page')}>
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
    </>
);


export default MainContent;
