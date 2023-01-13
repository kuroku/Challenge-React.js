import { useCallback, useEffect, useMemo, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import style from './searchBoxUniversity.module.css'
import { getAllUniversitiesRequest } from '../../request/university'

export default function SearchBoxUniversity({ onSelect }) {
  const [ universities, setUniversities ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const formatResult = useCallback((university) => {
    return <>
    <span style={{ display: 'block', textAlign: 'left' }} key={university.name}>{university.name}</span>
    </>
  }, [])

  const onSearch = useCallback(async(search) => {
    onSelect(search)
  }, [])

  const showNoResultsText = useMemo(() => {
    return loading ? 'Search data...' : 'No results'
  }, [loading])

  const getAllUniversities = useCallback(async() => {
    const { data } = await getAllUniversitiesRequest()
    setLoading(false)
    setUniversities(data)
  }, [])

  useEffect(() => {
    getAllUniversities()
  }, [])
  
  return (
    <div id={style['search-box-university']}>
      <ReactSearchAutocomplete 
        items={universities}
        onSearch={onSearch}
        onSelect={(university) => onSelect(university.name)}
        autoFocus
        showNoResultsText={showNoResultsText}
        formatResult={formatResult}
        />
    </div>
  )
}