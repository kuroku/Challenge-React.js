import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import useSession from "../../hooks/useAuth"
import { useForm } from "react-hook-form";
import style from './login.module.css'
import { useCallback } from "react";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const session = useSession()

  const onSubmit = useCallback(({ email, password }) => {
   session.login(email, password)
  }, [])

  return (
    <main id={style.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" id="email" required type="email" register={register('email')}/>
        <Input label="Password" id="password" required type="email" register={register('password')}/>
        <Button icon="arrow_right_alt" type="submit">Login</Button>
      </form>
    </main>
  )
}