import { Theme } from './settings/types';
import { AboutTeamSection } from "./components/generated/AboutTeamSection";

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] font-['Kontora',sans-serif]">
      <AboutTeamSection />
    </div>
  );
}

export default App;
