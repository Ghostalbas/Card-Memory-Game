import { useState, useEffect, useRef } from 'react';
import { DIFFICULTY_LEVELS, CARD_ICONS } from '../utils/gameConfig';

const useMemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS.EASY);
    const [timeLeft, setTimeLeft] = useState(0);
    const [gameState, setGameState] = useState('idle'); // idle, playing, won, lost
    const [gameStats, setGameStats] = useState({
        wins: 0,
        losses: 0,
        bestTime: { Easy: null, Medium: null, Hard: null }
    });

    const timerRef = useRef(null);

    // Load stats from local storage on mount
    useEffect(() => {
        const savedStats = localStorage.getItem('memoryGameStats');
        if (savedStats) {
            setGameStats(JSON.parse(savedStats));
        }
    }, []);

    // Update stats in local storage
    useEffect(() => {
        localStorage.setItem('memoryGameStats', JSON.stringify(gameStats));
    }, [gameStats]);

    // Shuffle cards
    const shuffleCards = () => {
        const numPairs = difficulty.pairs;
        // Select the necessary number of icons from the list
        const selectedIcons = CARD_ICONS.slice(0, numPairs);

        // Create pairs
        /* 
           Note: We need to render the icon component. 
           In React, if we store the component function/object in state, we can render it.
        */
        const finalCards = [...selectedIcons, ...selectedIcons]
            .sort(() => Math.random() - 0.5)
            .map((Icon, index) => ({
                icon: <Icon size={32} />, // Render element here
                id: Math.random(),
                matched: false
            }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(finalCards);
        setTurns(0);
        setTimeLeft(difficulty.timeLimit);
        setGameState('playing');
    };

    // Handle a choice
    const handleChoice = (card) => {
        if (gameState !== 'playing') return;
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // Compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.icon.type === choiceTwo.icon.type) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.icon.type === choiceOne.icon.type) {
                            return { ...card, matched: true };
                        }
                        return card;
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    // Reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    };

    // Timer Logic
    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setGameState('lost');
            handleGameEnd(false);
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [gameState, timeLeft]);

    // Check Win Condition
    useEffect(() => {
        if (gameState === 'playing' && cards.length > 0) {
            const allMatched = cards.every(card => card.matched);
            if (allMatched) {
                setGameState('won');
                handleGameEnd(true);
                clearInterval(timerRef.current);
            }
        }
    }, [cards, gameState]);

    const handleGameEnd = (isUiWin) => {
        setGameStats(prev => {
            const newStats = { ...prev };
            if (isUiWin) {
                newStats.wins += 1;
                const timeTaken = difficulty.timeLimit - timeLeft;
                const currentBest = newStats.bestTime[difficulty.name];
                if (!currentBest || timeTaken < currentBest) {
                    newStats.bestTime[difficulty.name] = timeTaken;
                }
            } else {
                newStats.losses += 1;
            }
            return newStats;
        });
    };

    const changeDifficulty = (levelKey) => {
        if (DIFFICULTY_LEVELS[levelKey]) {
            setDifficulty(DIFFICULTY_LEVELS[levelKey]);
            setGameState('idle');
        }
    };

    return {
        cards,
        turns,
        disabled,
        choiceOne,
        choiceTwo,
        handleChoice,
        shuffleCards,
        gameState,
        timeLeft,
        gameStats,
        difficulty,
        changeDifficulty
    };
};

export default useMemoryGame;
