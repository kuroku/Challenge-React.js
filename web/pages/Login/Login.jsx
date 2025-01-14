import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import useAuth from "../../hooks/useAuth"
import { useForm } from "react-hook-form";
import style from './login.module.css'
import { useCallback } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const auth = useAuth()

  const onSubmit = useCallback(({ email, password }) => {
    auth.login(email, password)
  }, [])

  return (
    <main id={style.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" id="email" required type="email" register={register('email')} placeholder="Enter your email"/>
        <Input label="Password" id="password" required type="password" register={register('password')} placeholder="Enter your passowrd"/>
        <Button icon="arrow_right_alt" type="submit">Login</Button>
        <p>You don't have an account yet? <Link to="/register">Create account</Link></p>
      </form>
    </main>
  )
}