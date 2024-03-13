import Image from 'next/image'
import { useState } from 'react'



export default function Navbar() {
  
const [isAuthUser, setIsAuthUser] = useState(false)

function onLogin () {
  setIsAuthUser(true)
 
}
function onLogOut () {
  setIsAuthUser(false)
 
}

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        {!isAuthUser &&<button onClick={onLogin}>Login</button>}
        <div className='navbar-links'>
          {isAuthUser && <a href='#' className='navbar-link'>
            Dashboard
          </a>}
          <br></br>
          {isAuthUser && <a onClick={onLogOut} href='#' className='navbar-link'>
            Sign out
          </a>}
        </div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <Image
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}
