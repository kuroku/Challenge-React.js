
import { useCallback, useEffect, useMemo, useState } from "react"
import ListUniversity from "../../components/ListUniversity/ListUniversity"
import SearchBoxUniversity from "../../components/SearchBoxUniversity/SearchBoxUniversity"
import style from './search.module.css'
import { getAllUniversitiesRequest, searchUniversityByName } from "../../request/university"

const LIMIT_PEER_ITEMS = 10

export default function Search() {

  const [ universities, setUniversities ] = useState([])
  const [ pagination, setPagination ] = useState(1)
  const [ loading, setLoading ] = useState(true)

  const universitiesSlice = useMemo(() => {
    return universities.slice(pagination - 1, LIMIT_PEER_ITEMS * pagination)
  }, [universities, pagination])

  const onSelect = useCallback(async(search) => {
    setLoading(true)
    const { data } = await searchUniversityByName(search)
    setUniversities(data)
    setLoading(false)
  }, [])

  const getAllUniversities = useCallback(async() => {
    setLoading(true)
    const { data } = await getAllUniversitiesRequest()
    setUniversities(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    getAllUniversities()
  }, [getAllUniversities])

  return (
    <main id={style['search-university']}>
      <SearchBoxUniversity onSelect={onSelect}/>
      {loading && (
        <h1>Loading data...</h1>
      )}
      {!loading && universitiesSlice.map((university, key) => {
        return <>
          <ListUniversity university={university} key={key}/>
        </>
      })}
    </main>
  )
}