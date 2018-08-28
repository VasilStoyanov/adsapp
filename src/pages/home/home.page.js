import React, { Component } from 'react';

class Home extends Component {
  state = {
    homePage: 'This is the home page',
  };

  render() {
    const { homePage } = this.state;
    return (
      <>
        <h1>{ homePage }</h1>
      </>
    );
  }
}

export default Home;
