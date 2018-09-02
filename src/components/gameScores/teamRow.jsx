import React from 'react';
import PropTypes from 'prop-types';
import { imageLookUp } from './imageLookup.util';
import '../../styles/logos.css';

const TeamRow = ({ city, score, abbr }) => (
  <div className="row">
    <div className="col-sm-2">
      <img id="clip" src={imageLookUp(abbr)} alt=""/>
    </div>
    <div className="col-sm-8" style={{ textAlign: 'left' }}>
      {city}
    </div>
    <div className="col-sm-1">
      {score}
    </div>
  </div>
);

TeamRow.propTypes = {
  city: PropTypes.string,
  score: PropTypes.string,
  abbr: PropTypes.string,
};

TeamRow.defaultProps = {
  city: '',
  score: '',
  abbr: '',
};

export default TeamRow;
