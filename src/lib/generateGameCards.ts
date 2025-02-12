import { UNIQUE_GAME_CARDS } from '@/constants/GameCards';
import { GameCard } from '@/types/GameCard';
import { GameMode } from '@/types/GameMode';

export const generateGameCards = (gameMode?: GameMode): GameCard[] => {
  if (!gameMode) return [];
  let gameCards: GameCard[] = [];

  switch (gameMode) {
    case 'easy':
      gameCards = UNIQUE_GAME_CARDS.slice(0, 4);
      break;
    case 'medium':
      gameCards = UNIQUE_GAME_CARDS.slice(0, 6);
      break;
    case 'hard':
      gameCards = UNIQUE_GAME_CARDS;
      break;
    default:
      throw new Error(`Invalid game mode: ${gameMode}`);
  }

  // duplicate filtered list for pairs and randomize order
  return gameCards.concat(gameCards).sort(() => 0.5 - Math.random());
};
