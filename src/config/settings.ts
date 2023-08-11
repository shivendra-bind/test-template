import { z } from 'zod'

export const settingsSchema = z.object({
  SB_API_BASE_PATH: z.string(),
  SB_API_PREFIX: z.string(),
  SB_API_VERSION: z.string(),
  SB_PORT: z.coerce.number().default(3000),
})

export type Settings = {
  PORT: number
  API_BASE_PATH: string
  API_VERSION: string
  API_PREFIX: string
  BASE_URL: string
}

const settingsData = settingsSchema.safeParse(process.env)

if (!settingsData.success) {
  throw new Error(settingsData.error.message)
}

export const settings: Settings = {
  API_BASE_PATH: settingsData.data.SB_API_BASE_PATH,
  API_PREFIX: settingsData.data.SB_API_PREFIX,
  API_VERSION: settingsData.data.SB_API_VERSION,
  BASE_URL: `${settingsData.data.SB_API_BASE_PATH}/${settingsData.data.SB_API_VERSION}/${settingsData.data.SB_API_PREFIX}`,
  PORT: settingsData.data.SB_PORT,
}
