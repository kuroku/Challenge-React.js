import style from './header.module.css'
import srcLogo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function Header() {
  const { session, logout } = useAuth()
  return (
    <header id={style.appbar}>
      <img src={srcLogo} alt="Condor's" />
      { session && ( <ul>
        <Link to="/">
          <li>Search</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/"><li onClick={logout}>Logout</li></Link>
      </ul>)}
     
    </header>
  )
}