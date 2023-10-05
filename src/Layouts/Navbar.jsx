import { NavLink } from 'react-router-dom';
import siteLogo from '../Assets/images/Nomadic-Travelers-Logo.png';
import { FiSearch } from 'react-icons/fi';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='container mx-auto px-[5%]  flex justify-between items-center lg:pt-9 pt-3 pb-4 relative'>
      {/* site logo */}
      <div>
        <img
          className='w-[80px]'
          src={siteLogo}
          alt='Nomadic Traveler Logo'
        />
      </div>
      {/* nav items */}
      <div className='hidden lg:block'>
        <div className='relative'>
          <FiSearch className='absolute top-[13px] left-[16px] text-white text-[24px]' />
          <input
            className='outline-none border border-white bg-white px-5 pl-14 py-2 rounded bg-opacity-[0.3] placeholder:text-white placeholder:font-medium lg:w-[350px] text-[20px] text-white font-medium'
            placeholder='Search your Destination...'
            type='text'
          />
        </div>
      </div>
      <ul
        className={` xl:static fixed lg:top-[110px] top-[95px] ${
          isOpen ? 'right-0' : 'right-[-100%]'
        } xl:h-auto h-screen xl:w-auto w-[50%] flex xl:flex-row flex-col xl:bg-transparent bg-sky-200 justify-start xl:justify-center items-center xl:gap-10 gap-8 duration-700 pt-10 xl:pt-0 z-[100]  bg-opacity-[0.5] `}
      >
        <li
          className='text-white font-medium text-[20px] hover:scale-[1.1] duration-300 hover:text-sky-600'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <NavLink to='/'>Home</NavLink>
        </li>
        <li
          className='text-white font-medium text-[20px] hover:scale-[1.1] duration-300 hover:text-sky-600'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <NavLink to='/destinations'>Destinations</NavLink>
        </li>
        <li
          className='text-white font-medium text-[20px] hover:scale-[1.1] duration-300 hover:text-sky-600'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li
          className='text-white font-medium text-[20px] hover:scale-[1.1] duration-300 hover:text-sky-600'
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <button className='px-8 py-2 bg-[#F9A51A] rounded  text-white font-medium text-[20px]'>
        Login
      </button>
      <div className='xl:hidden opacity-[0.8]'>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color='#FFF'
        />
      </div>
    </nav>
  );
};

export default Navbar;
