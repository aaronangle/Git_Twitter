import { AppRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import storage from 'utils/storage';

const queryClient = new QueryClient();

function App() {
  const theme = storage.getTheme();

  if (window.matchMedia('(prefers-color-scheme: dark)').matches || theme === 'dark') {
    document.documentElement.setAttribute('color-mode', 'dark');
  } else if (theme === 'hacker') {
    document.documentElement.setAttribute('color-mode', 'hacker');
  }

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
