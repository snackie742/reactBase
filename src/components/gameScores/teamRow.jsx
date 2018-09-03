import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { imageLookUp } from './imageLookup.util';
import '../../styles/logos.css';


const TeamRow = ({ city, score, abbr, time}) => {
  const cityClassName =cx(
    {'col-sm-8': score},
    {'col-sm-5': !score},
  ); 
  const imgId =cx(
    {'clip': score},
    {'dailyClip': !score},
  ); 
  return(
    <div className="row">
      <div className="col-sm-2">
        <img id={imgId} src={imageLookUp(abbr)} alt=""/>
      </div>
      <div className={cityClassName} style={{ textAlign: 'left' }}>
        {city}
      </div>
      {score &&
        <div className="col-sm-2">
          {score}
        </div>
      }
      {time &&
        <div className="col-sm-6 col-lg-5" style={{ fontSize: '1.35rem'}}>
          {time}
        </div>
      }
    </div>
  );
}

TeamRow.propTypes = {
  abbr: PropTypes.string,
  city: PropTypes.string,
  score: PropTypes.string,
  time: PropTypes.string,
};

TeamRow.defaultProps = {
  abbr: '',
  city: '',
  score: '',
  time: '',
};

export default TeamRow;
