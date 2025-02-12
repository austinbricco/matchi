import { useCallback, useEffect, useState } from 'react';
import { GameStat } from '@/components/game-stat';

type GameTimerProps = {
  running?: boolean;
};

export const GameTimer = ({ running = true }: GameTimerProps) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (running) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running]);

  const formatTime = useCallback((seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  return <GameStat label="Timer" value={formatTime(elapsedSeconds)} />;
};
