import Image from 'next/image'
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
      </div>
    </div>
  )
}

export default Navbar