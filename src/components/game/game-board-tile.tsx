import { Pyramid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameCard } from '@/types/GameCard';
import { cn } from '@/lib/utils';

type GameBoardTileProps = {
  flipped: boolean;
  onClick: () => void;
} & Pick<GameCard, 'icon' | 'matched'>;

export const GameBoardTile = ({ flipped, icon, matched, onClick }: GameBoardTileProps) => {
  return (
    <Button
      className={cn(
        'h-14 w-14 sm:h-16 sm:w-16 shadow-sm hover:shadow-md [&_svg]:size-7 sm:[&_svg]:size-8 [&_svg]:stroke-1',
        matched && 'border-2 border-green-500 bg-green-100 dark:bg-green-100/20'
      )}
      variant="outline"
      disabled={matched}
      onClick={onClick}
    >
      {flipped || matched ? icon : <Pyramid />}
    </Button>
  );
};
