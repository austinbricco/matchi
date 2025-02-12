import { GameStat } from '@/components/game-stat';

type MoveCounterProps = {
  moves: number;
};

export const MoveCounter = ({ moves }: MoveCounterProps) => {
  return <GameStat label="Moves" value={moves} />;
};
