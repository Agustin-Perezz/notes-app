import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/index.scss';
import 'animate.css';

import { NotesApp } from './NotesApp';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 12000,
      staleTime: 60000,
      retry: 1, 
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NotesApp />
  </QueryClientProvider>
)
