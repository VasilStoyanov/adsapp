import React from 'react';
import { Route } from 'react-router-dom';
import {
  arrayOf, shape, string,
} from 'prop-types';
import DynamicImport from '../../common/dynamic-import/dynamic-import.component';
// import RegistrationPage from '../../pages/user/registration/registration.page';

const MainContent = ({ routeConfigs }) => (
  <>
    {
      routeConfigs.map(currentRouteConfig => (
        <Route
          {...currentRouteConfig.props}
          render={() => (

            <DynamicImport load={() => import(`../../pages/${currentRouteConfig.pagePath}`)}>
              {
                Component => (
                  Component ? <Component />
                    : <><h1>Loading...</h1></>
                )
              }
            </DynamicImport>

          )}
        />
      ))
    }
  </>
);

MainContent.propTypes = {
  routeConfigs: arrayOf(shape({
    url: string.isRequired,
    pageComponent: string.isRequired,
  })).isRequired,
};

export default MainContent;
