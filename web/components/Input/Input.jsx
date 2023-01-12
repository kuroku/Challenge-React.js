import style from './input.module.css'

export default function Input({ 
  id, 
  label = 'Label', 
  placeholder = 'placeholder',
  required = false,
  type,
  register
}) {
  return (
    <div className={style['text-field']}>
      <label htmlFor={id}>{label} {required && '*'}</label>
      <input id={id} type={type} {...register} required={required} placeholder={placeholder}/>
    </div>
  )
}