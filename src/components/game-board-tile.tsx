import { Pyramid } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

type GameBoardTileProps = {
  icon: React.ReactNode;
};

export const GameBoardTile = ({ icon }: GameBoardTileProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Button
      className="h-12 w-12 shadow-sm hover:shadow-md [&_svg]:size-6"
      variant="outline"
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? icon : <Pyramid />}
    </Button>
  );
};
