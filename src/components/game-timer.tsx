import { useCallback, useEffect, useState } from 'react';

export const GameTimer = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const formatTime = useCallback((seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="text-lg font-semibold">Timer:</div>
      <div>{formatTime(elapsedSeconds)}</div>
    </div>
  );
};
