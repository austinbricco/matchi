import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { GameMode } from '@/types/GameMode';
import { GameBoard } from '@/components/game/game-board';
import { cn } from '@/lib/utils';

export const Game = () => {
  const [gameMode, setGameMode] = useState<GameMode>();
  const [gameStarted, setGameStarted] = useState(false);

  const handleResetGame = () => {
    setGameMode(undefined);
    setGameStarted(false);
  };

  return (
    <div
      className={cn('container sm:max-w-[48rem] pt-10 sm:pt-20', gameStarted && 'sm:max-w-[25rem]')}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-5xl font-bold">Matchi</div>
        </div>
        {!gameStarted ? (
          <>
            <div className="tracking-tight leading-normal">
              Matchi is a fun and challenging memory matching game where players flip tiles to find
              matching symbols. Test your memory and concentration as you race against time to match
              all the tiles using the fewest flips possible. Sharpen your skills, beat your best
              time, and become a Matchi master!
            </div>
            <div className="flex items-center space-x-4">
              <Select value={gameMode} onValueChange={(v: GameMode) => setGameMode(v)}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Game mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="destructive"
                disabled={!gameMode}
                onClick={() => setGameStarted(true)}
              >
                Start Game!
              </Button>
            </div>
          </>
        ) : (
          <GameBoard gameMode={gameMode} resetGame={handleResetGame} />
        )}
      </div>
    </div>
  );
};
