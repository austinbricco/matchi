import { useEffect } from 'react';
import { GameStat } from '@/components/game/game-stat';
import { formatTime } from '@/lib/formatTime';

type GameTimerProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export const GameTimer = ({ time, setTime }: GameTimerProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTime]);

  return <GameStat label="Timer" value={formatTime(time)} />;
};
