import { Route, BrowserRouter, Routes, Navigate  } from "react-router-dom";
import Header from "../../components/Header/Header"
import useAuth from "../../hooks/useAuth";
import Login from "../Login/Login";
import style from './pageLayout.module.css'
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";

export default function LayoutRouter() {
  const auth = useAuth()
  return (
    <div id={style['page-layout']}>
     <BrowserRouter>
      <Header />
      {
        auth.session ?
        <Routes>
         <Route path="/" element={<Search/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route  path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route  path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      }
      
     </BrowserRouter>
    </div>
  )
}