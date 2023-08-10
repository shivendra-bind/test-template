import { lazy } from 'react'

import Loadable from '../../shared/Loadable'

export const HomePage = Loadable(lazy(() => import('./Home')))
