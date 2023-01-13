import { universityFetch } from "./config"

export const searchUniversityByName = async ( name ) => {
  try {
    return  await universityFetch.get('/search', {
      params: { name }
    })
  } catch (error) {
    return { error }
  }
 
}

export const getAllUniversitiesRequest = async () => {
  try {
    return  await universityFetch.get('/search')
  } catch (error) {
    return { error }
  }
}