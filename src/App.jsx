import { useRef } from 'react';
import useMemoryGame from './hooks/useMemoryGame';
import GameBoard from './components/GameBoard';
import DifficultySelector from './components/DifficultySelector';
import GameInfo from './components/GameInfo';
import Modal from './components/Modals';
import Card from './components/Card'; // Importing just for reference if needed, but GameBoard handles it
import './App.css';
import { Play } from 'lucide-react';

function App() {
  const {
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
  } = useMemoryGame();

  const isPlaying = gameState === 'playing';

  return (
    <div className="app-container">
      <header>
        <h1>Memory Game</h1>
        <p>Find matches, beat the clock!</p>
      </header>

      <div className="controls">
        <DifficultySelector
          currentDifficulty={difficulty}
          onChangeDifficulty={changeDifficulty}
          gameState={gameState}
        />

        {/* Statistics & Timer */}
        <GameInfo
          turns={turns}
          timeLeft={timeLeft}
          gameStats={gameStats}
          difficulty={difficulty}
        />

        {/* Start Button */}
        {gameState === 'idle' && (
          <button className="start-btn pulse" onClick={shuffleCards}>
            <Play size={24} fill="currentColor" />
            Start Game
          </button>
        )}
      </div>

      <main>
        <GameBoard
          cards={cards}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
          disabled={disabled}
          gridSize={difficulty.gridSize}
        />
      </main>

      {/* Modals */}
      {(gameState === 'won' || gameState === 'lost') && (
        <Modal
          type={gameState}
          onRestart={shuffleCards}
          stats={{ timeTaken: difficulty.timeLimit - timeLeft }}
        />
      )}

      {/* Footer */}
      <footer style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>
        <p>Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
