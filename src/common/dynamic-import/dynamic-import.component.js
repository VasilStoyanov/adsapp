import { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicImport extends Component {
  state = { component: null }

  componentDidMount = () => {
    const { load } = this.props;

    load()
      .then((mod) => {
        this.setState({
          component: mod.default,
        });
      });
  }

  render = () => {
    const { component } = this.state;
    const { children } = this.props;

    return children(component);
  }
}

DynamicImport.propTypes = {
  children: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
};

export default DynamicImport;
