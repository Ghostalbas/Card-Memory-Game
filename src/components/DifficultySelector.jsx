import React from 'react';
import classNames from 'classnames';
import { DIFFICULTY_LEVELS } from '../utils/gameConfig';
import './DifficultySelector.css';

const DifficultySelector = ({ currentDifficulty, onChangeDifficulty, gameState }) => {
    return (
        <div className="difficulty-selector">
            {Object.keys(DIFFICULTY_LEVELS).map((key) => {
                const level = DIFFICULTY_LEVELS[key];
                return (
                    <button
                        key={key}
                        className={classNames('difficulty-btn', {
                            active: currentDifficulty.name === level.name
                        })}
                        onClick={() => onChangeDifficulty(key)}
                        disabled={gameState === 'playing'}
                    >
                        {level.name}
                    </button>
                );
            })}
        </div>
    );
};

export default DifficultySelector;
