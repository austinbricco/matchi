import { GameMode } from '@/types/GameMode';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MoveCounter } from '@/components/game/move-counter';
import { GameTimer } from '@/components/game/game-timer';
import { GameBoardTile } from '@/components/game/game-board-tile';
import { generateGameCards } from '@/lib/generateGameCards';
import { GameComplete } from '@/components/game/game-complete';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

type GameBoardProps = {
  gameMode?: GameMode;
  resetGame: () => void;
};

export const GameBoard = ({ gameMode, resetGame }: GameBoardProps) => {
  const [moves, setMoves] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [gameCards, setGameCards] = useState(generateGameCards(gameMode));
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
      setGameComplete(true);
    }
  }, [gameCards]);

  if (!gameMode) return null;

  return (
    <>
      {gameComplete ? (
        <GameComplete moves={moves} time={elapsedSeconds} onClick={resetGame} />
      ) : (
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <MoveCounter moves={moves} />
            <GameTimer time={elapsedSeconds} setTime={setElapsedSeconds} />
            <Button aria-label="Restart game" variant="outline" onClick={resetGame}>
              <RotateCcw />
            </Button>
          </div>
          <div className="grid gap-4 grid-cols-4 w-fit border p-4 rounded-md shadow-md">
            {gameCards.map((card, i) => (
              <GameBoardTile
                key={`${card.category}-${i}`}
                flipped={openCards.includes(i) || card.matched}
                onClick={() => handleCardClick(i)}
                {...card}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
