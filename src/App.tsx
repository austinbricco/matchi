import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { GameMode } from '@/types/GameMode';
import { GameBoard } from './components/game-board';

const App = () => {
  const [gameMode, setGameMode] = useState<GameMode>();
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="container sm:max-w-[48rem] pt-10 sm:pt-20">
      <div className="flex flex-col space-y-4">
        <div className="text-4xl">Matchi</div>
        {!gameStarted ? (
          <>
            <div className="tracking-tight">
              Matchi is a fun and challenging memory matching game where players flip tiles to find
              matching symbols. Test your memory and concentration as you race against time to match
              all the tiles using the fewest flips possible. Sharpen your skills, beat your best
              time, and become a Matchi master!
            </div>
            <div className="flex items-center space-x-4">
              <Select value={gameMode} onValueChange={(v: GameMode) => setGameMode(v)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select game mode" />
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
          <GameBoard />
        )}
      </div>
    </div>
  );
};

export default App;
