import { GameMode } from '@/types/GameMode';
import { useState } from 'react';
import { MoveCounter } from '@/components/move-counter';
import { GameTimer } from '@/components/game-timer';
import { GameBoardTile } from './game-board-tile';
import { Ghost } from 'lucide-react';

type GameBoardProps = {
  gameMode?: GameMode;
};

export const GameBoard = ({ gameMode }: GameBoardProps) => {
  const [moves, setMoves] = useState(0);

  if (!gameMode) return null;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-8">
        <MoveCounter moves={moves} />
        <GameTimer />
      </div>
      {/* game board tile */}
      <GameBoardTile icon={<Ghost />} />
    </div>
  );
};
