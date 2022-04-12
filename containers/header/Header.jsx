
import Image from 'next/image'
import styles from './header.module.css'

const Header = () => {
  return (
    <div id='home' className='flex flex-row'>
      <div className=' flex flex-1 flex-col justify-center items-start mr-20'>
        <h1 className='font-extrabold text-6xl tracking-tighter'></h1>
        <p></p>

        <div>
          <input />
          <button></button>
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