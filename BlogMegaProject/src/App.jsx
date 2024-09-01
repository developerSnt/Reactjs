
import { useEffect, useState } from 'react'
import './App.css'
import { Provider, useDispatch } from 'react-redux'
import authService from  "./appwrite/auth"
import {} from "./store/store"
import { login, logout } from './store/authSlice'

import { Outlet } from 'react-router-dom'
import { Footer, Header } from './component/Index'


function App() {
  const [loading, setloading] = useState(true)
 const dispatch  = useDispatch()

 useEffect (()=>{
  authService.getCurrentuser().then((userData) =>{
         if (userData){
          dispatch(login({userData}))
         }
         else {
          dispatch(logout())
         }
   })
   .finally(()=> setloading(false))
 },[])
// console.log(import.meta.env.VITE_MYKEY);

  return !loading ? (

   <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
    <div className='w-full block'>test
<Header></Header>
   <main>
    todo <Outlet></Outlet>
   </main>
 <Footer></Footer>
 </div>
   </div>

  ) : null
}

export default App

