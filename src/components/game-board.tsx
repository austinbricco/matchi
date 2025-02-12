import { GameMode } from '@/types/GameMode';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MoveCounter } from '@/components/move-counter';
import { GameTimer } from '@/components/game-timer';
import { GameBoardTile } from '@/components/game-board-tile';
import { UNIQUE_GAME_CARDS } from '@/constants/GameCards';

type GameBoardProps = {
  gameMode?: GameMode;
};

export const GameBoard = ({ gameMode }: GameBoardProps) => {
  const [moves, setMoves] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [gameCards, setGameCards] = useState(
    UNIQUE_GAME_CARDS.concat(UNIQUE_GAME_CARDS).sort(() => 0.5 - Math.random())
  );
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (cardIndex: number) => {
    if (openCards.length < 2) {
      setOpenCards((prev) => [...prev, cardIndex]);
      setMoves((moves) => moves + 1);
    }
  };

  const evaluateCards = useCallback(() => {
    if (gameCards[openCards[0]].category === gameCards[openCards[1]].category) {
      setGameCards((prev) =>
        prev.map((p, i) => (openCards.includes(i) ? { ...p, matched: true } : p))
      );
      setOpenCards([]);
      return;
    }

    timeout.current = setTimeout(() => setOpenCards([]), 500);
  }, [gameCards, openCards]);

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluateCards, 500);
    }
  }, [openCards, evaluateCards]);

  useEffect(() => {
    if (gameCards.length === gameCards.filter((d) => d.matched).length) {
      setGameActive(false);
    }
  }, [gameCards]);

  if (!gameMode) return null;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2">
        <MoveCounter moves={moves} />
        <GameTimer running={gameActive} />
      </div>
      <div className="grid gap-4 grid-cols-4 w-fit border p-4 rounded-md shadow-md">
        {gameCards.map((card, i) => (
          <GameBoardTile
            key={`${card.category}-${i}`}
            flipped={openCards.includes(i)}
            onClick={() => handleCardClick(i)}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};
