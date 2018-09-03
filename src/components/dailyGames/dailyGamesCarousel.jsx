import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../common/carousel';
import DailyGameCard from './dailyGameCard';

const DailyGamesCarousel = ({games}) => {
    console.log(games)
  return(
    <Fragment>
      <Carousel>
        { games && games.map(game => (
          <DailyGameCard
            key={game}
            gameDetails={game}
          />
        ))
        }
      </Carousel>
    </Fragment>
  );
};

DailyGamesCarousel.propTypes = {
    games: PropTypes.array,
};

DailyGamesCarousel.defaultPropts = {
    games: [],
};

export default DailyGamesCarousel;