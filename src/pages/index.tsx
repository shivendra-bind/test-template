import { lazy } from 'react'

import Loadable from '../shared/Loadable'

export const AboutPage = Loadable(lazy(() => import('./About')))
export const NoMatchPage = Loadable(lazy(() => import('./NoPage')))
