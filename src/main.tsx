import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import { NotesApp } from './NotesApp';
import './styles/index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10000,
      retry: 1, 
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <NotesApp />
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>
)
