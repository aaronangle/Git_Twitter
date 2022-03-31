import { AppRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import storage from 'utils/storage';

function App() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches || storage.getDarkMode()) {
    document.documentElement.setAttribute('color-mode', 'dark');
  }
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
