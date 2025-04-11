import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  subscribed: z.boolean(),
})

export default defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, bodySchema.parse)

  try{
    await setUserSession(event, {
      user: {
        username: email,
      },
    })
    return {}
  }
  catch{
    throw createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }
})
