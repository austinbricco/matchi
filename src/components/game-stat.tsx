type GameStatProps = {
  label: string;
  value: string | number;
};

export const GameStat = ({ label, value }: GameStatProps) => {
  return (
    <div className="flex space-x-1 items-center">
      <div className="text-lg font-semibold">{label}:</div>
      <div>{value}</div>
    </div>
  );
};
