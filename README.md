# Card Memory Game

interactive card memory game built with React and Vite.

## 🎮 Features

- **Three Difficulty Levels**: 
  - **Easy**: 4x4 grid (8 pairs), 60s limit.
  - **Medium**: 6x6 grid (18 pairs), 90s limit.
  - **Hard**: 8x8 grid (32 pairs), 120s limit.
- **Statistics Tracking**: Keeps track of your wins, losses, and best times for each difficulty level using LocalStorage.
- **Responsive Design**: Playable on various screen sizes.
- **Visual Feedback**: Smooth card flip animations and status modals for win/loss states.
- **Modern UI**: Styled with Vanilla CSS and powered by Lucide React icons.

## 🛠️ Tech Stack

- **React 19**: Frontend library for building the UI.
- **Vite**: Ultra-fast build tool and development server.
- **Lucide React**: Beautifully simple pixel-perfect icons.
- **CSS3**: Custom styles with animations and transitions.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 🧠 Game Mechanics

1. **Start**: Choose a difficulty level and click the **Start Game** button.
2. **Flip**: Click a card to reveal the icon beneath.
3. **Match**: Select a second card. If the icons match, both cards stay flipped. If they don't, they will flip back after a short delay.
4. **Win**: Match all pairs within the time limit to win!
5. **Loss**: If the timer reaches zero before all pairs are matched, the game is over.

## 📂 Project Structure

- `src/components/`: React components (Card, GameBoard, DifficultySelector, etc.).
- `src/hooks/`: Custom hooks like `useMemoryGame` for game logic.
- `src/utils/`: Configuration and helper functions.
- `src/assets/`: Static assets.
- `App.jsx`: Main application wrapper.



