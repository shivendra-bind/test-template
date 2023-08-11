import { dashboardHandlers } from './dashboard'
import { testHandlers } from './demo'

export const handlers = [...testHandlers, ...dashboardHandlers]
