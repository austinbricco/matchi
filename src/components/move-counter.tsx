type MoveCounterProps = {
  moves: number;
};

export const MoveCounter = ({ moves }: MoveCounterProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-lg font-semibold">Moves:</div>
      <div>{moves}</div>
    </div>
  );
};
