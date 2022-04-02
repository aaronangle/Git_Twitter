import { AppRoutes } from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { storage } from 'utils';
import { queryClient } from 'lib/react-query';

const ErrorFallback = () => {
  return (
    <div className="f-c-col m-1 p-1">
      <h2>
        Whoops, something went wrong, probably too many requests to GitHub's API. Give it a second
        and try refreshing the page.
      </h2>
    </div>
  );
};

function App() {
  const theme = storage.getTheme();

  if (window.matchMedia('(prefers-color-scheme: dark)').matches || theme === 'dark') {
    document.documentElement.setAttribute('color-mode', 'dark');
  } else if (theme === 'hacker') {
    document.documentElement.setAttribute('color-mode', 'hacker');
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppRoutes />
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
