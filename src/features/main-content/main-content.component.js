import { Component } from 'react';
import PropTypes from 'prop-types';
// import RegistrationPage from '../../pages/user/registration/registration.page';

class MainContent extends Component {
  render = () => {
    const { children } = this.props;
    const { routeConfig } = this.props;

    return children({ ...this.props });
  }
}

MainContent.propTypes = {
  children: PropTypes.func.isRequired,
  routeConfig: PropTypes.instanceOf(Object).isRequired,
};


export default MainContent;
