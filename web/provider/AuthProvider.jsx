import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { loginFetch, registerFetch, updateProfileUser } from "../request/user";

const sessionLocal = localStorage.getItem('session')
const sessionDefault = sessionLocal && JSON.parse(sessionLocal)

export default function AuthProvider({ children }) {
  const [ session, setSession ] = useState(sessionDefault)

  const addFavoriteUniversity = useCallback(async(university) => {
    const loadingID = toast.loading('Add to favorites...')
    if (session.favorite_universities) {
      session.favorite_universities = [university, ...session.favorite_universities]
    }
    else {
      session.favorite_universities = [university]
    }
    const { error } = await updateProfileUser(session)
    if (error) {
      toast.error('error when adding the university')
    }
    else {
      setSession({...session})
      toast.success('university added successfully')
    }

    toast.remove(loadingID)
    
  }, [session])

  const removeFavoriteUniversity = useCallback(async(university) => {
    const loadingID = toast.loading('Remove to favorites...')
    session.favorite_universities = session.favorite_universities.filter(({name}) => name !== university.name)
    const { error } = await updateProfileUser(session)
    toast.remove(loadingID)
    if (error) {
      toast.error('error when removed the university')
    }
    else {
      setSession({...session})
      toast.success('university removed successfully')
    }
  }, [session])

  const login = useCallback(async (email, password) => {
    const loadingID = toast.loading('Loading...')
    const {data: users, error } = await loginFetch(email, password)
    toast.remove(loadingID)
    if (error) {
      toast.error('there was a problem. Try again later')
    }
    if (users.length === 0) {
      toast.error("user isn't register")
    }
    else {
      toast.success('user authenticated')
      const [ user ] = users
      setSession(user)
    }
  }, [])

  const register = useCallback(async(email, password) => {
    const loadingID = toast.loading('Loading...')
    const {data: user, error} = await registerFetch(email, password)
    toast.remove(loadingID)
    if (error) {
      toast.error("Your data could not be saved. I try again later")
    }
    else {
      setSession(user)
      toast.success('user created')
    }
  }, [])

  const logout = useCallback(() => {
    setSession(null)
    toast.success('session closed successfully')
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
    <AuthContext.Provider value={{ session, login, register, logout, addFavoriteUniversity, removeFavoriteUniversity }}>
      {children}
      <Toaster position="top-center"/>
    </AuthContext.Provider>
  )
}