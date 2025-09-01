import { useState } from 'react';
import { Bag, Bar, Close } from '../components/Icons';

const Navbar = () => {
  const [openSideNavbar, setOpenSideNavbar] = useState(false);
  const handleOpenSideNavbar = (data) => setOpenSideNavbar(data);
  return (
    <nav className='sticky top-0 bg-red-400 z-[998] max-w-screen-xl mx-auto p-4 py-8 flex justify-between'>
      <h1 className='font-extrabold'>F</h1>
      <div className='flex items-center'>
        <ul
          className={`bg-red-500 font-extrabold fixed top-0 ${
            openSideNavbar ? 'right-0' : '-right-2/3'
          } w-2/3 h-screen flex flex-col items-center pt-32 gap-16 transition-all duration-1000 md:static md:flex-row md:pt-0 md:mr-32 md:gap-4 md:h-6 md:bg-red-400 z-[999]`}
        >
          <li>
            <a className='' href='#'>
              Shop
            </a>
          </li>
          <li>
            <a className='md:px-4' href='#'>
              New
            </a>
          </li>
          <li>
            <a className='md:px-4' href='#'>
              About
            </a>
          </li>
          <li>
            <a className='md:px-4' href='#'>
              Stores
            </a>
          </li>
          <li>
            <a className='md:px-4' href='#'>
              Search
            </a>
          </li>
        </ul>
        <Bag className='h-6 mr-16 md:mr-0 md:ml-auto cursor-pointer' />
        {openSideNavbar ? (
          <Close
            className='h-6 md:hidden z-[999] cursor-pointer'
            handleOpenSideNavbar={handleOpenSideNavbar}
          />
        ) : (
          <Bar
            className='h-6 md:hidden z-[999] cursor-pointer'
            handleOpenSideNavbar={handleOpenSideNavbar}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
