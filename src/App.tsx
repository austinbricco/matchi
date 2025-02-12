import { Game } from '@/components/game/game';
import { ThemeSwitcher } from './components/theme-switcher';

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="text-right p-4">
        <ThemeSwitcher />
      </div>
      <Game />
    </div>
  );
};

export default App;
