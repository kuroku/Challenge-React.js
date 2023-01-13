import { countryFetch } from "./config"

export const getCountryByName = async (name) => {
  try {
    return  await countryFetch.get(`/v3.1/name/${name}`)
  } catch (error) {
    return { error }
  }
}