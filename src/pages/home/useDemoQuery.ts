import { useQuery } from '@tanstack/react-query'

import { settings } from '../../config/settings'
import type { Doc } from '../../validators/demo'

export const fetchDemo = async (): Promise<Doc[]> => {
  const res = await fetch(`${settings.BASE_URL}/docs_list`)
  const data = await res.json()
  return data
}

const useDemoQuery = () => {
  return useQuery({ queryFn: fetchDemo, queryKey: ['demo'] })
}

export default useDemoQuery
