import { rest } from 'msw'

import { settings } from '../src/config/settings'

import { albums } from './data/albums'
export const dashboardHandlers = [
  rest.get(`${settings.BASE_URL}/albums`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(albums))
  }),
]
