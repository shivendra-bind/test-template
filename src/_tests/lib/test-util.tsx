// eslint-disable-next-line import/named
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    error: () => {},
    log: console.log,
    warn: console.warn,
  },
})
export function QueryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
