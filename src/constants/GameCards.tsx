import { GameCard } from '@/types/GameCard';
import { Apple, Bomb, Cookie, Ghost } from 'lucide-react';

export const UNIQUE_GAME_CARDS: GameCard[] = [
  {
    category: 'ghost',
    icon: <Ghost />,
    matched: false,
  },
  {
    category: 'bomb',
    icon: <Bomb />,
    matched: false,
  },
  {
    category: 'apple',
    icon: <Apple />,
    matched: false,
  },
  {
    category: 'cookie',
    icon: <Cookie />,
    matched: false,
  },
];
