'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import '../app/globals.css';

const queryClient = new QueryClient();

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}