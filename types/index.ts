type Errors<T> = Partial<{
  [K in keyof T]?: string
}>

interface SignupForm {
  email: string
  password: string
  subscribed: boolean
}

export type{ Errors, SignupForm }

