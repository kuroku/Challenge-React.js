import { serverFetch } from "./config"

export const registerFetch = async (email, password) => {
  try {
    return await serverFetch.post('users', {
      email, password, favorite_universities: []
    })
  } catch (error) {
    return { error }
  }
}
export const loginFetch = async (email, password) => {
  try {
    return await serverFetch.get('users', {
      params: { email, password }
    })
  } catch (error) {
    return { error }
  }
}

export const updateProfileUser = async (userSession) => {
  const url = `users/${userSession.id}`
  try {
    return await serverFetch.put(url, userSession)
  } catch (error) {
    return { error }
  }
}