import { z } from 'zod'

const albumSchema = z.object({
  artist: z.string(),
  cover: z.string(),
  name: z.string(),
})

export type Album = z.infer<typeof albumSchema>
