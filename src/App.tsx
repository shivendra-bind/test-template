import { useIsFetching, QueryErrorResetBoundary } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'

import Loader from './components/Loader'
import { AppRoutes } from './routes'
const App: React.FC = () => {
  const isFetching = useIsFetching()

  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div>
                There was an error!
                <button
                  onClick={() => {
                    resetErrorBoundary()
                  }}
                >
                  Try again
                </button>
              </div>
            )}
          >
            {isFetching !== 0 && <Loader />}
            <AppRoutes />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </>
  )
}

export default App
