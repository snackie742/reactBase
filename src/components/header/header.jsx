import React from 'react';
import logo from '../../images/mlb.png';

const Header = () => (
  <header className="App-header">
    <div className="row">
      <div className="col-sm-3 col-lg-3 col-xl-2">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col-sm-9">
        <h1 className="App-title">MLB Scoreboard</h1>
      </div>
    </div>
  </header>
);

export default Header;