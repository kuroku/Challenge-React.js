import style from './profile.module.css'
import useAuth from '../../hooks/useAuth'
import ListUniversity from '../../components/ListUniversity/ListUniversity'
import ProfileUniversity from '../../components/ProfileUniversity/ProfileUniversity'
import { useCallback, useState } from 'react'

export default function Profile() {
  const { session } = useAuth()
  const [ universitySelected, setUniversitySelected ] = useState()

  const onUniversitySelected = useCallback((university) => {
    setUniversitySelected(university)
  }, [])

  return (
    <main id={style.profile}>
      <section id="my-favorites">
        <h2>My favorites</h2>
        {session.favorite_universities.length === 0 && (
          <article className={style.card}>
            <p>You have not added any university to favorites</p>
          </article>
        )}
        {session.favorite_universities.map((university, key) => {
          return <ListUniversity university={university} key={key} onSelected={onUniversitySelected}/>
        })}
      </section>
      <section id="selected-university">
        <h2>Selected university</h2>
        <ProfileUniversity university={universitySelected}/>
      </section>
    </main>
  )
}