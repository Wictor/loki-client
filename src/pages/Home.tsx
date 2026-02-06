import { useState } from 'react';

interface HomeProps {
  onCreateGame: (name: string) => void;
  onJoinGame: (name: string, roomCode: string) => void;
}

export function Home({ onCreateGame, onJoinGame }: HomeProps) {
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [showJoin, setShowJoin] = useState(false);

  const handleCreateGame = () => {
    if (playerName.trim()) {
      onCreateGame(playerName.trim());
    }
  };

  const handleJoinGame = () => {
    if (playerName.trim() && roomCode.trim()) {
      onJoinGame(playerName.trim(), roomCode.trim().toUpperCase());
    }
  };

  const handleRoomCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().slice(0, 4);
    setRoomCode(value);
  };

  const isNameValid = playerName.trim().length > 0;
  const isJoinValid = isNameValid && roomCode.trim().length === 4;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Title */}
        <div className="text-center">
          <div className="flex flex-col items-center mb-2">
            {/* Pixelated Painter Icon */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
              style={{ imageRendering: 'pixelated' }}
            >
              {/* Beret */}
              <rect x="5" y="0" width="6" height="1" fill="#e74c3c" />
              <rect x="4" y="1" width="8" height="1" fill="#c0392b" />
              <rect x="3" y="2" width="10" height="1" fill="#e74c3c" />
              {/* Beret pom-pom */}
              <rect x="7" y="0" width="2" height="1" fill="#f39c12" />

              {/* Hair */}
              <rect x="4" y="3" width="1" height="2" fill="#d4a574" />
              <rect x="11" y="3" width="1" height="2" fill="#d4a574" />

              {/* Face */}
              <rect x="5" y="3" width="6" height="4" fill="#f5cba7" />
              {/* Eyes */}
              <rect x="6" y="4" width="1" height="1" fill="#2c3e50" />
              <rect x="9" y="4" width="1" height="1" fill="#2c3e50" />
              {/* Mustache */}
              <rect x="5" y="6" width="2" height="1" fill="#8b4513" />
              <rect x="9" y="6" width="2" height="1" fill="#8b4513" />
              <rect x="7" y="6" width="2" height="1" fill="#a0522d" />
              {/* Beard */}
              <rect x="6" y="7" width="4" height="1" fill="#8b4513" />

              {/* Body / Smock */}
              <rect x="4" y="8" width="8" height="3" fill="#3498db" />
              <rect x="5" y="8" width="6" height="1" fill="#2980b9" />
              {/* Paint splats on smock */}
              <rect x="5" y="9" width="1" height="1" fill="#e74c3c" />
              <rect x="9" y="10" width="1" height="1" fill="#f1c40f" />
              <rect x="7" y="10" width="1" height="1" fill="#2ecc71" />

              {/* Left arm holding palette */}
              <rect x="2" y="9" width="2" height="1" fill="#f5cba7" />
              <rect x="1" y="10" width="3" height="2" fill="#f39c12" />
              {/* Paint dots on palette */}
              <rect x="1" y="10" width="1" height="1" fill="#e74c3c" />
              <rect x="3" y="10" width="1" height="1" fill="#3498db" />
              <rect x="2" y="11" width="1" height="1" fill="#2ecc71" />

              {/* Right arm holding brush */}
              <rect x="12" y="9" width="2" height="1" fill="#f5cba7" />
              {/* Paintbrush */}
              <rect x="13" y="7" width="1" height="3" fill="#d4a574" />
              <rect x="13" y="6" width="1" height="1" fill="#9b59b6" />
              {/* Paint drip from brush */}
              <rect x="13" y="5" width="1" height="1" fill="#9b59b6" opacity="0.6" />

              {/* Legs */}
              <rect x="5" y="11" width="2" height="2" fill="#2c3e50" />
              <rect x="9" y="11" width="2" height="2" fill="#2c3e50" />
              {/* Shoes */}
              <rect x="4" y="13" width="3" height="1" fill="#8b4513" />
              <rect x="9" y="13" width="3" height="1" fill="#8b4513" />

              {/* Easel behind (subtle) */}
              <rect x="0" y="4" width="1" height="8" fill="#78716c" opacity="0.4" />
              <rect x="15" y="4" width="1" height="8" fill="#78716c" opacity="0.4" />
              <rect x="0" y="4" width="16" height="1" fill="#78716c" opacity="0.2" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg">Fake Artist Goes to New York</p>
        </div>

        {/* Player Name Input */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Player Name</label>
          <input
            type="text"
            data-testid="player-name"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-4 py-4 text-lg bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Create Game Button */}
        <button
          data-testid="create-game"
          onClick={handleCreateGame}
          disabled={!isNameValid}
          className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          Create Game
        </button>

        {/* Or */}
        <div className="text-center text-gray-500 text-sm">or</div>

        {/* Join Game Toggle / Section */}
        {!showJoin ? (
          <button
            onClick={() => isNameValid && setShowJoin(true)}
            disabled={!isNameValid}
            className="w-full py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            Join Game
          </button>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              data-testid="room-code-input"
              placeholder="Room Code (4 letters)"
              value={roomCode}
              onChange={handleRoomCodeChange}
              autoFocus
              maxLength={4}
              className="w-full px-4 py-4 text-lg text-center uppercase tracking-widest bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowJoin(false);
                  setRoomCode('');
                }}
                className="flex-1 py-4 text-lg font-semibold bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                data-testid="join-game"
                onClick={handleJoinGame}
                disabled={!isJoinValid}
                className="flex-1 py-4 text-lg font-semibold bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
