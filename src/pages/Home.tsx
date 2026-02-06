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
          <div className="flex flex-col items-center mb-4">
            {/* Loki Logo - Trickster Mask with Paintbrush */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
            >
              {/* Horns */}
              <path
                d="M30 45 Q25 25, 20 15 Q18 10, 22 8 Q26 10, 28 15 L35 40"
                fill="url(#hornGradient)"
                stroke="#10b981"
                strokeWidth="2"
              />
              <path
                d="M90 45 Q95 25, 100 15 Q102 10, 98 8 Q94 10, 92 15 L85 40"
                fill="url(#hornGradient)"
                stroke="#10b981"
                strokeWidth="2"
              />

              {/* Mask/Face */}
              <ellipse
                cx="60"
                cy="60"
                rx="32"
                ry="38"
                fill="url(#maskGradient)"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />

              {/* Eye holes - trickster slant */}
              <ellipse
                cx="50"
                cy="55"
                rx="6"
                ry="10"
                fill="#1f2937"
                transform="rotate(-15 50 55)"
              />
              <ellipse
                cx="70"
                cy="55"
                rx="6"
                ry="10"
                fill="#1f2937"
                transform="rotate(15 70 55)"
              />

              {/* Eye glints */}
              <circle cx="48" cy="52" r="2" fill="#3b82f6" opacity="0.8" />
              <circle cx="72" cy="52" r="2" fill="#3b82f6" opacity="0.8" />

              {/* Mischievous smile */}
              <path
                d="M45 70 Q60 80, 75 70"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Paintbrush crossing diagonally */}
              <g transform="rotate(-35 60 60)">
                {/* Brush handle */}
                <rect
                  x="75"
                  y="35"
                  width="5"
                  height="50"
                  rx="2"
                  fill="#f59e0b"
                  stroke="#d97706"
                  strokeWidth="1"
                />
                {/* Brush ferrule */}
                <rect
                  x="74"
                  y="82"
                  width="7"
                  height="8"
                  fill="#78716c"
                  stroke="#57534e"
                  strokeWidth="1"
                />
                {/* Brush bristles */}
                <path
                  d="M74 90 L72 100 L77.5 102 L83 100 L81 90 Z"
                  fill="#3b82f6"
                  stroke="#2563eb"
                  strokeWidth="1"
                />
                {/* Paint drip */}
                <circle cx="77.5" cy="103" r="2" fill="#3b82f6" opacity="0.7" />
              </g>

              {/* Decorative stars/sparkles */}
              <path d="M15 60 L17 62 L15 64 L13 62 Z" fill="#10b981" opacity="0.6" />
              <path d="M105 60 L107 62 L105 64 L103 62 Z" fill="#10b981" opacity="0.6" />
              <path d="M60 15 L62 17 L60 19 L58 17 Z" fill="#3b82f6" opacity="0.6" />

              {/* Gradients */}
              <defs>
                <linearGradient id="hornGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="maskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#1e40af" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Stylized LOKI text */}
            <h1 className="text-5xl font-bold tracking-wider bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
              LOKI
            </h1>
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
