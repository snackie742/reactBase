import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { GameScore } from './components/gameScore/gameScore';
import { getGames } from './components/dailyGames/dailyGames.actions';

export const mapDispatchToProps = {
  getGames,
};

class App extends Component {
  constructor(props){
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }
  componentWillMount(){
    console.log('mount');
    this.props.getGames();
  }
  handleCheck(){
    console.log('handleCheck');
    this.props.getGames();
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <GameScore
            away={{ teamName: 'Milwakee Brewers', abbreviation: 'MIL' }}
          />
          <input type="checkbox" onClick={this.handleCheck}/>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  getGames: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
