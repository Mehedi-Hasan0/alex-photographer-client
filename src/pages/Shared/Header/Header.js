import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import close from '../../../assets/icon/close.svg';
import menu from '../../../assets/icon/menu.svg';
import './Header.css';

const Header = () => {
    const [toggles, setToggles] = useState(false);

    return (
        <nav className=' flex justify-between py-4 px-6 items-center sticky top-0 z-10 mb-4 shadow-md bg-white'>
            <Link to='/' className=' font-[libre] text-4xl text-black uppercase'>Al<span className=' text-gray-600'>ex</span></Link>

            <div className=' hidden md:block font-[poppins] text-xl text-black nav-links uppercase'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <button className=' btn btn-outline btn-primary font-normal font-[poppins] text-lg'><Link to='/signin'>Sign In</Link></button>
            </div>

            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img src={toggles ? close : menu} alt='menu' className='w-[32px] h-[32px] object-contain cursor-pointer' onClick={() => setToggles((previous) => !previous)} />

                <div className={`${toggles ? 'flex' : 'hidden'} p-6 bg-[#181818] absolute top-0 right-0 w-60 h-full z-[1] flex-col items-end `}>
                    <img src={toggles ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain mb-7 cursor-pointer' onClick={() => setToggles((previous) => !previous)} />
                    <div className='flex flex-col font-[poppins] uppercase text-xl text-white w-full mobile-nav-link'>

                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header;