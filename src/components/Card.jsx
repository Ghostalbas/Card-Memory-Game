import React from 'react';
import classNames from 'classnames';
import './Card.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className={classNames('card-inner', { flipped: flipped })}>
                <div className="card-front">
                    {/* This is actually the hidden side (question mark or patter) */}
                    <div className="pattern">?</div>
                </div>
                <div className="card-back">
                    {/* This is the unveiled image/icon */}
                    {card.icon}
                </div>
            </div>
        </div>
    );
};

export default Card;
