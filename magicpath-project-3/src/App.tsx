import { Theme } from './settings/types';
import { WhyChooseUs } from './components/generated/WhyChooseUs';

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

  return <WhyChooseUs />;
}

export default App;
