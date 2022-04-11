import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

import './navbar.module.css'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center	py-8 px-24'>
      <div className='flex-1 flex justify-start items-start'>
        <div className='mr-8'>
          <Image src={logo} alt='logoImg' height='62.56px' width='60.02px'/>
        </div>
        <div className='flex flex-row child:navbar-p'>
          <Link as='p' href='#home'>Home</Link>
          <Link as='p' href='#about'>About</Link>
          <Link as='p' href='#possibility'>Explore</Link>
          <Link as='p' href='#features'>Case Studies</Link>
          <Link as='p' href='#blog'>Library</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar