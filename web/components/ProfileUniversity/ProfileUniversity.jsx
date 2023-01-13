import { useCallback, useEffect, useMemo, useState } from 'react'
import style from './profileUniversity.module.css'
import { getCountryByName } from '../../request/countries'

export default function ProfileUniversity({university}) {

  if (!university) {
    return (<article id={style['profile-university']}>Select a university to view the information</article>)
  }
  const { name, web_pages, country, "state-province": location } = university
  const [ loading, setLoading ] = useState(true)

  const [ infoCountry, setInfoCountry ] = useState()
  
  const getInfoCountry = useCallback(async () => {
    setLoading(true)
    const { data } = await getCountryByName(country)
    setLoading(false)
    setInfoCountry(data[0])
  }, [country])

  const countryCapital = useMemo(() => {
    if ( infoCountry) {
      return infoCountry.capital.join(' ')
    }
  }, [infoCountry])

  const countryCurrency = useMemo(() => {
    if (infoCountry) {
      const currency = Object.entries(infoCountry.currencies)[0][1]
      return `${currency.symbol}`
    }
  }, [infoCountry])

  const countryLanguage = useMemo(() => {
    if (infoCountry) {
      const langs = Object.entries(infoCountry.languages).map((array) => array[1])
      return langs.join(' ')
    }
  }, [infoCountry])

  useEffect(() => {
    getInfoCountry()
  }, [getInfoCountry])

  if (loading) {
    return (
      <article id={style['profile-university']}>
        <p>Loading Info...</p>
      </article>
    )
  }
  else return (
    <article id={style['profile-university']}>
      <h1>{name}</h1>
      <p>Malesuada purus nibh dictumst odio sed elit adipiscing. Turpis malesuada nulla molestie ac gravida magna. Imperdiet tempus, commodo non morbi nisi. Et sit dictum velit facilisi id. Sed augue eget metus non habitant. Donec praesent vel tellus consequat turpis venenatis quis.
  Curabitur urna arcu et venenatis, aliquet turpis elit risus. Sapien, at vitae molestie purus nec quam fermentum adipiscing. Varius eget nibh mi, ut dui nisi, cursus nunc. Hendrerit faucibus amet vel nisl, integer. Odio sit pretium sed nascetur vitae in aliquam feugiat integer.</p>
      <ul>
        <li>Website: <a href={web_pages[0]} target="_blank">{web_pages[0]}</a></li>
        <li>Location: {!location ? 'N/A' : location}</li>
        <li>Country’s capital: {countryCapital}</li>
        <li>Currency: {countryCurrency}</li>
        <li>Language: {countryLanguage}</li>
        <li>Population: {infoCountry?.population}</li>
      </ul>
    </article>
  )
}