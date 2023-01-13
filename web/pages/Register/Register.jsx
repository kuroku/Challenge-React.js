import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import useAuth from "../../hooks/useAuth"
import { useForm } from "react-hook-form";
import style from './register.module.css'
import { useCallback } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const auth = useAuth()

  const onSubmit = useCallback(({ email, password }) => {
    auth.register(email, password)
  }, [])

  return (
    <main id={style.register}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" id="email" required type="email" register={register('email')} placeholder="Enter your email"/>
        <Input label="Password" id="password" required type="password" register={register('password')} placeholder="Enter your passowrd"/>
        <Button icon="arrow_right_alt" type="submit">Register</Button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </main>
  )
}