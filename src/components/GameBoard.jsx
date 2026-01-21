import React from 'react';
import Card from './Card';
import './GameBoard.css';

const GameBoard = ({ cards, handleChoice, choiceOne, choiceTwo, disabled, gridSize }) => {
    return (
        <div
            className="game-board"
            style={{
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`
            }}
        >
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                />
            ))}
        </div>
    );
};

export default GameBoard;
