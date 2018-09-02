import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import ConnectedScoreBoard from './containers/scoreBoard.container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="contianer" id="content">
            <ConnectedScoreBoard />
          </div>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
