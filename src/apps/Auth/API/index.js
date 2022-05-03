import instance from "../../../configs"

export const signIn = data => {
  return instance.post('auth/token/login', data)
}