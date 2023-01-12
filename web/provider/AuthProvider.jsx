import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { loginFetch } from "../request/user";

const sessionLocal = localStorage.getItem('session')
const sessionDefault = sessionLocal && JSON.parse(sessionLocal)

export default function AuthProvider({ children }) {
  const [ session, setSession ] = useState(sessionDefault)

  const login = useCallback(async (email, password) => {
    const {data: users, error } = await loginFetch(email, password)
    if (error) {
      toast.error('there was a problem. Try again later')
    }
    if (users.length === 0) {
      toast.error("user isn't register")
    }
    toast.success('user authenticated')
    const [ user ] = users
    setSession(user)
  }, [])

  const logut = useCallback(() => {
    setSession(null)
  }, [])

  useEffect(() => {
    if (session) {
      localStorage.setItem('session', JSON.stringify(session))
    }
    else {
      localStorage.removeItem('session')
    }
  }, [session])

  return (
    <AuthContext.Provider value={{ session, login, logut}}>
      {children}
      <Toaster position="bottom-center"/>
    </AuthContext.Provider>
  )
}