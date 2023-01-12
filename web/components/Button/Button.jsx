import style from './button.module.css'

export default function Button({ 
  children, 
  className,
  icon,
  fullwidth = false,
  ...restProps
}) {
  return (
    <button {...restProps} className={`${className} ${style.button}`}>
      { children }
      { icon && <span className="material-icons">{icon}</span> }
    </button>
  )
}