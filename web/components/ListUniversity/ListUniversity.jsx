import Icon from '../Icon/Icon'
import style from './listUniversity.module.css'
import useAuth from '../../hooks/useAuth'
import { useCallback, useMemo } from 'react'

export default function ListUniversity({ university, onSelected = () => {} }) {
  const { addFavoriteUniversity, removeFavoriteUniversity, session } = useAuth()

  const isAddFavorite = useMemo(() => {
    if ( session.favorite_universities ) {
      return session.favorite_universities.some((anotherUniversity) => anotherUniversity.name === university.name)
    }
    else return false
  }, [session]) 

  const iconStartToggleView = useMemo(() => {
    if (isAddFavorite) {
      return { name: 'star', color: 'var(--yellow-color)'}
    }
    else {
      return { name: 'star_outlined'}
    }
  }, [session])

  const toggleFavorite = useCallback(() => {
    if (!isAddFavorite) {
      addFavoriteUniversity(university)
    }
    else {
      removeFavoriteUniversity(university)
    }
  }, [university, addFavoriteUniversity, removeFavoriteUniversity])
  

  return (
    <li id={style.university} onClick={() => onSelected(university)}>
      <header>
        <h1>{university.name}</h1>
        <span>{university.country}</span>
        <menu>
          <Icon  onClick={toggleFavorite} {...iconStartToggleView}/>
          <a href={university.web_pages[0]} target="_blank"> <Icon name="open_in_new"/></a>
        </menu>
      </header>
      <p>{university.web_pages[0]}</p>
    </li>
  )
}