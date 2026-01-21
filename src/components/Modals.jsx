import React from 'react';
import { Trophy, Frown, RefreshCw } from 'lucide-react';
import './Modals.css';

const Modal = ({ type, onRestart, stats }) => {
    const isWin = type === 'won';

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-icon-wrapper">
                    {isWin ? <Trophy size={64} className="modal-icon win" /> : <Frown size={64} className="modal-icon loss" />}
                </div>

                <h2>{isWin ? 'Congratulations!' : 'Game Over'}</h2>

                <p className="modal-message">
                    {isWin
                        ? "You found all matching pairs!"
                        : "Time run out! Better luck next time."}
                </p>

                {isWin && stats && (
                    <div className="game-summary">
                        <div className="summary-item">
                            <span>Time Taken</span>
                            <strong>{stats.timeTaken}s</strong>
                        </div>
                    </div>
                )}

                <button className="restart-btn" onClick={onRestart}>
                    <RefreshCw size={18} />
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default Modal;
