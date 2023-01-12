import style from './header.module.css'
import srcLogo from '../../assets/logo.png'

export default function Header() {
  return (
    <header id={style.appbar}>
      <img src={srcLogo} alt="Condor's" />
      <ul>
        <li>Search</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </header>
  )
}