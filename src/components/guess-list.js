import React from 'react';
import PropTypes from 'prop-types';

import './guess-list.css';

export default function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

GuessList.propTypes = {
    guesses: PropTypes.array.isRequired
}
