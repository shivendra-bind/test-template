import { z } from 'zod'

const docsSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

export type Doc = z.infer<typeof docsSchema>
