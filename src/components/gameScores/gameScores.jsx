import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logos from '../../images/mlb_logos.png';
import '../../styles/logos.css';

const teams = {
    Brewers: 'Brewers',
    Diamondbacks: 'Diamondbacks',
    Cubs: 'Cubs',
    Tigers: 'Tigers',
    Twins: 'Twins',
    Cardinals: 'Cardinals',
    Orioles: 'Orioles',
    Red_Sox: 'Red Sox',
    White_Sox: 'White Sox',
    Astros: 'Astros',
    Mets: 'Mets',
    Rays: 'Rays',
    Reds: 'Reds',
    Indians: 'Indians',
    Rockies: 'Rockies',
    Royals: 'Royals',
    Yankees: 'Yankees',
    Rangers: 'Rangers',
    Angels: 'Angels',
    Dodgers: 'Dodgers',
    Marlins: 'Marlins',
    Braves: 'Braves',
    Athletics: 'Athletics',
    Bluejays: 'Bluejays',
    Phillies: 'Phillies',
    Pirates: 'Pirates',
    Padres: 'Padres',
    Mariners: 'Mariners',
    Giants: 'Giants',
    Nationals: 'Nationals',
};

export const GameScore = ({ away, home, awayScore, homeScore }) => (
  <Fragment>
    <div className="row">
      {/* <img id="clip" src={logos} className='MIL'/> */}
      {away.City} - {awayScore}
    </div>
    <div className="row">
      {home.City} - {homeScore}
      {/* <img id="clip" src={logos} className='ARI'/> */}
    </div>
    <br />
  </Fragment>
);

GameScore.propTypes = {
    away: PropTypes.shape({
      City: PropTypes.string,
      abbreviation: PropTypes.string,
    }),
    awayScore: PropTypes.number,
    home: PropTypes.shape({
      City: PropTypes.string,
      abbreviation: PropTypes.string,
    }),
    homeScore: PropTypes.number,
};

GameScore.propTypes = {
    away: PropTypes.shape({
      City: '',
      abbreviation: '',
    }),
    awayScore: 0,
    home: PropTypes.shape({
      City: '',
      abbreviation: '',
    }),
    homeScore: 0,
};
export default GameScore;