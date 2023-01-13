import style from './icon.module.css'

export default function Icon({ name = 'favorite', color = 'var(--text-color)', ...restProps}) {
  return (
    <button className={`material-icons ${style.icon} ${name}`} {...restProps} style={{ color: color}}>{name}</button>
  )
}