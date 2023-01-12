import style from './icon.module.css'

export default function Icon({ name = 'favorite'}) {
  return (
    <button className={`material-icons ${style.icon}`}>{name}</button>
  )
}