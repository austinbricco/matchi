import { Game } from '@/components/game/game';
import { ThemeSwitcher } from '@/components/theme-switcher';

const App = () => {
  return (
    <div className="flex flex-col flex-grow p-2 sm:p-4">
      <div className="text-right">
        <ThemeSwitcher />
      </div>
      <Game />
    </div>
  );
};

export default App;
