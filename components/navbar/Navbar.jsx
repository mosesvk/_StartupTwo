import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

import './navbar.module.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='flex justify-between items-center	lg:py-8 lg:px-24'>
      <div className='flex-1 flex justify-around items-center'>
        <div className='mr-8'>
          <Image src={logo} alt='logoImg' height='62.56px' width='60.02px' />
        </div>
        <div className='hidden lg:flex lg:flex-row child:navbar-p'>
          <Link href='#home'>
            Home
          </Link>
          <Link href='#about'>
            About
          </Link>
          <Link href='#possibility'>
            Explore
          </Link>
          <Link href='#features'>
            Case Studies
          </Link>
          <Link href='#blog'>
            Library
          </Link>
        </div>
        <div className='hidden lg:flex justify-end items-center'>
          <p className='navbar-p'>Sign in</p>
          <button type='button' className='navbar-button'>
            Sign up
          </button>
        </div>
        <div className='ml-4 relative lg:hidden '>
          {toggleMenu
            ? <RiCloseLine color='fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='flex flex-end items-end flex-col bg-gray-800 p-8 absolute right-0 mt-4 min-w-210 rounded-md shadow-md min-w-max'>
              <div className='flex flex-col child:navbar-p child:my-2 pb-2'>
                <Link as='p' href='#home'>Home</Link>
                <Link as='p' href='#about'>About</Link>
                <Link as='p' href='#possibility'>Explore</Link>
                <Link as='p' href='#features'>Case Studies</Link>
                <Link as='p' href='#blog'>Library</Link>
              </div>
              <div className='child:my-1 child:text-right'>
                <p className='navbar-p'>Sign in</p>
                <button type='button' className='navbar-button'>
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
