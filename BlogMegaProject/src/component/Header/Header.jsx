import React from 'react'
import { Logo, LogoutBtn } from '../Index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const authstatus = useSelector((state)=> state.auth.status)

    const navigate = useNavigate()
    const navItems = [
    {
        name : 'Home',
        slug : "/",
        active: true

    },{
        name: 'Singup',
        slug : "/singup",
        active: !authstatus
    },
    {
        name: "Login",
        slug: "/login",
        active: !authstatus,
    },
    
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authstatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authstatus,
    },
    ]

  return (
    <header className='py-3 shadow bg-gray-500'>
  <Container>
<nav>
    <div className='mr-4'>
        <Link to='/'>
        <Logo width='70px'></Logo>
        </Link>
     <ul className='flex ml-auto'>
          {navItems.map((item)=>
             item.active? (
                <li key={item.name}>
                      <button
                      onClick={() => navigate(item.slug)}
                      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                      >{item.name}</button>
                </li>
             ) : null
          )}
          {authstatus && (
           <li>
                <LogoutBtn></LogoutBtn>
           </li>
          )}
     </ul>


    
    </div>
</nav>

  </Container>

    </header>
  )
}

