import { rest } from 'msw'

import { settings } from '../src/config/settings'
export const testHandlers = [
  rest.get(`${settings.BASE_URL}/docs_list`, (req, res, ctx) => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return res(ctx.status(200), ctx.json(data))
  }),
]
