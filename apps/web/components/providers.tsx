'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';

let queryClient: QueryClient | null = null;

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(() => queryClient ?? new QueryClient());

  React.useEffect(() => {
    queryClient = client;
  }, [client]);

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
