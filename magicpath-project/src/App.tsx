import { TSFContact } from './components/generated/TSFContact';

function App() {
  document.documentElement.classList.remove('dark');

  return (
    <div className="w-full h-full">
      <TSFContact />
    </div>
  );
}

export default App;
