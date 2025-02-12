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
        'relative transition-all duration-300 [transform-style:preserve-3d]',
        flipped && '[transform:rotateY(180deg)]',
        matched && 'border-2 border-green-500 bg-green-100 dark:bg-green-100/20'
      )}
      variant="outline"
      disabled={matched}
      onClick={onClick}
    >
      {matched ? (
        <div className="[transform:rotateY(180deg)]">{icon}</div>
      ) : (
        <>
          {/* front of card */}
          <div className="absolute [backface-visibility:hidden]">
            <Pyramid />
          </div>
          {/* back of card */}
          <div className="absolute [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {icon}
          </div>
        </>
      )}
    </Button>
  );
};
