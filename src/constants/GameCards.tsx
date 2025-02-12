import { GameCard } from '@/types/GameCard';
import { Anchor, Apple, Baby, Banana, Bomb, Cookie, Crown, Ghost } from 'lucide-react';

export const UNIQUE_GAME_CARDS: GameCard[] = [
  {
    category: 'anchor',
    icon: <Anchor />,
    matched: false,
  },
  {
    category: 'apple',
    icon: <Apple />,
    matched: false,
  },
  {
    category: 'baby',
    icon: <Baby />,
    matched: false,
  },
  {
    category: 'banana',
    icon: <Banana />,
    matched: false,
  },
  {
    category: 'bomb',
    icon: <Bomb />,
    matched: false,
  },
  {
    category: 'cookie',
    icon: <Cookie />,
    matched: false,
  },
  {
    category: 'crown',
    icon: <Crown />,
    matched: false,
  },
  {
    category: 'ghost',
    icon: <Ghost />,
    matched: false,
  },
];
