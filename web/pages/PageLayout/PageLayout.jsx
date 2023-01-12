import { Route, BrowserRouter, Routes  } from "react-router-dom";
import Header from "../../components/Header/Header"
import useAuth from "../../hooks/useAuth";
import Login from "../Login/Login";
import style from './pageLayout.module.css'
import Search from "../Search/Search";

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
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      }
      
     </BrowserRouter>
    </div>
  )
}