import { useQuery } from '@tanstack/react-query'

import { settings } from '../../config/settings'

import type { Album } from './validator.dashboard'

const fetchAlbums = async (): Promise<Album[]> => {
  const response = await fetch(`${settings.BASE_URL}/albums`)
  const data = await response.json()
  return data
}
export const useAlbums = () => {
  return useQuery({
    queryFn: fetchAlbums,
    queryKey: ['albums'],
  })
}
