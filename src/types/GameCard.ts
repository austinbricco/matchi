export type GameCardCategory = 'apple' | 'bomb' | 'cookie' | 'ghost';

export type GameCard = {
  category: GameCardCategory;
  icon: React.ReactNode;
  matched: boolean;
};
