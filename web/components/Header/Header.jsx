import style from './header.module.css'
import srcLogo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth'

export default function Header() {
  const auth = useAuth()
  return (
    <header id={style.appbar}>
      <img src={srcLogo} alt="Condor's" />
      { auth.session && ( <ul>
        <li>Search</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>)}
     
    </header>
  )
}