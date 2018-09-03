import React from 'react';
import { Route } from 'react-router-dom';
import uuid from 'uuid';
import {
  arrayOf, shape, string, func,
} from 'prop-types';
import DynamicImport from '../../common/dynamic-import/dynamic-import.component';
// import RegistrationPage from '../../pages/user/registration/registration.page';

const MainContent = ({ routeConfigs }) => (
  <>
    {
      routeConfigs.map(currentRouteConfig => (
        <Route
          {...currentRouteConfig.props}
          key={uuid()}
          render={() => (

            <DynamicImport load={currentRouteConfig.module}>
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
    module: func.isRequired,
  })).isRequired,
};

export default MainContent;
