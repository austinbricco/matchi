import { Button } from '@/components/ui/button';
import { formatTime } from '@/lib/formatTime';

type GameCompleteProps = {
  moves: number;
  time: number;
  onClick: () => void;
};

export const GameComplete = ({ moves, time, onClick }: GameCompleteProps) => {
  return (
    <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-sm motion-preset-confetti motion-duration-2000">
      <div className="flex flex-col space-y-2 border rounded-md shadow-md px-4 py-2">
        <div className="text-4xl text-center font-bold">Winner!</div>
        <div className="flex gap-4 justify-center pb-6">
          <div>
            <span className="font-semibold text-lg">Moves:&nbsp;</span>
            <span>{moves}</span>
          </div>
          <div>
            <span className="font-semibold text-lg">Time:&nbsp;</span>
            <span>{formatTime(time)}</span>
          </div>
        </div>
        <Button className="mx-8" onClick={onClick}>
          Play again
        </Button>
      </div>
    </div>
  );
};
