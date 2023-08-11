import type { ElementType } from 'react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorPage } from '../components/404ErrorPage'
import Spinner from '../components/Spinner'

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) => (
  <ErrorBoundary fallback={<ErrorPage />}>
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  </ErrorBoundary>
)

Loadable.displayName = 'Loadable'

export default Loadable
