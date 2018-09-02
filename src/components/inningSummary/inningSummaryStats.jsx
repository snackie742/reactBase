import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/scoreboard.css';
import cx from 'classnames';

export const InningSummaryStats = ({ className, awayValue, homeValue, statAbbr }) => {
    const statClass = cx(
        'col-lg-1',
        'scoreBoardInnings',
        className,
      );
    return(
      <div className={statClass} >
        <p>{statAbbr}</p>
        <p>{awayValue}</p>
        <p>{homeValue}</p>
      </div>
);
}

InningSummaryStats.propTypes = {
    className: PropTypes.string,
    awayValue: PropTypes.string,
    homeValue: PropTypes.string,
    statAbbr: PropTypes.string,
};

InningSummaryStats.defaultProps = {
    className: '',
    awayValue: '',
    homeValue: '',
    statAbbr: '',
};

export default InningSummaryStats;