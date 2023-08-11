import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dashboard from '../pages/dashboard/Dashboard'

import { QueryWrapper } from './lib/test-util'
// this is a simple example of a test
test.skip('Working Counter', async () => {
  const user = userEvent.setup()
  const { getByText } = render(<Dashboard />)
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText(/count is: \d/)

  await user.click(button)
  expect(getByText('count is: 1')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 2')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 3')).toBeInTheDocument()
})

test('working with msw', async () => {
  render(
    <QueryWrapper>
      <Dashboard />
    </QueryWrapper>,
  )

  await waitFor(() => {
    expect(screen.getByText('Listen Now')).toBeInTheDocument()
  })
})
