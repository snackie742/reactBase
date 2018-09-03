import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedScoreBoard from './containers/scoreBoard.container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <Header />
          <div className="contianer" id="content">
            <ConnectedScoreBoard />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
