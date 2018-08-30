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

export const GameScore = ({ away }) => (
    <Fragment>
      {away.teamName}
      <img id="clip" src={logos} />
    </Fragment>
);

GameScore.propTypes = {
    away: PropTypes.shape({
      teamName: PropTypes.string,
      abbreviation: PropTypes.string,
    }),
    home: PropTypes.shape({
      teamName: PropTypes.string,
      abbreviation: PropTypes.string,
    }),
};

GameScore.propTypes = {
    away: PropTypes.shape({
      teamName: '',
      abbreviation: '',
    }),
    home: PropTypes.shape({
      teamName: '',
      abbreviation: '',
    }),
};
export default GameScore;