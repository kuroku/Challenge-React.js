import { serverFetch } from "./config"


export const loginFetch = async (email, password) => {
  try {
    return await serverFetch.get('users', {
      params: { email, password }
    })
  } catch (error) {
    return { error }
  }
}