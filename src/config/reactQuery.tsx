import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1,
      suspense: true,
    },
  },
})

export default queryClient
