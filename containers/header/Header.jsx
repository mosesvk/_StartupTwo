
import Image from 'next/image'
import styles from './header.module.css'

const Header = () => {
  return (
    <div id='home' className='flex flex-row'>
      <div className=' flex flex-1 flex-col justify-center items-start mr-20'>
        <h1 className='font-extrabold text-6xl tracking-tighter'>Let&apos;s Build, Create, Organize, & Design Something Great</h1>
        <p className='text-xl '></p>

        <div className='flex flex-row w-full mt-8 mb-4'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button' className='navbar-button'>Get Started</button>
        </div>

        <div>
          <img />
          <p></p>
        </div>

        <div>
          <img />
        </div>
      </div>
    </div>
  )
}

export default Header