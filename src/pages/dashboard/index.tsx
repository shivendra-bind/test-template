import { lazy } from 'react'

import Loadable from '../../shared/Loadable'

export const DashboardPage = Loadable(lazy(() => import('./Dashboard')))
