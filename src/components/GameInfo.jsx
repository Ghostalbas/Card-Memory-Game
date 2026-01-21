import React from 'react';
import { Timer, Trophy, Activity, Hourglass } from 'lucide-react';
import './GameInfo.css';

const GameInfo = ({ turns, timeLeft, gameStats, difficulty }) => {
    return (
        <div className="game-info-container">
            <div className="info-card">
                <Hourglass size={20} className="icon" />
                <div className="info-content">
                    <span className="label">Time</span>
                    <span className="value custom-font">{timeLeft}s</span>
                </div>
            </div>

            <div className="info-card">
                <Activity size={20} className="icon" />
                <div className="info-content">
                    <span className="label">Turns</span>
                    <span className="value custom-font">{turns}</span>
                </div>
            </div>

            <div className="info-card stats-card">
                <Trophy size={16} className="icon gold" />
                <div className="stats-details">
                    <div className="stat-row">
                        <span>Wins:</span> <strong>{gameStats.wins}</strong>
                    </div>
                    <div className="stat-row">
                        <span>Best ({difficulty.name}):</span>
                        <strong>{gameStats.bestTime[difficulty.name] ? `${gameStats.bestTime[difficulty.name]}s` : '-'}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;
