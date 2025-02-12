export type GameCardCategory =
  | 'anchor'
  | 'apple'
  | 'baby'
  | 'banana'
  | 'bomb'
  | 'cookie'
  | 'crown'
  | 'ghost';

export type GameCard = {
  category: GameCardCategory;
  icon: React.ReactNode;
  matched: boolean;
};
